import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './EditThread.css';
import { raiz } from '../../utiles';
import React, { useState } from 'react';
import axios from 'axios';

const EditThread = (props) => {

    console.log("entro en editThread");

    // Navegar
    let navigate = useNavigate();

    // Hook
    const [uptdatedRThread, setuptdatedThread] = useState([]);


    // Guardamos en REDUX el criterio
    // props.dispatch({type: , payload: }); 
    // navigate();
    // }

    // Funcion que sube el thread cambiado a BBDD
    const updateThread = async () => {
        console.log("entro en funcion que actaliza el thread")
        try {
            console.log("mando thread actualizado a axios")
            console.log(props);
            let resultado = await axios.put(raiz + `/threads/comments/edit/${props.post}`); // VERIFICAR FINAL DE LINEA PREGUNTAR A RAFA

            console.log("cambios llegados a backend")
            setuptdatedThread(resultado.data);
            console.log(resultado.data)

            // AQUI FALTA NAVIGATE A DONDE?

        } catch (error) {
            // console.log(error);
        }

    };

    return (

        <div className="designEditThread">
            <div className="formEditThread">
                <p>UPDATE HERE YOUR THREAD</p>
                <textarea name="content" id="content" placeholder="write your comments:" autoComplete="off" rows="10" cols="50" >FALTA TRAER EL THREAD PARA ACTUALIZARLO</textarea>
                <div className="buttonnewComment" onClick={() => updateThread()}>UPDATE</div>

                {/* {{base_url}}threads/comments/edit/como-hacer-una-buena-tortilla-de-patatas */}
            </div>
        </div>
    )

}





export default connect((state) => ({
    post: state.post
}))(EditThread);
