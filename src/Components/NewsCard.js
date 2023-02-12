import React,{useState} from "react";
import '../CSS/NewsCardStyle.css'
import { Link } from "react-router-dom";

const NewsCard = (props) => {
    const [body, setBody] = useState('')
    function showFullStory (){
        setBody(props.blogBody)
    }

    return (
        <div>
            <div className="NewsBox">
                <div className="img">Image will come here</div>
                <div className="blogTitle">{props.blogTitle}</div>
                <div className="excerpts">{props.excerpts}</div>
                <button className="btn-read-more">
                    <Link to={`/News/${props.blogId}`} state={{Body:body,Title:props.blogTitle}}>FullStory</Link>
                </button>
            </div>
        </div>
    );
}
export default NewsCard;
