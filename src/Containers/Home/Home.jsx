import { connect } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { THEME } from '../../redux/types';
import './Home.css';

const Home = (props) => {
     
// console.log("entro en home");

// Navegar
let navigate = useNavigate();

//para nacegar y guardar en redux
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
    //     // console.log('')
    // }, [])

    if(props.credentials?.token === undefined){
        // console.log("NO tengo token");
        return(
            
            <div className='designHome'>
                <div className="designThemes">
                <div className="designHomeWelcome">
                    <h1>Hi, {props.credentials?.name}! We're a community of food lovers.</h1>
                        <h2>Get started by selecting the perfect cuisine that's right for you. We'd love to know how your dining experiences have been? Leave a comment and let us hear from you - all we ask is good ideas on which dishes would suit our community well.</h2>
                    </div>
                    <div className="themeEspañola" onClick={()=>navegarRegister()}>SPANISH</div>
                    <div className="themeFrancia" onClick={()=>navegarRegister()}>FRENCH</div>
                    <div className="themeItalia" onClick={()=>navegarRegister()}>ITALIAN</div>
                    <div className="themeMexico" onClick={()=>navegarRegister()}>MEXICANA</div>
                    <div className="themeChina" onClick={()=>navegarRegister()}>CHINESE</div>
                    <div className="themeAmericana" onClick={()=>navegarRegister()}>AMERICAN</div>
                    <div className="themeInglesa" onClick={()=>navegarRegister()}>ENGLISH</div>
                </div>          
            </div>

        )
   
    } else {
        // console.log("estas son las credenciales", props.credentials);
        return(
            
            <div className='designHome'>
                <div className="designHome">
                    <div className="designHomeWelcome">
                        <h1>Welcome! We're a community of food lovers!</h1>
                        <h2>Please, register to be able to vote for the recipes you like.</h2>
                        <h3>As more votes we get, more people will enjoy these delicious dishes.</h3>
                    </div>
                    <div className="designThemes">
                        <div className="themeEspañola" onClick={()=>navegar("/:theme","española")}>SPANISH</div>
                        <div className="themeFrancia" onClick={()=>navegar("/:theme","francesa")}>FRENCH</div>
                        <div className="themeItalia" onClick={()=>navegar("/:theme","italiana")}>ITALIAN</div>
                        <div className="themeMexico" onClick={()=>navegar("/:theme","mexicana")}>MEXICAN</div>
                        <div className="themeChina" onClick={()=>navegar("/:theme","china")}>CHINESE</div>
                        <div className="themeAmericana" onClick={()=>navegar("/:theme","americana")}>AMERICAN</div>
                        <div className="themeInglesa" onClick={()=>navegar("/:theme","inglesa")}>ENGLISH</div>
                    </div>
                </div>          
            </div>
        );
    }

}



export default connect((state) => ({
    credentials: state.credentials,
    post:state.post
}))(Home);
