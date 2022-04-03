import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {checkError} from '../../utiles';
import './Register.css';
import { connect } from "react-redux";
import {raiz} from '../../utiles';

const Register = (props) => {
    // console.log("entro en Register")

    // Navegar
    let navigate = useNavigate();

    //Hooks
    const [datosUser, setDatosUser] = useState({
        name: "", nickname: "", email: "", password: "", password2: "", avatar: "", isAdmin: ""
    });

    const [msgError, setMsgError] = useState("");

    //useEffect de montaje
    useEffect(()=>{
        //se ejecuta la primera vez que se ejecuta tan solamente
    },[]);

    //useEffect de actualizacion
    useEffect(()=>{
        //se ejecuta cada vez que se actualiza CUALQUIER HOOK  
    })

    
    //Handler (manejador)
    const rellenarDatos = (e) => {
            setDatosUser({...datosUser, 
                [e.target.name]: e.target.value})
    };


    //Funciones locales del componente

    const registerMe = async () => {  
 
        //Array de distintos campos
        // console.log("todo ha ido bien")
        // console.log(datosUser)
        setMsgError("");
        let error = "";

        let arrayCampos = Object.entries(datosUser);
        
        // //1 comprobación de errores antes de enviar al backend



        for(let elemento of arrayCampos){
            error = checkError(elemento[0],elemento[1]);

            if(error !== "ok"){
                setMsgError(error);
                return;
            };
        };

        

        // construimos el body
        // if(datosUser.name){
        //     datosUser.name=""
        // }

        let body = {
            name: datosUser.name,
            nickname: datosUser.nickname,
            email: datosUser.email,
            password: datosUser.password,
            avatar: datosUser.avatar,
            isAdmin: false
        }
        // console.log("todo ha ido bien44444444")
        // console.log('body a enviar al backend:', body)

        //3 envio de axios

        try {
            
            let resultado = await axios.post(raiz + "/users/register", body);
            // console.log(resultado);
            
                setTimeout(()=>{
                    navigate("/login");
                },1000);
            
            
            
        } catch (error) {
            console.log(error);
        }

    }

    return(
        <div className='designRegister'>
             
            <div className="cardRegister">
                <div className="upCardRegister">FORMULARIO DE REGISTRO</div>
                <div className="middleCardRegister">
                    {/* {<pre>{JSON.stringify(datosUsuario, null,2)}</pre>} */}
                    <input className='inputRegister' type="text" name="name" id="name" title="name" placeholder="name:"  onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='inputRegister' type="text" name="nickname" id="nickname" title="nickname" placeholder="nickname:"  onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='inputRegister' type="text" name="email" id="email" title="email" placeholder="email:" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                  
                    <input className='inputRegister' type="password" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className='inputRegister'  type="text" name="avatar" id="avatar" title="avatar" placeholder="avatar" onChange={(e)=>{rellenarDatos(e)}}/>
                   
                </div>
                <div className="bottomCardRegister">
                    {msgError}
                    <div className="buttonRegister" onClick={()=>registerMe()}>
                        Registrar
                    </div>
                </div>
            </div>
        </div>
    )

}

export default connect()(Register);