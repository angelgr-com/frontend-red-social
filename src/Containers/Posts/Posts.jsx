import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Posts.css';
import axios from 'axios';
import { raiz } from '../../utiles';
import { ID,POST } from '../../redux/types';

const Posts = (props) => {

    console.log("entro en posts555555");
    console.log(props.post);
    // Navegar
    let navigate = useNavigate();

    const navegar = () => {
        navigate("/");
    }

    const newComment = () => {
        navigate("/newComment");
    }



    // Hook
    const [posts1, setPosts1] = useState("");
    const [likes, setLikes] = useState([]);
    const [seguir, setSeguir] = useState([]);
    const [borrar, setBorrar] = useState([]);


    // UseEffect de montaje
    useEffect(() => {
        traePosts();
    }, [])

    // Navegar a Home
    const goHome = async () => {
        //console.log("entra en goHome")
        navigate("/");
    }

    // Navegar a EditComment
    const goEdit = async (e) => {
        console.log("entra en goHomeeeeeeeeee")
        console.log(e)
        console.log(props.post);

        //Guardamos el post escogido en REDUX al selecionar el post
        props.dispatch({ type: POST, payload: props.post },);
        props.dispatch({ type: ID, payload: e });
       

        // //console.log("post guardado en Redux")
        // //console.log("e",props.theme.title_url,"e");
        //Redirigimos a la vista de detalles Post con navigate

    navigate("/editComment");
}

// Navegar a EditThread
const goEditThread = async (e) => {
    //console.log("entra en goThread")
    props.dispatch({ type: POST, payload: props.post },);
    props.dispatch({ type: ID, payload: e });
    navigate("/editThread");
}

// Navegar a DeleteThread
const goDeleteThread = async () => {
    //console.log("entra en goDeleteThread")
    navigate("/deleteThread");
}

// Navegar a DeleteComment
const goDeleteComment = async (e) => {
    //console.log("entra en goDeleteComment")

    try {

        // props.post.text1.replace(/ /g, ""); 
        // //console.log("props.post")
        // //console.log("e",props.post,"e");
        // //console.log(typeof(props.post))
        // props.post.replace(/ /g, ""); 
        // //console.log("props.post")
        //console.log(`e${e}e`);
        let resultado = await axios.delete(raiz + `/threads/comments/delete/${e}/${posts1.title_url}`);
        // let resultado2 = await axios.get(`https://stormy-savannah-32569.herokuapp.comthreads/likes/0/${props.post}`);

        // resultado.data.likes=resultado2
        //console.log("resultado.data")

        //console.log(resultado);
        setBorrar(resultado.data);// SE GUARDA EL RESULTADO EN EL HOOK
        //console.log("posts guardados en hook")
        navigate("/posts");

    } catch (error) {
        //console.log(error);
    }
}


// Funcion traer POSTS

const traePosts = async () => {

    //console.log("entra en la funcion Trae Posts")

    try {

        // props.post.text1.replace(/ /g, ""); 
        // //console.log("props.post")
        // //console.log("e",props.post,"e");
        // //console.log(typeof(props.post))
        // props.post.replace(/ /g, ""); 
        // //console.log("props.post")
        console.log(`e${props.post}e`);
        let resultado = await axios.get(`https://stormy-savannah-32569.herokuapp.com/threads/${props.post}`);
        // let resultado2 = await axios.get(`https://stormy-savannah-32569.herokuapp.comthreads/likes/0/${props.post}`);

        // resultado.data.likes=resultado2
        console.log("resultado.data")

        console.log(resultado.data[0]);
        setPosts1(resultado.data[0]);// SE GUARDA EL RESULTADO EN EL HOOK
        //console.log("posts guardados en hook")
        //console.log("array de posts contiene post)")
        //console.log(posts)

    } catch (error) {
        //console.log(error);
    }
}

const daLike = async (e) => {

    //console.log("entra en la funcion Trae Posts")

    try {

        // props.post.text1.replace(/ /g, ""); 
        // //console.log("props.post")
        // //console.log("e",props.post,"e");
        // //console.log(typeof(props.post))
        // props.post.replace(/ /g, ""); 
        // //console.log("props.post")
        console.log(`${e}`);
        console.log(`${props.post}`);
        console.log(raiz+`/threads/likes/${e}/${props.post}`);
        let resultado = await axios.get(raiz+`/threads/likes/${e}/${props.post}`);
        console.log("resultado.data000000")
        console.log(resultado);
        //console.log("posts guardados en hook")
        traePosts()
        setLikes(resultado); // SE GUARDA EL RESULTADO EN EL HOOK



    } catch (error) {
        //console.log(error);
    }
}
const sigue = async (a) => {

    //console.log("entra en la funcion Trae Posts")

    try {

        // props.post.text1.replace(/ /g, ""); 
        // //console.log("props.post")
        // //console.log("e",props.post,"e");
        // //console.log(typeof(props.post))
        // props.post.replace(/ /g, ""); 
        // //console.log("props.post")
        //console.log(props.credentials.name);
        //console.log(a);
        let resultado = await axios.put(raiz + `/users/${a}/add-follower/${props.credentials.name}`);
        //console.log("resultado.data")
        //console.log(resultado);
        setSeguir(resultado); // SE GUARDA EL RESULTADO EN EL HOOK
        //console.log("posts guardados en hook")


    } catch (error) {
        //console.log(error);
    }
}


if (posts1 !== "") {
    console.log("array de posts contiene post)")
    // console.log(posts1.posts)
    // console.log(likes)
    // console.log(posts1.posts)
    console.log("array de posts contiene post)")
    console.log(posts1)
    // aqui mapeo porque ya las tengo
    return (
        <div className="designPost">
            <div className="topDesignPost">
                <div className="itemButtonNewPost" onClick={() => newComment()} >New comment</div>
                <div className="itemButtonNewPost" onClick={() => goEditThread(posts1.title_url)} >Edit Thread</div>
                <div className="itemButtonNewPost" onClick={() => goDeleteThread()} >Delete Thread</div>
                <div className="itemButtonNewPost" onClick={() => goHome()} >Home</div>
            </div>
            <div className="topDesignPost">
            <div className="containerPostDownGlobalRightUp">{posts1.title}</div>
                
            </div>
            {posts1.posts.map(
                item => {
                    console.log(item)
                    console.log("eeeeeeeeeeeee")
                    return (
                        <div className="itemPost" key={item._id}>
                            <div className="containerPostUp">
                                {/* <div className="themePosts"> {item.theme}</div> */}

                            </div>

                            <div className="containerPostDown">
                                <div className="containerPostDownGlobal">
                                    <div className="containerPostDownGlobalLeft">
                                        <div className="nickname"> NICKNAME{item.author}</div>
                                        <div className="itemButton" onClick={() => daLike(item._id)} >Like</div>
                                        <div className="itemButton" onClick={() => sigue(item.author)} >Seguir</div>
                                        {/* <div className="avatar">AVATAR{item.avatar}</div> */}
                                    </div>
                                    <div className="containerPostDownGlobalRight">
                                        {/* <div className="containerPostDownGlobalRightUp">{item.title}</div> */}
                                        <div className="containerPostDownGlobalRightMiddle">{item.content}</div>
                                        <div className="containerPostDownGlobalRightDown">
                                            <div className="containerPostDownGlobalRightDownLike"> Likes {item.likes}</div>
                                            <div className="containerPostDownGlobalRightDownDate">{item.date}</div>
                                            <div className="containerPostDownGlobalRightDownUpdate">
                                                <div className="containerPostDownGlobalRightDownUpdateEdit" onClick={() => goEdit(item._id)}>Edit</div>
                                                <div className="containerPostDownGlobalRightDownUpdateDelete" onClick={() => goDeleteComment(item._id)} >Delete</div>
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