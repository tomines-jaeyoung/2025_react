import React  from "react";

function Clock(props){
    return(
        <div>
            <h2 className={'Clock'}>{new Date().toLocaleTimeString()}</h2>


        </div>



    )

}

export default Clock;