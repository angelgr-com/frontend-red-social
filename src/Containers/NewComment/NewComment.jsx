import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './NewComment.css';
import axios from 'axios';
import {raiz} from '../../utiles';


const NewComment = (props) => {

    console.log("entro en NewComment");

    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
        navigate("/"); 
    }

    // Hook
    const [comment, setComment] = useState({
        content: ""
    });


    // UseEffect de montaje
    useEffect(() => {
        newComment();
    }, [])

    //Handler 
//     const rellenarDatos = (e) => { // CAMBIAR
//         setComment({...comment
//             [e.target.comment]: e.target.value})
// };



    // Funcion new Post

    const newComment = async () => {

        console.log("entra en la funcion que crea un nuevo comentario")

        let body = {
            "posts": [{
            author : "rodrigo",
            content : "Lorem ipsum"
        }]
                    }
                


        try {

            let resultado = await axios.put(raiz + `threads/comments/new/${props.title_url}`,body); // VERIFICAR ESTA LINEA
            console.log(resultado);
            setComment(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK
            console.log("commentario guardado en hook")


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
                <textarea name="textarea" rows="10" cols="50">Write something here</textarea>
                {/* <input className='inputComment' type="textArea" name="Comment" id="Comment" title="Comment" placeholder="Escribe aqui tu comentario:" autoComplete="off" /> */}
                <input type="submit" />






            </div>
        )
 
}





export default connect((state) => ({
    post: state.post
}))(NewComment);


