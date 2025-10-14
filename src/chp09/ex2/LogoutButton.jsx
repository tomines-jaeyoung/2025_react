import React from "react";

function LoginoutButton(props){
    return(
        <button onClick ={props.onClick} style={{backgroundColor: 'blue', color: 'white'}}>로그인</button>

    )
}
export default LoginoutButton;