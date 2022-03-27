
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {raiz} from '../../utiles';
import { MODIFY_CREDENTIALS } from '../../redux/types';
import axios from 'axios';
 
import "./Profile.css";
import Footer from '../../Components/Footer/Footer';

const Profile = (props) => {

    let navigate = useNavigate();
    const [res, setRes] = useState("");

    useEffect(() => {
        console.log('Created')
     
    }, [])

    //Hooks
    const [datosUser, setDatosUser] = useState({
        name: props.credentials.user.name,  nickname: props.credentials.user.nickname, email: props.credentials.user.email, 
        password: props.credentials.user.password,  avatar: props.credentials.user.avatar
    });

    //Handler (manejador)
    const rellenarDatos = (e) => {
        //para cambiar el hook
        setDatosUs({...datosUser, 
            [e.target.name]: e.target.value})
        //para cambiar el redux
        props.dispatch({ type: MODIFY_CREDENTIALS, payload: { field: e.target.name, field_value: e.target.value } })
    };

    useEffect(() => {
        if (props.credentials.token === '') {
            navigate("/");
        }
    })

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
            setTimeout(() => {
                // console.log("res2")
                // console.log(res.data)
                setRes(resultado.data); 
            }, 2);

          
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="designProfile">
            <div className="designProfileHalf profileLeft">

                <div className="profileField"><b>Name:<input type="text" name="Name" id="Name" title="Name" placeholder={props.credentials.user.Name} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                </b></div>
                
                <div className="profileField"><b>Nickname:</b><input type="text" name="nickname" id="nickname" title="nickname" placeholder={props.credentials.usuario.nickname} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                </div>

                <div className="profileField"><b>Email:</b><input type="email" name="email" id="email" title="email" placeholder={props.credentials.usuario.email} autoComplete="off" onChange={(e) => { rellenarDatos(e) }} /></div>

                                
                <div className="profileField"><b>Password:</b><input type="text" name="password" id="password" title="password" placeholder="*****"autoComplete="off" onChange={(e) => { rellenarDatos(e) }} />
                </div>

                <div className="profileField"><b>Avatar:</b><input type="text" name="Avatar" id="Avatar" title="Avatar"  onChange={(e) => { rellenarDatos(e) }} />
                </div>

                <div className="profileFieldButton">
                    <div className="button type3 espacio" onClick={()=>updateUser()}>Actualiza</div>
                </div>
                <div className="profileFieldButtonMessage">
                <div className="bottomCardAdminRegPelSub">{res}</div>
                </div>
            </div>
        </div>
        
    )


}

export default connect((state) => ({
    credentials: state.credentials
}))(Profile);