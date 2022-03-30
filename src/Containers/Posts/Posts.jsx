import { connect } from "react-redux";
import {useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 
import { POST } from '../../redux/types';
import './Posts.css';
import axios from 'axios';
import { raiz } from "../../utiles";


const Posts = (props) => {
     
console.log("entro en home");

// Navegar
let navigate = useNavigate();

const navegar = () => { 
    navigate("/");
}

// Hook
const [post, setPost] = useState([]);



//Guardamos en REDUX el post
props.dispatch({type: POST, payload: post}); 



// UseEffect de montaje
    // useEffect(() => {
    //     // console.log('')
    // }, [])


    // Funcion escoger pelicula
    const escogePost = (post) => {
            
        console.log(post);
        //Guardamos el post escogido en REDUX al clicar en
        props.dispatch({type: POST, payload: post});


        //Redirigimos a la vista de detalles Pelicula con navigate
        // navigate("/detallesPelicula"); 
    }

    // Funcion traer peliculas

    const traePosts = async () => {

        try {

            let resultado = await axios.get("http://localhost:3300/peliculas"); // raiz  + endpoints
            console.log(resultado);
            setPost(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK


        } catch (error) {
            console.log(error);
        }
    }

    if (post[0] != undefined) {// COMPROBAR

        // aqui mapeo porque ya las tengo

        return (

            <div className="designPost">

                {post.map(item => {

                    return (

                        <div className="itemPost" key={item.id} onClick={()=>escogePost(item)} >
                            
                        </div>
                    )
                })
                }


            </div>
        )

    } else {

        return (

            <div className="diseñopost2">

                <div className="contenedorPost2">
                     
                     NO HAY NINGUN POST SOBRE ESTE TEMA

                </div>

            </div>
        );
    }


}





export default connect((state) => ({
    post: state.post
}))(Posts);
