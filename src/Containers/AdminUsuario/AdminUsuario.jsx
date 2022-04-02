
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import './AdminUsuario.css';
import { connect } from "react-redux";



const AdminUsuario = (props) => {


    //Navegar
    

    //UseEffect de montaje
    useEffect(() => {
        console.log('Created')
    }, [])


    //UseEffect de actualizacion


    //Hooks
    
   
    //Funciones locales del componente

    const cambiarAdmin = async () => {

       
        let body = {
       
            // titulo: datosUsuario.titulo,
            // genero: datosUsuario.genero,
            // sinopsis: datosUsuario.sinopsis,
            // adult: parseInt(datosUsuario.adult),
            // popularity: parseInt(datosUsuario.popularity),
            // imagen: datosUsuario.imagen,
            // video : datosUsuario.video,
            // fecha : Date.parse(datosUsuario.fecha),
            // idioma : datosUsuario.idioma
        }

        // AXIOS

        try {

            // let resultado = await axios.post(raiz + "peliculas/", body);
            // console.log(resultado);
                   

        } catch (error) {
            console.log(error);
        }

    } // FALTARA UN IF
    return (
        <div className='designAdminUsuario'>
            <div className="designAdminUsuarioInputs">
                
            </div>
        </div>
    )

}

export default connect()(AdminUsuario);