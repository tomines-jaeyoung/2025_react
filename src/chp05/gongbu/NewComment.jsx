import React from "react";

function NewComment(props){
   return(

    <div>
        <img src={props.url}/>
        {props.name}
        {props.comment}

    </div>



);
}export default NewComment;