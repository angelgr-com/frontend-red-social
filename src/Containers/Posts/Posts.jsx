import { connect } from "react-redux";
import {useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 
import { POST } from '../../redux/types';
import './Posts.css';
import axios from 'axios';
import { raiz } from "../../utiles";


const Posts = (props) => {
     
console.log("entro en posts");

// Navegar
let navigate = useNavigate();

const navegar = () => { 
    navigate("/"); // CONPROBAR LINEA
}

// Hook
const [posts, setPosts] = useState([]);


//Guardamos en REDUX el post
props.dispatch({type: POST, payload: posts}); 


// UseEffect de montaje
    useEffect(() => {
        traePosts();
    }, [])


// Funcion escoger post
const escogePost = (posts) => {
            
    console.log(posts);
    //Guardamos el post escogido en REDUX al clicar en
    props.dispatch({type: POST, payload: posts});


    //Redirigimos a la vista de detalles Posts con navigate
    // navigate("/detallesPelicula"); 
    }

// Funcion traer POSTS

const traePosts = async () => {

console.log("entra en la funcion Trae Posts")

        try {

            let resultado = await axios.get("https://stormy-savannah-32569.herokuapp.com/threads/");// CAMBIAR A ENPOINT QUE TRAE POST
            console.log(resultado);
            setPosts(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK
            console.log("posts guardados en hook")


        } catch (error) {
            console.log(error);
        }
    }

    if (posts[0] != undefined) {// COMPROBAR
        console.log("array de posts contiene post)")
        // aqui mapeo porque ya las tengo

        return (

            <div className="designPost">
                
                {posts.map(item => {
console.log("devuelve el mapeo de posts")
                    return (

                        <div className="itemPost" key={item.id} onClick={()=>escogePost(item)} >
                          <div className="containerPostUp">
                              <div className="theme"> THEME</div>
                          </div>
                          <div className="containerPostDown">
                              <div className="containerPostDownGlobal">
                                  <div className="containerPostDownGlobalLeft">
                                      <div className="nickname">NICK NAME</div>
                                  </div>
                                  <div className="containerPostDownGlobalRight">
                                      <div className="containerPostDownGlobalRightUp">TITLE</div>
                                      <div className="containerPostDownGlobalRightMiddle">CONTENT</div>
                                      <div className="containerPostDownGlobalRightRight"></div>
                                  </div>
                              </div>
                          </div>
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


{/* <p className="titulo">{item._id}</p>
                            <p className="titulo">{item.title}</p>
                            <p className="titulo">{item.title_url}</p>
                            <p className="titulo">{item.title}</p> */}