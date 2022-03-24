import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {useNavigate} from 'react-router-dom';

import './Home.css';

const Home = (props) => {
    
// Navegar
    let navigate = useNavigate();

    const navegar = () => {
        navigate("/");
    }

// Hook



// UseEffect de montaje

    useEffect(() => {
        console.log('')
    }, [])

    if(props.credentials?.token !== undefined){
        return(
            <div className='designHome'>
            //ir a posts con navigate
            <div className="diseñoPosts">
            funcion navigate a posts
            </div>
            </div>

        )
    } else {
            
        return(
            
            <div className='designHome'>
                    
                {/* <div className="diseñoPosts">
                funcion navigate a registro a login
                </div>
                 */}
                


                
                
            </div>
        );
    }

}



export default connect((state) => ({
    credentials: state.credentials
}))(Home);
