
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { raiz } from '../../utiles';
import { MODIFY_CREDENTIALS } from '../../redux/types';
import axios from 'axios';
import "./Profile.css";
import Footer from '../../Components/Footer/Footer';

const Profile = (props) => {
    //console.log("entro en profile")

    // Navegar
    let navigate = useNavigate();
    const [res, setRes] = useState("");
    const [followers, setFollowers] = useState("");
    // const [datosUser, setDatosUser] = useState({
    //     name: "", nickname: "", email: "",  avatar: ""    
    // });


    //console.log("aaaaaaaaaaaa")
    //console.log(props.credentials.token)
    //Hooks
    const [datosUser, setDatosUser] = useState({
        name: props.credentials.name,
        nickname: props.credentials.nickname,
        email: props.credentials.email,
        avatar: props.credentials.avatar
    });
    //console.log("props.credentials")
    //console.log(props.credentials)
    //console.log(datosUser)

    //Handler (manejador)
    const rellenarDatos = (e) => {
        //para cambiar el hook
        //console.log("6666666666666666")
        //console.log(e.target.value)
        //console.log("6666666666666666")
        setDatosUser({
            ...datosUser,
            [e.target.name]: e.target.value
        })
        //console.log("6666666666666666")
        //console.log(datosUser)
        //console.log("6666666666666666")
        //para cambiar el redux
        props.dispatch({ type: MODIFY_CREDENTIALS, payload: { field: e.target.name, field_value: e.target.value } })
        
    };

    // Use Effect de montaje
    useEffect(() => {
        bringFollowers()
    }, [])


    // Use Effect de actualizacion
    // useEffect(() => {
    //     //console.log("como token esta vacio redirigo a Login");
    //     if (props.credentials.token === '') {
    //         navigate("/Login");
    //     }
    // })

    // Funcion Update User

    const goHome = async () => {

        //console.log("entra en goHome")
        navigate("/");

    }

    const updateUser = async () => {
        //console.log("datosUser")
        //console.log(datosUser)
        if(datosUser.email===undefined){
            datosUser.email=""
        }
        if(datosUser.name===undefined){
            datosUser.name=""
        }
        if(datosUser.password===undefined){
            datosUser.password=""
        }
        if(datosUser.avatar===undefined){
            datosUser.avatar=""
        }
        let body = {
            name: datosUser.name,
            // nickname: datosUser.nickname,
            email: datosUser.email,
            password: datosUser.password,
            avatar: datosUser.avatar

        }

        // let config = {
        //     headers: { Authorization: `Bearer ${props.credentials.token}` }
        // };
        console.log("datosUser5555555")
        console.log(body)
        console.log(props.credentials.nickname)
        try {
            //Hacemos el update en la base de datos
            //console.log("body")
            //console.log(body)
            let resultado = await axios.put(raiz + `/users/${props.credentials.nickname}`, body);
            //console.log("usuario actualizado enviado al backend")
            //console.log(resultado)
            setDatosUser(resultado.data);
            //console.log("usuario actualizado guardado en Hook")



        } catch (error) {
            //console.log(error)
        }

    }

    const bringFollowers = async () => {



        // let config = {
        //     headers: { Authorization: `Bearer ${props.credentials.token}` }
        // };

        try {
            //Hacemos el update en la base de datos
            
            // let a =props.credentials.name
            // //console.log(a.toLowerCase())
            // let e=a.toLowerCase();
            // //console.log(raiz + `/users/following/`+e)

            let resultado = await axios.get(raiz + `/users/following/`+props.credentials.nickname);
            //console.log("awwwwwwwwwwwwwwwwa")
            console.log('followers?: ', ...resultado.data);
            setFollowers(resultado.data);
            //console.log("usuario actualizado guardado en Hook")

   

        } catch (error) {
            //console.log(error)
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

                        <div className="inputProfile">
                            <label>Name:</label>
                            <input type="text" name="name" id="name" title="name" placeholder={props.credentials.name} onChange={(e) => { rellenarDatos(e) }} />
                        </div>

                        {/* <div className="inputProfile"><b>Nickname:</b><input type="text" name="email" id="email" title="email" placeholder={props.credentials.nickname} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} /></div> */}


                        <div className="inputProfile">
                            <label>Email:</label>
                            <input type="email" name="email" id="email" title="email" placeholder={props.credentials.email}  onChange={(e) => { rellenarDatos(e) }} /></div>



                        <div className="inputProfile">
                            <label>Password:</label>
                            <input type="text" name="password" id="password" title="password" placeholder="*****"  onChange={(e) => { rellenarDatos(e) }} />
                        </div>

                        {/* <div className="inputProfile">
                            <label>Avatar:</label>
                            <input type="text" name="Avatar" id="Avatar" title="Avatar" onChange={(e) => { rellenarDatos(e) }} />
                        </div> */}


                        <div className="profileFieldButton">
                            <div className="buttonUpdate" onClick={() => updateUser()}>Update</div>
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