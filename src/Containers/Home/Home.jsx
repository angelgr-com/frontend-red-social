import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {useNavigate} from 'react-router-dom';

import './Home.css';

const Home = (props) => {
     
// Navegar
let navigate = useNavigate();

const navegar = (lugar,criterio) => {

    //Guardamos en REDUX el criterio
    props.dispatch({type: THEME, payload: criterio}); 

    navigate(lugar);
}

const navegarHome = (lugar) => {

    navigate(lugar);
}

// Hook



// UseEffect de montaje

    // useEffect(() => {
    //     console.log('')
    // }, [])

    if(props.credentials?.token === undefined){
        return(
            
            <div className='designHome'>
                <div className="desgignThemes">
                    <div className="theme" onClick={()=>navegar("/register")}>ARROCES</div>
                    <div className="theme" onClick={()=>navegar("/register")}>ENSALADAS</div>
                    <div className="theme" onClick={()=>navegar("/register")}>GUISOS</div>
                    <div className="theme" onClick={()=>navegar("/register")}>ASADOS</div>
                    <div className="theme" onClick={()=>navegar("/register")}>ENTRANTES</div>
                    <div className="theme" onClick={()=>navegar("/register")}>FRIO</div>
                    <div className="theme" onClick={()=>navegar("/register")}>PIZZAS</div>
                    <div className="theme" onClick={()=>navegar("/register")}>PASTA</div>
                    <div className="theme" onClick={()=>navegar("/register")}>PESCADO</div>
                    <div className="theme" onClick={()=>navegar("/register")}>CARNE</div>
                    <div className="theme" onClick={()=>navegar("/register")}>POLLO</div>
                </div>          
            </div>

        )
    } else {
            
        return(
            
            <div className='designHome'>
                <div className="desgignThemes">
                    <div className="theme" onClick={()=>navegar("/:theme","arroces")}>ARROCES</div>
                    <div className="theme" onClick={()=>navegar("/:theme","emsaladas")}>ENSALADAS</div>
                    <div className="theme" onClick={()=>navegar("/:theme","guisos")}>GUISOS</div>
                    <div className="theme" onClick={()=>navegar("/:theme","asados")}>ASADOS</div>
                    <div className="theme" onClick={()=>navegar("/:theme","entrantes")}>ENTRANTES</div>
                    <div className="theme" onClick={()=>navegar("/:theme","frio")}>FRIO</div>
                    <div className="theme" onClick={()=>navegar("/:theme","pizzas")}>PIZZAS</div>
                    <div className="theme" onClick={()=>navegar("/:theme","pasta")}>PASTA</div>
                    <div className="theme" onClick={()=>navegar("/:theme","pescado")}>PESCADO</div>
                    <div className="theme" onClick={()=>navegar("/:theme","carne")}>CARNE</div>
                    <div className="theme" onClick={()=>navegar("/:theme","pollo")}>POLLO</div>
                </div>          
            </div>
        );
    }

}



export default connect((state) => ({
    credentials: state.credentials
}))(Home);
