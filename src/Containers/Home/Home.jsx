import { connect } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { THEME } from '../../redux/types';
import './Home.css';
import { fondo } from '../../redux/types';
// import fondo from '../../img/fondo';

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
    //     // console.log('')
    // }, [])

    if(props.credentials?.token !== undefined){
        console.log("NO tengo token");
        return(
            
            <div className='designHome'>
                <div className="designThemes">
                    <div className="themeEspañola" onClick={()=>navegar("/register")}>ESPAÑOLA</div>
                    <div className="themeFrancia" onClick={()=>navegar("/register")}>FRANCESA</div>
                    <div className="themeItalia" onClick={()=>navegar("/register")}>ITALIANA</div>
                    <div className="themeMexico" onClick={()=>navegar("/register")}>MEXICANA</div>
                    <div className="themeChina" onClick={()=>navegar("/register")}>CHINA</div>
                    <div className="themeAmericana" onClick={()=>navegar("/register")}>AMERICANA</div>
                    <div className="themeInglesa" onClick={()=>navegar("/register")}>INGLESA</div>
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
