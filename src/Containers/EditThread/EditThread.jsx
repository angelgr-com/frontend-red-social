import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './EditThread.css';
import { raiz } from '../../utiles';
import React, { useState } from 'react';
import axios from 'axios';
import { ID, POST } from '../../redux/types';

const EditThread = (props) => {

    //console.log("entro en editThread");

    // Navegar
    let navigate = useNavigate();

    // Hook

    const [datosUpdateThread, setDatosUpdateThread] = useState({
        title: "", author: ""
        // , theme: "", content: ""

    });

    const [msgError, setMsgError] = useState("");



    const rellenarDatos = (e) => {
        setDatosUpdateThread({
            ...datosUpdateThread,
            [e.target.name]: e.target.value
        })
    };
    const goPost = async () => {

        //console.log("entra en goHome")
        navigate("/posts");
        props.dispatch({ type: POST, payload: props.post.state },);

    }

    // Guardamos en REDUX el criterio
    // props.dispatch({type: , payload: }); 
    // navigate();
    // }

    // Funcion que sube el thread cambiado a BBDD
    const updateThread = async () => {
        //console.log("entro en funcion 5555555555555555")
        //console.log(datosUpdateThread)


        let body = {
            title: datosUpdateThread.title
            // ,
            // author: datosUpdateThread.nickname
            // theme: datosUpdateThread.theme,
            // posts: [{
            //     author: props.credentials.name,
            //     content: datosUpdateThread.content
            // }
            // ]
        }

        //3 envio de axios

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {
            console.log("mando thread actualizado a axios")
            console.log(props);
            console.log(props.post.state);
            //console.log("hago llamada a axios")
            let resultado = await axios.put(raiz + `/threads/${props.post.state}`, body,config); // VERIFICAR FINAL DE LINEA PREGUNTAR A RAFA
            console.log(resultado)
            console.log("cambios llegados a backend")
            setDatosUpdateThread(resultado.data);
            props.dispatch({ type: POST, payload: props.post.state },);
            setTimeout(() => {
                navigate("/");
            }, 1000);

            // AQUI FALTA NAVIGATE A DONDE?

        } catch (error) {
            // //console.log(error);
        }

    };

    return (

        <div className="designEditThread">
            <div className="topDesignPost">

                <div className="itemButtonNewPost" onClick={() => goPost()} >Post</div>
            </div>
            <div className="formEditThread">
                <p>UPDATE HERE YOUR THREAD <strong>TITLE</strong></p>
                <input type="text" name="title" id="title" placeholder="write here your new title" onChange={(e) => { rellenarDatos(e) }} />
                {/* <input type="text" name="theme" id="theme" placeholder="write here your new theme" onChange={(e) => { rellenarDatos(e) }} />
                <input type="text" name="content" id="content" placeholder="write here your new content" onChange={(e) => { rellenarDatos(e) }} /> */}
                <div className="buttonnewComment" onClick={() => updateThread()}>UPDATE</div>
            </div>
        </div>
    )

}





export default connect((state) => ({
    post: state.post,
    credentials: state.credentials
}))(EditThread);
