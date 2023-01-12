import {CiVolumeHigh} from "react-icons/ci";
import React from "react";

export default function Volume({level, onChange}){

    return (
        <>
            {/*<div><input type="range" width="5px" height="100px" /></div>*/}
            <div style={{width: "30px"}} id="volume-container">
                <div id="volume-button" style={{paddingTop: "10px", marginTop: "-10px", cursor: "pointer"}}>
                    <CiVolumeHigh size="2em" onClick={(e) => onChange(0)}/>
                </div>
                <div id="volume-slider"
                    style={{
                    // display: "none",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    position: "absolute",
                    bottom: "50px",
                    backgroundColor: "white",
                    width: "30px",
                    border: "1px solid lightgray",
                    borderRadius: "15px"
                }}>
                    <input className="uk-range uk-inline " type="range" min="-100" max="100" step="10" orient="vertical"/>
                </div>
            </div>
        </>
    )
}
