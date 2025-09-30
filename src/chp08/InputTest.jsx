import React, {useState} from "react";



function InputTest(){
const[inputValue, setInputValue] = useState("");
    function handleChange(event){
       setInputValue(event.target.value);
    }

    //const handleChange2 = (event) => {
    //     setInputValue(event.target.value);
    //    }
return(
    <div>
        <h3>아래의 텍스트 박스에 입력 내용이 변경될 때 마다 알림창이 표시됩니다.</h3>
        <input size={50} type="text" onChange={handleChange} placeholder = {"Input Text..."}/>
        <h2 id={"reselt"}>입력된 내용: {inputValue}</h2>
    </div>
);

}




export default InputTest;