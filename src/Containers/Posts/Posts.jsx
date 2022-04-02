import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Posts.css';
import axios from 'axios';



const Posts = (props) => {

    console.log("entro en posts");

    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
        navigate("/"); 
    }

    const newComment = () => {
        navigate("/newComment"); 
    }



    // Hook
    const [posts, setPosts] = useState([]);


    // UseEffect de montaje
    useEffect(() => {
        traePosts();
    }, [])




    // Funcion traer POSTS

    const traePosts = async () => {

        console.log("entra en la funcion Trae Posts")

        try {
            
            // props.post.text1.replace(/ /g, ""); 
            // console.log("props.post")
            // console.log("e",props.post,"e");
            // console.log(typeof(props.post))
            // props.post.replace(/ /g, ""); 
            // console.log("props.post")
            console.log(`e${props.post}e`);
            let resultado = await axios.get(`https://stormy-savannah-32569.herokuapp.com/threads/comments/all/${props.post}`);
            console.log("resultado.data")
            console.log(resultado.data);
            setPosts(resultado.data); // SE GUARDA EL RESULTADO EN EL HOOK
            console.log("posts guardados en hook")


        } catch (error) {
            console.log(error);
        }
    }

    if (posts !== undefined) {
        console.log("array de posts contiene post)")
        // aqui mapeo porque ya las tengo
        return (
            <div className="designPost">
                <div className="itemButtonNewPost" onClick={()=>newComment()} >New post</div> 
                {posts.map(
                    item => {
                        console.log("devuelve el mapeo de posts")
   
                        return (
                            <div className="itemPost" key={item._id}>
                                <div className="containerPostUp">
                                    {/* <div className="themePosts"> {item.theme}</div> */}
                                    
                                </div>
                                
                                <div className="containerPostDown">
                                    <div className="containerPostDownGlobal">
                                        <div  className="containerPostDownGlobalLeft">
                                            <div className="nickname"> NICKNAME{item.author}</div>
                                            {/* <div className="avatar">AVATAR{item.avatar}</div> */}
                                        </div>
                                        <div className="containerPostDownGlobalRight">
                                            <div className="containerPostDownGlobalRightUp">{item.title}</div>
                                            <div className="containerPostDownGlobalRightMiddle">{item.content}</div>
                                            <div className="containerPostDownGlobalRightDown">
                                                <div className="containerPostDownGlobalRightDownLike"> Likes {item.likes.length}</div>
                                                <div className="containerPostDownGlobalRightDownDate">{item.date}</div>
                                                <div className="containerPostDownGlobalRightDownEmpty">EMPTY</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        )
    } else {
        return (
            <div className="diseñopost2">
                <div className="contenedorPost2">
                    NO HAY NINGUN POST SOBRE ESTE TEMA
                </div>
            </div>
        );
    }
}





export default connect((state) => ({
    post: state.post
}))(Posts);


{/* <p className="titulo">{item._id}</p>
                            <p className="titulo">{item.title}</p>
                            <p className="titulo">{item.title_url}</p>
                            <p className="titulo">{item.title}</p> */}