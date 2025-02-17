import { useState,useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
export default function PostBlog(){
    const [postBlog, setPostBlog]= useState([])

    const fetchPost=()=>{
        axios.get("http://localhost:3000/post/bacheca").then((response)=>{
            setPostBlog (response.data)
        })
    }
    useEffect(fetchPost ,[])

    return(
        <>
        {
            postBlog.map((post)=>
   
             <li key={post.id}>
 <Link to={`/post-blog/${post.id}`}>
           <h1>{post.title}</h1> 
            <img src={post.image} alt={post.title} />
            <p>{post.content}</p>
            </Link>
            </li>)
        }
        </>
    )
}