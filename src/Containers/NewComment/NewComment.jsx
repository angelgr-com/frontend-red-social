import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './NewComment.css';
import axios from 'axios';
import { raiz } from '../../utiles';
import { checkError } from '../../utiles';

const NewComment = (props) => {

    console.log("entro en NewComment");
    const [msgError, setMsgError] = useState("");


    // Hook
    const [comment, setComment] = useState({
        content: ""
    });



    const rellenarDatos = (e) => {
        console.log(e.target.value)
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    };

    const goPost = async () => {

        console.log("entra en goHome")
        navigate("/posts");

    }

    // Funcion new Post
    let navigate = useNavigate();
    const dataComment = async () => {

        console.log("entra en la funcion que crea un nuevo comentario")
        setMsgError("");
        let error = "";

        let arrayCampos = Object.entries(comment);

        // //1 comprobación de errores antes de enviar al backend



        for (let elemento of arrayCampos) {
            error = checkError(elemento[0], elemento[1]);

            if (error !== "ok") {
                setMsgError(error);
                return;
            };
        };

        console.log("todo ha ido bien", comment)
        let body = {
            posts: [{
                author: props.credentials.nickname,
                content: comment.content
            }]
        }

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {
            console.log("elementos")
            console.log(props);
            console.log(body);
            console.log(props.post);
            let resultado = await axios.put(raiz + `/threads/comments/new/${props.post}`, body,config); // VERIFICAR ESTA LINEA
            console.log("commentario guardado en hook")
            console.log(resultado);
            setComment(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK
            console.log("commentario guardado en hook")

            setTimeout(() => {
                navigate("/posts");
            }, 1000);


        } catch (error) {
            console.log(error);
        }
    }


    return ( // AÑADIR  HANDLER
        <div className="designNewComment">
            <div className="topDesignPost">

                <div className="itemButtonNewPost" onClick={() => goPost()} >Home</div>
            </div>
             <label htmlFor="content">Add here a new comment: </label>
            <textarea name="content" id="content" placeholder="write your comments" autoComplete="off" rows="10" cols="50" onChange={(e) => { rellenarDatos(e) }}></textarea>
            <div className="buttonnewComment" onClick={() => dataComment()}>
                Registrar
            </div>
        </div>
    )

}





export default connect((state) => ({
    post: state.post,
    credentials: state.credentials
}))(NewComment);


