
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { checkError } from '../../utiles';
import './NewThread.css';
import { connect } from "react-redux";
import { raiz } from '../../utiles';

const NewThread = (props) => {
    console.log("entro en newThread")

    // Navegar

    //Hooks
    const [datosNewThread, setDatosNewThread] = useState({
        title: "", theme: "", author: "", content: ""

    });

    const [msgError, setMsgError] = useState("");



    const rellenarDatos = (e) => {
        setDatosNewThread({
            ...datosNewThread,
            [e.target.name]: e.target.value
        })
    };
    const goThread = async () => {

        console.log("entra en goHome")
        navigate("/:theme");

    }
    //Funciones locales del componente
    let navigate = useNavigate();
    const newThreadMe = async () => {

        //Array de distintos campos

        setMsgError("");
        let error = "";

        let arrayCampos = Object.entries(datosNewThread);

        // //1 comprobación de errores antes de enviar al backend



        for (let elemento of arrayCampos) {
            error = checkError(elemento[0], elemento[1]);

            if (error !== "ok") {
                setMsgError(error);
                return;
            };
        };

        console.log("todo ha ido bien")

        //2construimos el body

        let body = {
            title: datosNewThread.title,
            theme: datosNewThread.theme,
            posts: [{
                author: props.credentials.name,
                content: datosNewThread.content
            }
            ]
        }

        //3 envio de axios


        try {

            let resultado = await axios.post(raiz + "/threads/", body);
            console.log(resultado);

            setTimeout(() => {
                navigate("/theme");
            }, 1000);



        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className='designnewThread'>
            <div className="topDesignPost">

                <div className="itemButtonNewPost" onClick={() => goThread()} >Home</div>
            </div>
            <div className="cardnewThread">

                <div className="upCardnewThread">FORMULARIO DE REGISTRO</div>
                <div className="middleCardnewThread">
                    {/* {<pre>{JSON.stringify(datosUsuario, null,2)}</pre>} */}
                    <label htmlFor="title">Title</label>
                    <input className='inputnewThread' type="text" name="title" id="title" placeholder="title:" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                    <label htmlFor="theme">Theme</label>
                    <input className='inputnewThread' type="text" name="theme" id="theme" title="theme" placeholder="theme:" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                    <label htmlFor="content">Content</label>
                    <input className='inputnewThread' type="text" name="content" id="content" title="content" placeholder="content:" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />

                </div>
                <div className="bottomCardnewThread">
                    {msgError}
                    <div className="buttonnewThread" onClick={() => newThreadMe()}>
                        Registrar
                    </div>
                </div>
            </div>
        </div>
    )

}

export default connect((state) => ({
    post: state.post,
    credentials: state.credentials
}))(NewThread);

