import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './DeleteComment.css';
import { raiz } from '../../utiles';
import React, { useState } from 'react';
import axios from 'axios';
import { POST,ID } from '../../redux/types';
const DeleteComment = (props) => {

    console.log("entro en DeleteComment");

    // Navegar
    let navigate = useNavigate();

    // Hook
    // const [deletedThread, setuptdatedThread] = useState([]);


    // Guardamos en REDUX el criterio
    // props.dispatch({type: , payload: }); 
    // navigate();
    // }

    // Funcion que sube el thread cambiado a BBDD
    const eraseComment = async () => {
        console.log("entro en funcion que borra el comentario")
        try {
            console.log("mando comentario a borrar a axios")
            console.log(props);
            console.log("hago llamada a axios")
            let resultado = await axios.delete(raiz + `threads/comments/delete/${props.post}`); // NO FUNCIONA

            console.log("cambios llegados a backend")
            console.log(resultado.data)

            // AQUI FALTA NAVIGATE A DONDE?
  
        } catch (error) {
            // console.log(error);
        }

    };
  

// FALTA EL IF DE COMPROBACIO


    return (

        <div className="designDeleteComment">
            <p>YOUR COMMENT HAS BEEN DELETED</p>
        </div>
        
    )

}





export default connect((state) => ({
    post: state.post
}))(DeleteComment);
