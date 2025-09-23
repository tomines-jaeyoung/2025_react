import React, { useState } from "react";

function Counter() {
    // useState Hook을 사용하여 count 상태와 이를 업데이트하는 setCount 함수를 선언합니다.
    const [count, setCount] = useState(0);


    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            {/* setCount 함수를 사용하여 count 값을 1 증가시킵니다. */}
            <button onClick={()=>setCount(count+1)}>클릭하세요.</button>
        </div>
    );
}

// 함수 자체를 내보냅니다.
export default Counter;