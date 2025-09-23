import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

const MAX_COUNT = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 컴포넌트가 처음 마운트되거나 isFull 상태가 변경될 때 실행
    useEffect(() => {
        console.log("=====================");
        console.log("useEffect() is Full is called");
        console.log(`isFull: ${isFull}`);
        console.log("=====================");
    }, [isFull]); // isFull이 변경될 때만 실행되도록 수정

    useEffect(() => {
        // MAX_COUNT 변수명 오타 수정
        setIsFull(count >= MAX_COUNT);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div>
            <p>{`총 ${count}명을 수용했습니다.`}</p>
            {/* 두 번째 button 태그 문법 오류 수정 */}
            <button onClick={increaseCount} disabled={isFull} style={{marginRight:10}}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{ color: "red", margin:15 }}>수용할 수 있는 정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accomodate;