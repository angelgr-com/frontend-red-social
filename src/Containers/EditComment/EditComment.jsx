import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './EditComment.css';
import { raiz } from '../../utiles';
import React, { useState } from 'react';
import axios from 'axios';
import { ID, POST } from '../../redux/types';

const EditComment = (props) => {

    console.log("entro en editComment");
    // Hook
    const [comment, setComment] = useState({
        content: ""
    });
    // Navegar
    let navigate = useNavigate();

    // Hook
    const [uptdatedComment, setuptdatedComment] = useState([]);


    // Guardamos en REDUX el criterio
    // props.dispatch({type: , payload: }); 
    // navigate();
    // }
    const rellenarDatos = (e) => {
        console.log(e.target.value)
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    };

    const goPost = async () => {

        console.log("entra en goHome")
        props.dispatch({ type: POST, payload: props.post.state },);
        navigate("/posts");

    }

    // Funcion que sube el comentario cambiado a BBDD
    let body = {
            content: comment.content
       
    }
    const updateComment = async () => {
        console.log("entro en funcion que actaliza el comentario")
        try {
            console.log("mando commentario actualizado a axios")
            console.log(props);
            // console.log(props.post.id);
            let resultado = await axios.put(raiz + `/threads/comments/edit/${props.post.id}/${props.post.state}`,body); // ENDPONT NO FUNCIONA

            console.log("cambios llegados a backend")
            setuptdatedComment(resultado.data);
            console.log(resultado.data)

props.dispatch({ type: POST, payload: props.post.state },);

            setTimeout(() => {
                navigate("/posts");
            }, 1000);


        } catch (error) {
            // console.log(error);
        }

    };

    return (

        <div className="designEditComment">
            <div className="topDesignPost">

<div className="itemButtonNewPost" onClick={() => goPost()} >Post</div>
</div>
            <div className="formEditComment">
                <p>UPDATE HERE YOUR COMMENT</p>
                <textarea name="content" id="content" placeholder="write your comments:" autoComplete="off" rows="10" cols="50" onChange={(e) => { rellenarDatos(e) }}></textarea>
                <div className="buttonnewComment" onClick={() => updateComment()}>UPDATE</div>

                {/* {{base_url}}threads/comments/edit/como-hacer-una-buena-tortilla-de-patatas */}
            </div>
        </div>
    )

}





export default connect((state) => ({
    post: state.post
}))(EditComment);
