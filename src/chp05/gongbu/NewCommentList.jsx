import React from "react";
import NewComment from "./NewComment";

const comments =[{
    name: "방신실",
    url: "https://avatar.iran.liara.run/public/41",
    comment: "안뇽"
},
    {
        name: "방신실",
        url: "https://avatar.iran.liara.run/public/41",
        comment: "안뇽"
    },
    {
        name: "방신실",
        url: "https://avatar.iran.liara.run/public/41",
        comment: "안뇽"
    },


]
function NewCommentList(){

    return(

    comments.map((comment) => {
    return(
       <NewComment name= {comment.name} url={comment.url} comment={comment.comment}/>


    );
    })
    );
}
export default NewCommentList;