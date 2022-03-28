
import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { checkError } from '../../utiles';
import './Admin.css';
import { connect } from "react-redux";
import { raiz } from '../../utiles';

// let res="";
const Admin = (props) => {

    let navigate = useNavigate();
    const [res, setRes] = useState("");

    useEffect(() => {
        console.log('Created')
    
    }, [])
    //Hooks

    const [datosUsuario, setDatosUsuario] = useState({
        titulo: "", genero: "", sinopsis: "", adult: "",
        popularity: "", imagen: "", video: "", fecha: "",
        idioma: ""
    });

    const [msgError, setMsgError] = useState("");

    //useEffect

    useEffect(() => {
        //se ejecuta la primera vez que se ejecuta tan solamente
    }, []);

    useEffect(() => {
        //se ejecuta cada vez que se actualiza CUALQUIER HOOK 
        
    })

    // useEffect(()=>{
    //     //useEffect observable que sólo se ejecutará cuando
    //     //datosUsuario mute
    // },
    // [datosUsuario])


    //Handler (manejador)
    const rellenarDatos = (e) => {
        setDatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value
        })
    };


    //Funciones locales del componente

    const registramePel = async () => {

        //Array de distintos campos


        console.log("todo ha ido bien")

        //2construimos el body

        let body = {
       
            titulo: datosUsuario.titulo,
            genero: datosUsuario.genero,
            sinopsis: datosUsuario.sinopsis,
            adult: parseInt(datosUsuario.adult),
            popularity: parseInt(datosUsuario.popularity),
            imagen: datosUsuario.imagen,
            video : datosUsuario.video,
            fecha : Date.parse(datosUsuario.fecha),
            idioma : datosUsuario.idioma
        }

        console.log("le llaman BODY", body);
        //3 envio de axios

        try {

            let resultado = await axios.post(raiz + "peliculas/", body);
            console.log(resultado);
            setTimeout(() => {
                // console.log("res2")
                // console.log(res.data)
                setRes(resultado.data); 
            }, 2);
            console.log(res);

            
            

        } catch (error) {
            console.log(error);
        }

        
        

        

    }
    return (
        <div className='designAdmin'>
            <div className="designAdminInputs">
                <div className="inputAdmin">VER USUARIOS</div>
                <div className="inputAdmin">ADMIN USUARIOS</div>
                <div className="inputAdmin">VER POSTS</div>
            </div>
        </div>
    )

}

export default connect()(Admin);