import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './DeleteThread.css';
import { raiz } from '../../utiles';
import React, { useState } from 'react';
import axios from 'axios';

const DeleteThread = (props) => {

    console.log("entro en DeleteThread");

    // Navegar
    let navigate = useNavigate();

    // Hook
    // const [deletedThread, setuptdatedThread] = useState([]);


    // Guardamos en REDUX el criterio
    // props.dispatch({type: , payload: }); 
    // navigate();
    // }
    let config = {
        headers: { Authorization: `Bearer ${props.credentials.token}` }
    };
    const goPost = async () => {

        console.log("entra en goHome")
        navigate("/posts");

    }
    // Funcion que sube el thread cambiado a BBDD
    const eraseThread = async () => {
        console.log("entro en funcion que borra el thread")
        try {
            console.log("mando thread a borrar a axios")
            console.log(props);
            console.log("hago llamada a axios")
            let resultado = await axios.delete(raiz + `/threads/${props.post}`,config); // NO FUNCIONA
            console.log(resultado)
            console.log("cambios llegados a backend")

            setTimeout(() => {
                navigate("/");
            }, 1000);
            // AQUI FALTA NAVIGATE A DONDE?

        } catch (error) {
            // console.log(error);
        }

    };

    return (

        <div className="designDeleteThread">
            <div className="topDesignPost">
                <div className="itemButtonNewPost"
                     onClick={() => goPost()} >
                    Post
                </div>
            </div>
            <div className="formEditThread" 
                 onClick={() => eraseThread()}>
                <p>Are you sure you want to delete this thread?<br/><br/>This action can't be undone.</p>
                <div className="deleteButton">DELETE THREAD</div>
            </div>
        </div>

    )

}





export default connect((state) => ({
    post: state.post
}))(DeleteThread);
