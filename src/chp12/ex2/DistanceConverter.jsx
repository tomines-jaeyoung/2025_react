import React, {useState} from "react";
import DistanceInput from "./DistanceInput";
import './DistanceConverter.css';

function toKilometers(miles){
    return miles * 1.60934;
}

function toMiles(km){
    return km / 1.60934;
}

function DistanceConverter(){
    const [distance, setDistance] = useState("");
    const [unit,setUnit] = useState("km");

    const handleKilometerChange = (distance)=>{
        setDistance(distance);
        setUnit("km")
    };

    const handleMileChange = (distance)=>{
        setDistance(distance);
        setUnit("mile")
    };

    const kilometers = unit === "mile" ? toKilometers(parseFloat(distance)) : distance;
    const miles = unit === "km" ? toMiles(parseFloat(distance)) : distance;

    return(
        <div className="distance-converter">
            <h1>거리 단위 변환기</h1>
            <div className="input-container">
                <DistanceInput
                    unit={"km"}
                    distance={Math.round(kilometers*1000)/1000}
                    onDistanceChange={handleKilometerChange}
                />
                <DistanceInput
                    unit={"mile"}
                    distance={Math.round(miles*1000)/1000}
                    onDistanceChange={handleMileChange}
                />
            </div>
            <div className="result-display">
                <p>
                    {kilometers}km는 {miles}마일입니다.
                </p>
            </div>
        </div>
    )
}

export default DistanceConverter;