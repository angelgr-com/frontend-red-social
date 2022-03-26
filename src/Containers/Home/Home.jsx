import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { THEME } from '../../redux/types';
import './Home.css';

const Home = (props) => {
     
console.log("entro en home");

// Navegar
let navigate = useNavigate();

const navegar = (lugar,theme) => {

    //Guardamos en REDUX el criterio
    props.dispatch({type: THEME, payload: theme}); 

    navigate(lugar);
}


// Funcion Navegar a register
const navegarRegister = () => { 

    navigate("/register");
}


// UseEffect de montaje

    // useEffect(() => {
    //     console.log('')
    // }, [])

    if(props.credentials?.token === undefined){
        console.log("NO tengo token");
        return(
            
            <div className='designHome'>
                <div className="desgignThemes">
                    <div className="theme" onClick={()=>navegarRegister("/register")}>ARROCES</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>ENSALADAS</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>GUISOS</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>ASADOS</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>ENTRANTES</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>FRIO</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>PIZZAS</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>PASTA</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>PESCADO</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>CARNE</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>POLLO</div>
                </div>          
            </div>

        )
   
    } else {
        console.log("SI tengo token");
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
