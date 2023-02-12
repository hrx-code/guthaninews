import React, { useState,useEffect } from 'react'
import db from '../firebase.config'
import NewsCard from './NewsCard'
import '../CSS/Homepage.css'
export default function Homepage() {
    
  const [blogs,setBlogs]=useState([{}])

    const fetchBlogs=async()=>{
      const response=db.collection('blogs');
      const data=await response.get();
      console.log(data);
      data.docs.forEach(item=>{
      // console.log("adding data into array "+item.data().Title)
      // console.log("checking for id: "+item.id)
      const curObj={
        Title:item.data().Title,
        body:item.data().body,
        id:item.id,
        excerpts:item.data().excerpts,
        clip:item.data().clip,
        posted_by:item.data().posted_by,
        Time:item.data().Time
      }
      setBlogs(blogs=>[...blogs,curObj])
      })
    }
    useEffect(() => {
      setBlogs([])
      fetchBlogs();
    }, [])

  return (
    <div className="Homepage">
      { 
        blogs && blogs.map(blog=>{
          return( 
            <NewsCard blogTitle={blog.Title} excerpts={blog.excerpts} blogId={blog.id} blogBody={blog.body}/>
          )
        })
        // <>{blogs.length}</>
      }
    </div>
  )
}
