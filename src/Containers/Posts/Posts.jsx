import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Posts.css';
import axios from 'axios';
import { raiz } from '../../utiles';


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
<<<<<<< HEAD
    const [likes, setLikes] = useState([]);
    const [seguir, setSeguir] = useState([]);
 
=======

>>>>>>> 76bc9a17af98ae4265c4df137eba32e89f2b1500

    // UseEffect de montaje
    useEffect(() => {
        traePosts();
    }, [])

    // Navegar a Home
    const goHome = async () => {
        console.log("entra en goHome")
        navigate("/");
    }

    // Navegar a EditComment
    const goEdit = async () => {
        console.log("entra en goHome")
        navigate("/editComment");
    }

    // Navegar a EditThread
    const goEditThread = async () => {
        console.log("entra en goThread")
        navigate("/editThread");
    }

    // Navegar a DeleteThread
    const goDeleteThread = async () => {
        console.log("entra en goDeleteThread")
        navigate("/deleteThread");
    }

    // Navegar a DeleteComment
    const  goDeleteComment = async () => {
        console.log("entra en goDeleteComment")
        navigate("/deleteComment");
    }

    
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
            // let resultado2 = await axios.get(`https://stormy-savannah-32569.herokuapp.comthreads/likes/0/${props.post}`);
            
            // resultado.data.likes=resultado2
            console.log("resultado.data")

            console.log(resultado);
            setPosts(resultado.data);// SE GUARDA EL RESULTADO EN EL HOOK
            console.log("posts guardados en hook")

 
        } catch (error) {
            console.log(error);
        }
    }

    const daLike = async () => {

        console.log("entra en la funcion Trae Posts")

        try {
            
            // props.post.text1.replace(/ /g, ""); 
            // console.log("props.post")
            // console.log("e",props.post,"e");
            // console.log(typeof(props.post))
            // props.post.replace(/ /g, ""); 
            // console.log("props.post")
            console.log(`e${props.post}e`);
            let resultado = await axios.get(`https://stormy-savannah-32569.herokuapp.com/threads/likes/0/${props.post}`);
            console.log("resultado.data000000")
            console.log(resultado);
            console.log("posts guardados en hook")
            setLikes(resultado); // SE GUARDA EL RESULTADO EN EL HOOK
            


        } catch (error) {
            console.log(error);
        }
    }
    const sigue = async (a) => {

        console.log("entra en la funcion Trae Posts")

        try {
            
            // props.post.text1.replace(/ /g, ""); 
            // console.log("props.post")
            // console.log("e",props.post,"e");
            // console.log(typeof(props.post))
            // props.post.replace(/ /g, ""); 
            // console.log("props.post")
            console.log(props.credentials.name);
            console.log(a);
            let resultado = await axios.put(raiz+`/users/${a}/add-follower/${props.credentials.name}`);
            console.log("resultado.data")
            console.log(resultado);
            setSeguir(resultado); // SE GUARDA EL RESULTADO EN EL HOOK
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
                <div className="topDesignPost">
                    <div className="itemButtonNewPost" onClick={() => newComment()} >New comment</div>
                    <div className="itemButtonNewPost" onClick={() => goEditThread()} >Edit Thread</div>
                    <div className="itemButtonNewPost" onClick={() => goDeleteThread()} >Delete Thread</div>
                    <div className="itemButtonNewPost" onClick={() => goHome()} >Home</div>
                </div>
                {posts.map(
                    item => {

                        return (
                            <div className="itemPost" key={item._id}>
                                <div className="containerPostUp">
                                    {/* <div className="themePosts"> {item.theme}</div> */}

                                </div>

                                <div className="containerPostDown">
                                    <div className="containerPostDownGlobal">
                                        <div className="containerPostDownGlobalLeft">
                                            <div className="nickname"> NICKNAME{item.author}</div>
                                            <div className="itemButton" onClick={()=>daLike()} >Like</div> 
                                            <div className="itemButton" onClick={()=>sigue(item.author)} >Seguir</div> 
                                            {/* <div className="avatar">AVATAR{item.avatar}</div> */}
                                        </div>
                                        <div className="containerPostDownGlobalRight">
                                            <div className="containerPostDownGlobalRightUp">{item.title}</div>
                                            <div className="containerPostDownGlobalRightMiddle">{item.content}</div>
                                            <div className="containerPostDownGlobalRightDown">
                                                <div className="containerPostDownGlobalRightDownLike"> Likes {item.likes}</div>
                                                <div className="containerPostDownGlobalRightDownDate">{item.date}</div>
                                                <div className="containerPostDownGlobalRightDownUpdate">
                                                    <div className="containerPostDownGlobalRightDownUpdateEdit" onClick={() => goEdit()}>Edit</div>
                                                    <div className="containerPostDownGlobalRightDownUpdateDelete" onClick={() => goDeleteComment()} >Delete</div>
                                                </div>
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
    post: state.post,
    credentials: state.credentials
}))(Posts);


{/* <p className="titulo">{item._id}</p>
                            <p className="titulo">{item.title}</p>
                            <p className="titulo">{item.title_url}</p>
                            <p className="titulo">{item.title}</p> */}