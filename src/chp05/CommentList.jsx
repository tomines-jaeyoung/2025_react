

import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"방신실",
        comment: "우승을 축하드립니다.",
        url: "https://avatar.iran.liara.run/public/41"
    },
    {
        name:"현혜수",
        comment: "재영아 사랑해",
        url: "https://avatar.iran.liara.run/public/41"
    },
    {
        name:"박성현",
        comment: "오랜만에 멋진 모습 좋았습니다.",
        url: "https://avatar.iran.liara.run/public/41"
    }
];

function CommentList() {
    return(
        <div>
            {
                comments.map((comment) => {
                        return(
                            <Comment name={comment.name} comment={comment.comment} url={comment.url}/>
                        );
                    }
                )
            }
        </div>
    );
}

export default CommentList;