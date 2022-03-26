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
                    <div className="theme" onClick={()=>navegarRegister("/register")}>ARABE</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>ESPAÑOLA</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>FRANCESA</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>ITALIANA</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>MEXICANA</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>CHINA</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>VEGANA</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>AMERICANA</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>FRANCESA</div>
                    <div className="theme" onClick={()=>navegarRegister("/register")}>INGLESA</div> 
                    <div className="theme" onClick={()=>navegarRegister("/register")}>TURCA</div>
                </div>          
            </div>

        )
   
    } else {
        console.log("SI tengo token");
        return(
            
            <div className='designHome'>
                <div className="desgignThemes">
                    <div className="theme" onClick={()=>navegar("/:theme","arroces")}>ARABE</div>
                    <div className="theme" onClick={()=>navegar("/:theme","emsaladas")}>ESPAÑOLA</div>
                    <div className="theme" onClick={()=>navegar("/:theme","guisos")}>FRANCESA</div>
                    <div className="theme" onClick={()=>navegar("/:theme","asados")}>ITALIANA</div>
                    <div className="theme" onClick={()=>navegar("/:theme","entrantes")}>MEXICANA</div>
                    <div className="theme" onClick={()=>navegar("/:theme","frio")}>CHINA</div>
                    <div className="theme" onClick={()=>navegar("/:theme","pizzas")}>VEGANA</div>
                    <div className="theme" onClick={()=>navegar("/:theme","pasta")}>AMERICANA</div>
                    <div className="theme" onClick={()=>navegar("/:theme","pescado")}>FRANCESA</div>
                    <div className="theme" onClick={()=>navegar("/:theme","carne")}>INGLESA</div>
                    <div className="theme" onClick={()=>navegar("/:theme","pollo")}>TURCA</div>
                </div>          
            </div>
        );
    }

}



export default connect((state) => ({
    credentials: state.credentials
}))(Home);
