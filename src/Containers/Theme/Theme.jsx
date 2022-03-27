
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Theme.css';
import { POST } from '../../redux/types';


const Theme = (props) => { 
    console.log("entro en theme", props.theme)

    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
        navigate("/detalles"); // AQUI TIENE QUE NAVEGAR A LA VISTA DE DETALLES POST
    }

    // Hook
    const [posts, setPosts] = useState([])

    // Use effect montaje
    useEffect(()=>{
        traePosts();
    },[]);

    // Funcion escoger Post
   const escogePost = (post) => {
            
    console.log(post);
    //Guardamos el post escogido en REDUX al selecionar el post
    props.dispatch({type: POST, payload: post});
    console.log("post guardado en Redux")


    //Redirigimos a la vista de detalles Post con navigate
    navigate("/detallesPost"); 
   };


    // Funcion que trae posts segun el tema 
    const traePosts = async () => {
        
        try {

            let resultado = await axios.get(`http://localhost:3300/theme/${props.theme}`); 
            console.log("posts llegados de backend")
            setPosts(resultado.data);
            console.log("posts guardados en Hook")
           

        } catch (error) {
            console.log(error);
        }

    };

    if (posts[0]?.id != undefined)  {


    return(
        
           <div className="designTheme">
                <div className="contenidoPosts">

                    {posts.map(item => {

                        return ( // AQUI HABRA QUE PONER LOS MISMOS DATOS QUE HAYA EN TABLA BACKEND

                            <div className="itemPost" key={item.id} onClick={()=>escogePost(item)} >
                                <p className="post">{item.texto}</p>
                            </div>
                        )

                    })
                    }
                 </div>
            </div>   
            
    ) 
  

} else {

    return (

        <div className="contenidoPosts2">
            hola soy ${props.theme}
        </div>
    );
}


};

export default connect((state) => ({
    theme: state.theme
}))(Theme);