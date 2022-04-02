import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './EditComment.css';
import { raiz } from '../../utiles';
import React, { useState } from 'react';
import axios from 'axios';

const EditComment = (props) => {

    console.log("entro en editComment");

    // Navegar
    let navigate = useNavigate();

    // Hook
    const [uptdatedComment, setuptdatedComment] = useState([]);


    // Guardamos en REDUX el criterio
    // props.dispatch({type: , payload: }); 
    // navigate();
    // }




    // Funcion que sube el comentario cambiado a BBDD

    const updateComment = async () => {
        console.log("entro en funcion que actaliza el comentario")
        try {
            console.log("mando commentario actualizado a axios")
            console.log(props);
            let resultado = await axios.put(raiz+`/threads/comments/edit/${props.post}`); // ENDPONT NO FUNCIONA

            console.log("cambios llegados a backend")
            setuptdatedComment(resultado.data);
            console.log(resultado.data)


        } catch (error) {
            // console.log(error);
        }

    };

    return (

        <div className="designEditComment">
            <div className="formEditComment">
                <p>UPDATE HERE YOUR COMMENT</p>
                <textarea name="content" id="content" placeholder="write your comments:" autoComplete="off" rows="10" cols="50" >FALTA TRAER EL CONTENIDO PARA ACTUALIZARLO</textarea>
                <div className="buttonnewComment" onClick={() => updateComment()}>UPDATE</div>

                {/* {{base_url}}threads/comments/edit/como-hacer-una-buena-tortilla-de-patatas */}
            </div>
        </div>
    )

}





export default connect((state) => ({
    post: state.post
}))(EditComment);
