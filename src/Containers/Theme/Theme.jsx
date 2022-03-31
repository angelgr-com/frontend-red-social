
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
        traeTheme();
    },[]);

    // Funcion escoger Post



    // Funcion que trae posts segun el tema 
    const traeTheme = async () => {
        
        try {

            let resultado = await axios.get(raiz+`/threads/theme/${props.post?.theme}`); 
            console.log("themes llegados de backend")
            setTheme(resultado.data);
            console.log(resultado.data)
           

        } catch (error) {
            console.log(error);
        }

    };

    return(
        
        <div className="designTheme">
            <div className="contenidoPosts">

                {theme.map(item => {
                    console.log("item")
                    console.log(item)
                    return ( // AQUI HABRA QUE PONER LOS MISMOS DATOS QUE HAYA EN TABLA BACKEND

                        <Thread theme={item}/>
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