
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { POST } from '../../redux/types';
import { LOGOUT } from '../../redux/types';
import { raiz } from '../../utiles';

import './Thread.css';

const Header = (props) => {

    // Hook
    const [posts, setPosts] = useState([])

    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
        navigate("/detalles"); // AQUI TIENE QUE NAVEGAR A LA VISTA DE DETALLES POST
    }

    const escogePost = (post) => {

        console.log(post);
        //Guardamos el post escogido en REDUX al selecionar el post
        props.dispatch({ type: POST, payload: post });
        console.log("post guardado en Redux")


        //Redirigimos a la vista de detalles Post con navigate
        navigate("/detallesPost");
    };

    // console.log(window.location.pathname);
    return (

        // <div className="itemPost" key={item.id}  >
        //     <p className="titulo">{item._id}</p>
        //     <p className="titulo">{item.title}</p>
        //     <p className="titulo">{item.title_url}</p>
        //     <p className="titulo">{item.title}</p>
        // </div>
        // "name": "",
        // "nickname": "",
        // "email": "@gmail.com",
        // "password": "1234",
        // "avatar": ,
        // "isAdmin":
        <div></div>

    )
}




export default connect((state) => ({
    post: state.post
}))(Header);