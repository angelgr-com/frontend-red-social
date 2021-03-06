
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Theme.css';
import { POST } from '../../redux/types';
import Thread from '../../Components/Thread/Thread';
import {raiz} from '../../utiles';

const Theme = (props) => { 


    // Hook
    const [theme, setTheme] = useState([])

    // Use effect montaje
    useEffect(()=>{
        bringTheme();
    },[]);

    // Funcion escoger Post
    // console.log("eeeeeeeeeeee")
    // console.log(props)
    const goHome = async () => {

        console.log("entra en goHome")
        navigate("/");

    }

    // Funcion que trae posts segun el tema 
    const bringTheme = async () => {

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };
        
        try {
            // console.log("lo que le mando de post")
            let resultado = await axios.get(raiz+`/threads/theme/${props.post}`,config); 
            // console.log("themes llegados de backend")
            setTheme(resultado.data);
            // console.log(resultado.data)
           

        } catch (error) {
            // console.log(error);
        }

    };
 
    let navigate = useNavigate();
    const newThread = () => {

 
        //Guardamos el post escogido en REDUX al selecionar el post
        //Redirigimos a la vista de detalles Post con navigate
        navigate("/newThread");
    };


    let themeName = props.post;
    themeName = translateTheme(themeName);

    return(
        
        <div className="designTheme">
            <div className="topSectionTheme">
            <div className="itemButton" onClick={()=>newThread()} >New thread</div> 
            <div className="itemTheme">Threads about {themeName} cuisine</div>
            <div className="itemButton" onClick={()=>goHome()} >Home</div> 
            </div>
            <div className="contenidoPosts">

                {theme.map(item => {
                    // console.log("item  uuuuuu")
                    // console.log(item)
                    return ( // AQUI HABRA QUE PONER LOS MISMOS DATOS QUE HAYA EN TABLA BACKEND

                        <Thread key={item._id} theme={item}/>
                    )

                })
                }

            </div>
        </div>   
            
    ) 

};

const translateTheme = (theme) => {
    switch (theme) {
        case 'espa??ola':
            return 'Spanish';
        case 'francesa':
            return 'French'; 
        case 'italiana':
            return 'Italian';
        case 'mexicana':
            return 'Mexican';
        case 'china':
            return 'Chinese';
        case 'americana':
            return 'American';
        case 'inglesa':
            return 'English';
        default:
            return 'theme';
    }
}

export default connect((state) => ({
    post: state.post,
    credentials: state.credentials
}))(Theme);