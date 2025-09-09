import React from "react";
import "./UserInfo.css";
import "./Comment.css";
import UserInfo from "./UserInfo";

const users =[
    {
        name: "장원영",
        comment:"초긍정마인드, 럭키비키",
        avatarUrl:"https://cdn.pixabay.com/photo/2024/05/07/05/59/ai-generated-8744866_1280.jpg"
    },
    {
        name: "안유진",
        comment:"모두가 잘 좋아한다.~~",
        avatarUrl:"https://cdn.pixabay.com/photo/2024/02/20/06/47/ai-generated-8584763_1280.jpg"
    },
    {
        name: "가을~~",
        comment:"아이브의 신곡이 ",
        avatarUrl:"https://cdn.pixabay.com/photo/2013/07/12/12/18/options-145547_1280.png"
    }
];

function Comment(props) {
    const currentDate =new Date();
    return (
        <div>
            {users.map((user) => {
                return (
                    <div className="comment">
                        <UserInfo user={user} />
                        <div className = "comment-text">
                            {user.comment}
                        </div>
                        <div className = "comment-date">
                            {currentDate.toDateString()}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Comment;