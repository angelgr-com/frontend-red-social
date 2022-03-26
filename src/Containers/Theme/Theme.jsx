
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Theme.css';
// import { DETALLES_PELICULA } from '../../redux/types';


const Theme = (props) => { 

    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
            navigate("/detalles"); // CAMBIAR AQUI
    }

    // Hook
    const [posts, setPosts] = useState([])

    // Use effect montaje
    useEffect(()=>{
        traePosts();
    },[]);


 // Funcion escoger pelicula
 const escogePost = (post) => {
            
    console.log(post);
    //Guardamos el post escogido en REDUX al selecionar el post
    props.dispatch({type: POST, payload: post});
    console.log("post guardado en Redux")


    //Redirigimos a la vista de detalles Post con navigate
    navigate("/detallesPost"); 
}

    // Funcion que trae peliculas segun el genero  ....${props.genero}
    const traeTheme = async () => {
        
            try {

            let resultado = await axios.get(`http://localhost:3300/theme/${props.theme}`); 
            console.log(resultado)
            setPosts(resultado.data);
            console.log("posts guardados en Hook")
           

        } catch (error) {
            console.log(error);
        }
    };


    return(

        <div className="contenidoThemes">

        {posts.map(item => {

            return ( // AQUI HABRA QUE PONER LOS MISMOS DATOS QUE HAYA EN TABLA BACKEND

                <div className="itemPost" key={item.id} onClick={()=>escogePost(item)} >
                    <p className="post">{item.texto}</p>
                </div>
            )

        })
        }

        </div>
    )

}

export default connect((state) => ({
    theme: state.theme
}))(Theme);