import React from "react";
import { FaUserAlt } from "react-icons/fa";


function Comments(props){
    const comments=props.comments.map(x=>
        {
      if(props.id===x.postId) {
          return <Comment name={x.name} comment={x.body} key={x.id} />
      }
   
    })
    return(
        <div className="comentarios"> 
            <p><strong>Comentarios</strong></p>           
            <p>{comments}</p>                   
        </div>
    )
}

function Comment(props){
    return(
        <React.Fragment>
            <span><FaUserAlt/><strong>{props.name}: </strong></span>
            <span style={{marginLeft:"1%"}}><i>{props.comment}</i></span>
            <br/>
            <br/>
         </React.Fragment>
    )
}

export default Comments