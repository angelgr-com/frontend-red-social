import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './NewComment.css';
import axios from 'axios';
import { raiz } from '../../utiles';


const NewComment = (props) => {

    console.log("entro en NewComment");


    // Hook
    const [comment, setComment] = useState({
        content: ""
    });



    const rellenarDatos = (e) => {
        setComment({...comment, 
            [e.target.name]: e.target.value})
    };

    // Funcion new Post
    let navigate = useNavigate();
    const newComment = async () => {

        console.log("entra en la funcion que crea un nuevo comentario")

        let body = {
            posts: [{
                author:props.credentials.name,
                content:comment.content
            }]
        }



        try {

            let resultado = await axios.put(raiz + `Comments/comments/new/${props.title_url}`, body); // VERIFICAR ESTA LINEA
            console.log(resultado);
            setComment(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK
            console.log("commentario guardado en hook")

            setTimeout(()=>{
                navigate("/posts");
            },1000);


        } catch (error) {
            console.log(error);
        }
    }


    return ( // AÑADIR  HANDLER
        <div className="designNewComment">
            <p>CREA AQUI TU COMENTARIO</p>
            <br />
            <br />
            <p>TRAER AUTHOR POR PROPS</p>
            <br />
            <label htmlFor="title">Title</label>
            <textarea name="title" id="title" placeholder="write your comments:" autoComplete="off" rows="10" cols="50" onChange={(e)=>{rellenarDatos(e)}}></textarea>
            <div className="buttonnewComment" onClick={()=>newComment()}>
                        Registrar
             </div>






        </div>
    )

}





export default connect((state) => ({
    post: state.post,
    credentials: state.credentials
}))(NewComment);


