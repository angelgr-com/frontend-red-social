import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './NewComment.css';
import axios from 'axios';



const NewComment = (props) => {

    console.log("entro en NewComment");

    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
        navigate("/"); 
    }

    // Hook
    const [comment, setComment] = useState([]);


    // UseEffect de montaje
    // useEffect(() => {
    
    // }, [])


    // Funcion new Post

    const newComment = async () => {

        console.log("entra en la funcion que crea un nuevo comentario")

        let body = {
            author : "rodrigo",
            content : "Lorem ipsum", 
           
           }


        try {

            let resultado = await axios.put(); // tiene que hacer un .post
            console.log(resultado);
            setComment(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK
            console.log("posts guardados en hook")


        } catch (error) {
            console.log(error);
        }
    }

   
        return (
            <div className="designNewComment">
                






            </div>
        )
 
}





export default connect((state) => ({
    post: state.post
}))(NewComment);


