import {BsPlay, BsPause} from "react-icons/bs";
import React from "react";

export default function PlayPause(props){
    return (
        props.isPlaying ?
            <BsPause onClick={props.onClick} size="2.5rem" style={{cursor: "pointer"}}/>
            :
            <BsPlay onClick={props.onClick} size="2.5rem" style={{cursor: "pointer"}}/>
    )
}
