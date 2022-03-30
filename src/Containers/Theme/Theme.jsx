
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import './Theme.css';
import { POST } from '../../redux/types';
import Thread from '../../Components/Thread/Thread';

const Theme = (props) => { 


    // Hook
    const [theme, setTheme] = useState([])

    // Use effect montaje
    useEffect(()=>{
        traePosts();
    },[]);

    // Funcion escoger Post



    // Funcion que trae posts segun el tema 
    const traePosts = async () => {
        
        try {

            let resultado = await axios.get(raiz+`/${props.theme}`); 
            console.log("posts llegados de backend")
            setPosts(resultado.data);
            console.log("posts guardados en Hook")
           

        } catch (error) {
            console.log(error);
        }

    };

    return(
        
        <div className="designTheme">
            <div className="contenidoPosts">

                {posts.map(item => {

                    return ( // AQUI HABRA QUE PONER LOS MISMOS DATOS QUE HAYA EN TABLA BACKEND

                        <Thread/>
                    )

                })
                }
            </div>
        </div>   
            
    ) 

};

export default connect((state) => ({
    theme: state.theme
}))(Theme);