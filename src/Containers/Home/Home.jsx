import { connect } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { THEME } from '../../redux/types';
import './Home.css';

const Home = (props) => {
     
console.log("entro en home");

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

    if(props.credentials?.token !== undefined){
        console.log("NO tengo token");
        return(
            
            <div className='designHome'>
                <div className="designThemes">
                    <div className="themeEspañola" onClick={()=>navegarRegister()}>ESPAÑOLA</div>
                    <div className="themeFrancia" onClick={()=>navegarRegister()}>FRANCESA</div>
                    <div className="themeItalia" onClick={()=>navegarRegister()}>ITALIANA</div>
                    <div className="themeMexico" onClick={()=>navegarRegister()}>MEXICANA</div>
                    <div className="themeChina" onClick={()=>navegarRegister()}>CHINA</div>
                    <div className="themeAmericana" onClick={()=>navegarRegister()}>AMERICANA</div>
                    <div className="themeInglesa" onClick={()=>navegarRegister()}>INGLESA</div>
                </div>          
            </div>

        )
   
    } else {
        console.log("SI tengo token", props.credentials.token);
        return(
            
            <div className='designHome'>
                <div className="designThemes">
                    <div className="themeEspañola" onClick={()=>navegar("/:theme","española")}>ESPAÑOLA</div>
                    <div className="themeFrancia" onClick={()=>navegar("/:theme","francesa")}>FRANCESA</div>
                    <div className="themeItalia" onClick={()=>navegar("/:theme","italiana")}>ITALIANA</div>
                    <div className="themeMexico" onClick={()=>navegar("/:theme","mexicana")}>MEXICANA</div>
                    <div className="themeChina" onClick={()=>navegar("/:theme","china")}>CHINA</div>
                    <div className="themeAmericana" onClick={()=>navegar("/:theme","americana")}>AMERICANA</div>
                    <div className="themeInglesa" onClick={()=>navegar("/:theme","inglesa")}>INGLESA</div>
                </div>          
            </div>
        );
    }

}



export default connect((state) => ({
    credentials: state.credentials
}))(Home);
