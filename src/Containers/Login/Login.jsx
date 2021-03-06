 
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {raiz} from '../../utiles';
import axios from 'axios';

//REDUX...
import { connect } from 'react-redux';
import { LOGIN, LOGOUT, MODIFY_CREDENTIALS } from '../../redux/types';
//REDUX...

import './Login.css';

const Login = (props) => {
    console.log("entro en Login")
    
    // Navegar
    let navigate = useNavigate();
    useEffect(() => {
        console.log('')

    }, [])

    //Hooks (equivalen al estado en los componentes de clase)
    const [datosUser, setDatosUser] = useState({email: "", password: ""});
    const [msgError, setMsgError] = useState("");
    const [msgError2, setMsgError2] = useState("");



    //Funciones handlers
    const rellenarDatos = (e) => {
      
        setDatosUser({...datosUser, [e.target.name]: e.target.value})
    };

    //Funciones locales

    const login = async () => {

        try {
            
            //Me invento las credenciales
            let body = {
                 email: datosUser.email,
                 password: datosUser.password
            }

            let resultado = await axios.post(raiz +"/users/login",body);
            console.log("resultado  aaaaaaaaaa")
            console.log(resultado)
            //Cambiamos el valor del hook credenciales, por lo tanto se recargará el componente
            if(resultado.data === "Usuario o contraseña inválido"){
                setMsgError2("Usuario o contraseña inválido")
            }else{

                //Guardaríamos los datos en redux...

                props.dispatch({type:LOGIN, payload: resultado.data});


                setTimeout(()=>{
                    navigate("/"); 
                },1500);
            }


        } catch (error) {

            console.log(error)

        }

        
    };

    //2-Render (lo que pinta en pantalla)
         
        return(
            
            <div className='designLogin'>
                <div className="cardLogin">
                    <p>ENTER LOGIN DATA</p>
                        <div className="designFormulario">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="inputLogin" name="email" id="email" title="email" placeholder="Correo Electrónico" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                            <label htmlFor="email">Password:</label>
                            <input type="password" className="inputLogin" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e);}}/>
                            {msgError}
                            {msgError2}
                        </div>
                        <button className='buttonLogin' onClick={()=>login()}> ENTRAR</button>
                </div>   
            </div>
        );

};


export default connect((state) => ({
    credentials: state.credentials
}))(Login);