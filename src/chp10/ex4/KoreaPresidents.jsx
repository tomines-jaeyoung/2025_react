import React from "react";
import './KoreaPresidents.css'

import image2 from './23.jpg';

const students = [
    {id: 1, name: "전두환",startyear:"1980",lastYear:"1988",avatar:"https://ssl.pstatic.net/sstatic/keypage/image/dss/9002/25/06/04/9002_250604_image_14_1748989035800.jpg"},
    {id: 2, name: "노태우",startyear:"1988",lastYear:"1993",avatar:"https://ssl.pstatic.net/sstatic/keypage/image/dss/9002/25/06/04/9002_250604_image_13_1748989035801.jpg"},
    {id: 3, name: "김영삼",startyear:"1993",lastYear:"1998",avatar:"https://ssl.pstatic.net/sstatic/keypage/image/dss/9002/25/06/04/9002_250604_image_12_1748989035801.jpg"},
    {id: 4, name: "김대중",startyear:"1998",lastYear:"2003",avatar:"https://ssl.pstatic.net/sstatic/keypage/image/dss/9002/25/06/04/9002_250604_image_11_1748989035796.jpg"},
    {id: 5, name: "노무현",startyear:"2003",lastYear:"2008",avatar:"https://ssl.pstatic.net/sstatic/keypage/image/dss/9002/25/06/04/9002_250604_image_10_1748989035808.jpg"},
    {id: 6, name: "이명박",startyear:"2008",lastYear:"2013",avatar:"https://ssl.pstatic.net/sstatic/keypage/image/dss/9002/25/08/11/9002_250811_image_11_1754896408538.jpeg"},
    {id: 7, name: "박근혜",startyear:"2013",lastYear:"2017",avatar:"https://ssl.pstatic.net/sstatic/keypage/image/dss/9002/25/06/04/9002_250604_image_8_1748988778155.jpg"},
    {id: 8, name: "문재인",startyear:"2017",lastYear:"2022",avatar:"https://ssl.pstatic.net/sstatic/keypage/image/dss/9002/25/06/04/9002_250604_image_7_1748988778160.png"},
    {id: 9, name: "윤석열",startyear:"2022",lastYear:"2025",avatar:image2},
    {id: 10, name: "이재명",startyear:"2025",lastYear:"현재",avatar:"https://ssl.pstatic.net/sstatic/keypage/image/dss/9002/25/06/04/9002_250604_image_5_1748978698955.jpg"}
]

function AttendanceCard(){
    return(
        <div className={"attendance-container"}>
            <h2 className={"attendance-title"}>역대 대통령 1980 ~ 현재</h2>
            <div className={"card-container"}>
                {
                    students.map((student)=>(

                        <div className={"student-card"} key={student.id}>


                            <img
                                src={student.avatar}
                                alt={student.name}
                                className={"student-avatar"}
                            />


                            <div className={"student-info"}>
                                <h3>{student.name}</h3>


                                <p>{student.startyear} ~ {student.lastYear}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AttendanceCard;