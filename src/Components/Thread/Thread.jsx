
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { POST } from '../../redux/types';
import { LOGOUT } from '../../redux/types';
import { raiz } from '../../utiles';

import './Thread.css';
import moment from 'moment';

const Header = (props) => {

    console.log("esto hereda el hijo", props)
    // Navegar
    let navigate = useNavigate();
    const escogePost = () => {


        //Guardamos el post escogido en REDUX al selecionar el post
        props.dispatch({ type: POST, payload: props.theme.title });
        console.log("post guardado en Redux")
        //Redirigimos a la vista de detalles Post con navigate
        navigate("/posts");
    };



    // console.log(window.location.pathname);
    return (

        <div className="itemThread" key={props.theme._id} onClick={()=>escogePost()} >
            <div className="author">{props.theme.posts[0].author}</div>
            <div className="title">{props.theme.title}</div>
            <div className="likes">Likes: {props.theme.posts[0].likes.length}</div>
            <div className="date">{moment(props.theme.posts[0].date).subtract(1, 'days').calendar()}</div> 
        </div>
        //tittle_url

       

    )
}

 


export default connect((state) => ({
    post: state.post
}))(Header);