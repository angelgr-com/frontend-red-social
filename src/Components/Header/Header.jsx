
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { MODIFY_CREDENTIALS } from '../../redux/types';
import { LOGOUT } from '../../redux/types';
import { raiz } from '../../utiles';
 
import './Header.css';

const Header = (props) => {

    // Navegar
    let navigate = useNavigate();

    const navegar = (lugar) => {

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

    // Hook
    const [titulo, setTitulo] = useState("");

    // UseEffect montaje
    useEffect(() => {
        // console.log("props.credentials");
        // console.log(props.credentials);
    })

    // Funcion local Logout
       const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({ type: LOGOUT});

        setTimeout(() => {
            navigate("/");
        }, 1500);
    }

    const manejador = (ev) => {
        setTitulo(ev.target.value);
    }

   
    // console.log(window.location.pathname);
    if (!props.credentials?.token) {
        return (
            <div className='designHeader'>

                <div className="headerSpace logoDesign">

                    <img className="logo" src={require('../../img/logo.png')} alt="logo" onClick={() => navegar("/")}></img>

                </div>
                <div className="headerSpace searchDesign">
                </div>
                <div className="headerSpace linksDesign">
                    {
                        (window.location.pathname === "/login") &&
                        <div className="link" onClick={() => navegar("/login")}><b>Login</b></div>
                    }
                    {
                        (window.location.pathname !== "/login") &&
                        <div className="link" onClick={() => navegar("/login")}>Login</div>
                    }
                    {
                        (window.location.pathname === "/register") &&
                        <div className="link" onClick={() => navegar("/register")}><b>Registro</b></div>
                    }
                    {
                        (window.location.pathname !== "/register") &&
                        <div className="link" onClick={() => navegar("/register")}>Registro</div>
                    }
                </div>
            </div>
        )
    } else {
        console.log("props.credentials");     

        console.log(props.credentials);     
        return (
            
            <div className='designHeaderGlobal'>
                {
                    
                    window.location.pathname !== "/display" &&

                    <div className='designHeader'>

                        <div className="headerSpace logoDesign">
                            <img className="logo" src={require('../../img/logo.png')} alt="logo" onClick={() => navegar("/")}></img>
                        </div>
                        <div className="headerSpace searchDesign">
                            
                            <div className="relleno"></div>
                        </div>
                        <div className="headerSpace linksDesign">
                            {
                                (props.credentials?.isAdmin === true) && (window.location.pathname === "/admin") &&
                                <div className="link" onClick={() => navegar("/admin")}><b>Admin</b></div>
                            }
                            {
                                (props.credentials?.isAdmin === true) && (window.location.pathname !== "/admin") &&
                                <div className="link" onClick={() => navegar("/admin")}>Admin</div>
                            }
                            {
                                (window.location.pathname === "/profile") &&
                                <div className="link" onClick={() => navegar("/profile")}>
                                    <b>{props.credentials?.name}</b>
                                </div>
                            }
                            {
                                (window.location.pathname !== "/profile") &&
                                <div className="link" onClick={() => navegar("/profile")}>
                                    {props.credentials?.name}
                                </div>
                            }
                            {
                                (window.location.pathname === "/profile") &&
                                <div className="link" onClick={() => logOut()}> <b> Logout</b></div>
                            }
                            {
                                (window.location.pathname !== "/profile") &&
                                <div className="link" onClick={() => logOut()}>Logout</div>
                            }
                        </div>

                    </div>
                }
            
            </div>

        )
    }



}

export default connect((state) => ({
    credentials: state.credentials
}))(Header);