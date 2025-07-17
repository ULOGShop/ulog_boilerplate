import React from "react";
import {FiAlertCircle, FiCheck, FiHeart, FiLoader, FiSettings} from "react-icons/fi";
import LibIcon from "./LibIcon";

const IconExample: React.FC = () => {
    return (
        <div style={{display: "flex", gap: "20px", flexWrap: "wrap", padding: "20px", justifyContent: "center", alignItems: "center"}}>
            <div style={{textAlign: "center"}}>
                <LibIcon icon={<FiAlertCircle/>} color="red" size="2em"/>
                <p>Basic Icon</p>
            </div>
            <div style={{textAlign: "center"}}>
                <LibIcon icon={<FiLoader/>} animation="spin" color="blue" size="2em"/>
                <p>Spinning Icon</p>
            </div>
            <div style={{textAlign: "center"}}>
                <LibIcon icon={<FiSettings/>} animation="pulse" color="green" size="2em"/>
                <p>Pulse Animation</p>
            </div>
            <div style={{textAlign: "center"}}>
                <LibIcon icon={<FiHeart/>} animation="beat" color="pink" size="2em"/>
                <p>Beat Animation</p>
            </div>
            <div style={{textAlign: "center"}}>
                <LibIcon icon={<FiCheck/>} animation="bounce" color="purple" size="2em"/>
                <p>Bounce Animation</p>
            </div>
        </div>
    );
};

export default IconExample;