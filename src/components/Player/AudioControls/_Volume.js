import {BsVolumeOff, BsVolumeDown, BsVolumeUp, BsVolumeMute} from "react-icons/bs";
import React from "react";


function chooseVolumeIcon(level){
    if (level > 0.5) {
        return <BsVolumeUp size="2.5em"/>
    } else if (level > 0.1) {
        return <BsVolumeDown size="2.5em"/>
    } else {
        return <BsVolumeOff size="2.5em"/>
    }
}


export default function Volume({level, onChange}){

    return (
        <>
            <div style={{width: "30px"}} id="volume-container">
                <div id="volume-button" style={{paddingTop: "10px", marginTop: "-10px", cursor: "pointer"}}>
                    {chooseVolumeIcon(level)}
                </div>
                <div id="volume-slider"
                    style={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    position: "absolute",
                    bottom: "50px",
                    backgroundColor: "white",
                    width: "30px",
                    border: "1px solid lightgray",
                    borderRadius: "3px"
                }}>
                    <input className="uk-range uk-inline "
                           value={level || 1}
                           type="range"
                           min="0"
                           max="1"
                           step="0.05"
                           orient="vertical"
                           onChange={event => onChange(event.target.value)}
                    />
                </div>
            </div>
        </>
    )
}
