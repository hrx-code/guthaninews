import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase.config'
import { useLocation } from 'react-router-dom'
import  '../CSS/DetailedNewsStyle.css'

const NewsWithID = () => {
  
    // const location = useLocation()
    // var Body="",Title="",excerpts="",posted_by="",date="";

    const [Body, setBody] = useState("");
    const [Title, setTitle] = useState("");
    const [excerpts, setExcerpts] = useState('');
    const [posted_by, setPosted_by] = useState("");
    const [date, setDate] = useState("");

    // if(location.state!=null){
    //    setBody(location.state.Body);
    //    setTitle(location.state.Title);
    // }
    
    const params=useParams();
    const userId=params.id;
    console.log("URL userID "+userId)

    const [blog,setBlog]=useState([{}])

    const fetchBlog=async()=>{
      const response=db.collection('blogs');
      const data=await response.get();
      console.log("data.docs.length is "+data.docs);
      data.docs.forEach(item=>{
      console.log("adding data into array "+item.data().Title)
        if(item.id===userId){
          setTitle(item.data().Title)
          setBody(item.data().body);
          setExcerpts(item.data().excerpts);
          setPosted_by(item.data().posted_by);
          setDate(item.data().Time.toDateString());
          // setBlog(item.data());
          // console.log({blog})
        }
      })
    }
    useEffect(() => {
      fetchBlog();
    }, [])
  return (
    <div>
          <div id="detailedNews" className='detailedNews'>
              <div id="Title">
                  <p>{Title}</p>
              </div>
              <div id="excerpts">
                  <p> 
                     {excerpts}
                  </p>  
              </div>
              <div id="author-date">
                  <p>Written By: {posted_by},{date}</p>
              </div>
              <div id="image">
                  {/* <p>image ll be loaded soon</p> */}
              </div>
              <div id="body">
                  <p>{Body}</p>
              </div>
          </div>
    </div>  
  )
}
export default NewsWithID
