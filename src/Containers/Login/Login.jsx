 
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
    
    // Navegar
    let navigate = useNavigate();
    useEffect(() => {
        console.log('')

    }, [])

    //Hooks (equivalen al estado en los componentes de clase)
    const [datosUsuario, setDatosUsuario] = useState({email: "", password: ""});
    const [msgError, setMsgError] = useState("");
    const [msgError2, setMsgError2] = useState("");



    //Funciones handlers
    const rellenarDatos = (e) => {
      
        setDatosUsuario({...datosUsuario, [e.target.name]: e.target.value})
    };

    //Funciones locales

    const login = async () => {

        try {
            
            //Me invento las credenciales
            let body = {
                 email: datosUsuario.email,
                 password: datosUsuario.password
            }

            let resultado = await axios.post(raiz +"usuarios/login",body);
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
               
                <div className='login'>
                 {/* {
                     <pre>{JSON.stringify(datosUsuario, null,2)}</pre>} */}
                <div className="designFormulario">
                    <input type="email" className="input" name="email" id="email" title="email" placeholder="Correo Electrónico" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input type="password" className="input" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e);}}/>
                    {msgError}
                    {msgError2}
                </div>
                <br />
                <div className="button type3 espacio" onClick={()=>login()}>Logueame</div>
                </div>
            </div>
        );

};

// export default connect()(Login);
export default connect((state) => ({
    credentials: state.credentials
}))(Login);