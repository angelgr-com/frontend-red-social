
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { raiz } from '../../utiles';
import { MODIFY_CREDENTIALS } from '../../redux/types';
import axios from 'axios';
import "./Profile.css";
import Footer from '../../Components/Footer/Footer';

const Profile = (props) => {
    console.log("entro en profile")

    // Navegar
    let navigate = useNavigate();
    const [res, setRes] = useState("");
    const [followers, setFollowers] = useState("");


    console.log("aaaaaaaaaaaa")
    console.log(props.credentials.token)
    //Hooks
    const [datosUser, setDatosUser] = useState({
        name: props.credentials.name,
        nickname: props.credentials.nickname,
        email: props.credentials.email,
        password: props.credentials.password,
        avatar: props.credentials.avatar
    });

    //Handler (manejador)
    const rellenarDatos = (e) => {
        //para cambiar el hook
        setDatosUser({
            ...datosUser,
            [e.target.name]: e.target.value
        })
        //para cambiar el redux
        props.dispatch({ type: MODIFY_CREDENTIALS, payload: { field: e.target.name, field_value: e.target.value } })
    };

    // Use Effect de montaje
    useEffect(() => {
        bringFollowers()
    }, [])


    // Use Effect de actualizacion
    // useEffect(() => {
    //     console.log("como token esta vacio redirigo a Login");
    //     if (props.credentials.token === '') {
    //         navigate("/Login");
    //     }
    // })

    // Funcion Update User

    const goHome = async () => {

        console.log("entra en goHome")
        navigate("/");

    }

    const updateUser = async () => {

        let body = {
            name: datosUser.name,
            nickname: datosUser.nickname,
            email: datosUser.email,
            password: datosUser.password,
            avatar: datosUser.avatar

        }

        // let config = {
        //     headers: { Authorization: `Bearer ${props.credentials.token}` }
        // };

        try {
            //Hacemos el update en la base de datos
            let resultado = await axios.put(raiz + `users/register`, body);
            console.log("usuario actualizado enviado al backend")
            setDatosUser(resultado.data);
            console.log("usuario actualizado guardado en Hook")



        } catch (error) {
            console.log(error)
        }

    }

    const bringFollowers = async () => {



        // let config = {
        //     headers: { Authorization: `Bearer ${props.credentials.token}` }
        // };

        try {
            //Hacemos el update en la base de datos
            
            let a =props.credentials.name
            console.log(a.toLowerCase())
            let e=a.toLowerCase();
            console.log(raiz + `/users/following/`+e)

            let resultado = await axios.get(raiz + `/users/following/`+e);
            console.log("awwwwwwwwwwwwwwwwa")
            console.log(resultado.data)
            setFollowers(resultado.data);
            console.log("usuario actualizado guardado en Hook")



        } catch (error) {
            console.log(error)
        }

    }

    if (props.credentials?.token !== undefined) {

        return (
            <div className="designProfile">
                <div className="topDesignPost">

                    <div className="itemButtonNewPost" onClick={() => goHome()} >Home</div>
                </div>
                <div className="designProfileBottom">
                    <div className="followers">{followers}</div>

                    <div className="designProfileInputs">

                        <div className="inputProfile"><b>Name:<input type="text" name="Name" id="Name" title="Name" placeholder={props.credentials.name} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                        </b></div>

                        <div className="inputProfile"><b>Nickname:</b><input type="text" name="email" id="email" title="email" placeholder={props.credentials.email} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} /></div>


                        <div className="inputProfile"><b>Email:</b><input type="email" name="email" id="email" title="email" placeholder={props.credentials.email} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} /></div>



                        <div className="inputProfile"><b>Password:</b><input type="text" name="password" id="password" title="password" placeholder="*****" autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                        </div>

                        <div className="inputProfile"><b>Avatar:</b><input type="text" name="Avatar" id="Avatar" title="Avatar" onChange={(e) => { rellenarDatos(e) }} />
                        </div>


                        <div className="profileFieldButton">
                            <div className="buttonUpdate" onClick={() => updateUser()}>Actualiza</div>
                        </div>



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