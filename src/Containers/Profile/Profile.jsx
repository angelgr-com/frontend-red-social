
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {raiz} from '../../utiles';
import { MODIFY_CREDENTIALS } from '../../redux/types';
import axios from 'axios';
import "./Profile.css";
import Footer from '../../Components/Footer/Footer';

const Profile = (props) => {
    console.log("entro en profile")

    // Navegar
    let navigate = useNavigate();
    const [res, setRes] = useState("");

   console.log("aaaaaaaaaaaa")
   console.log(props.credentials.token)
    //Hooks
    const [datosUser, setDatosUser] = useState({
        name: props.credentials.user.name,  nickname: props.credentials.user.nickname, email: props.credentials.user.email, 
        password: props.credentials.user.password,  avatar: props.credentials.user.avatar
    });

    //Handler (manejador)
    const rellenarDatos = (e) => {
        //para cambiar el hook
        setDatosUser({...datosUser, 
            [e.target.name]: e.target.value})
        //para cambiar el redux
        props.dispatch({ type: MODIFY_CREDENTIALS, payload: { field: e.target.name, field_value: e.target.value } })
    };

    // Use Effect de montaje
    useEffect(() => {
    }, [])


    // Use Effect de actualizacion
    // useEffect(() => {
    //     console.log("como token esta vacio redirigo a Login");
    //     if (props.credentials.token === '') {
    //         navigate("/Login");
    //     }
    // })

    // Funcion Update User
    const updateUser = async () => {
       
        let body = {
            name: datosUser.name,
            nickname: datosUser.nickname,
            email: datosUser.email,
            password: datosUser.password,
            avatar: datosUser.avatar,
            isAdmin: datosUser.isAdmin
            
        }

        let config = {
            headers: { Authorization: `Bearer ${props.credentials.token}` }
        };

        try {
            //Hacemos el update en la base de datos
            let resultado = await axios.put(raiz +`users/${props.credentials.user.id}`,body, config);       
            console.log("usuario actualizado enviado al backend")
            setDatosUser(resultado.data); 
            console.log("usuario actualizado guardado en Hook")
            

          
        } catch (error) {
            console.log(error)
        }

    }

    if(props.credentials?.token !== undefined) {
 
    return (
        <div className="designProfile">
            <div className="designProfileInputs">

                <div className="inputProfile"><b>Nombre:<input type="text" name="Name" id="Name" title="Name" placeholder={props.credentials.name} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                </b></div>
                
                <div className="inputProfile"><b>Apellido:</b><input type="text" name="nickname" id="nickname" title="nickname" placeholder={props.credentials.nickname} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                </div>

                <div className="inputProfile"><b>Edad:</b><input type="text" name="email" id="email" title="email" placeholder={props.credentials.email} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} /></div>

                <div className="inputProfile"><b>Email:</b><input type="email" name="email" id="email" title="email" placeholder={props.credentials.email} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} /></div>

                <div className="inputProfile"><b>Nickname:</b><input type="text" name="email" id="email" title="email" placeholder={props.credentials.email} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} /></div>               

                <div className="inputProfile"><b>Contraseña:</b><input type="text" name="password" id="password" title="password" placeholder="*****"autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                </div>

                <div className="inputProfile"><b>Repite Contraseña:</b><input type="text" name="password" id="password" title="password" placeholder="*****"autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                </div>

                <div className="inputProfile"><b>Avatar:</b><input type="text" name="Avatar" id="Avatar" title="Avatar"  onChange={(e) => { rellenarDatos(e) }} />
                </div>

                <div className="profileFieldButton">
                    <div className="buttonUpdate" onClick={()=>updateUser()}>Actualiza</div>
                </div>
                
            </div>
        </div>
        
    )
    } else {
        <div className="designProfile2">
            <p>NO TRAE LOS DATOS</p>
        </div>
    }

};

export default connect((state) => ({
    credentials: state.credentials
}))(Profile);