import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function SinglePost(){
    
    const[post, setPost]= useState()
    const { id }=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/post/${id}`).then((response)=>{
            setPost(response.data) 
        })
    },[id])
    
    return(
        <>
        <h1>{post?.title}</h1>
        <img src={post?.image} alt={post?.title} />
        <ul>
        <li>{post?.ingredients}</li>
        </ul>
        
       
        </>
    )
}