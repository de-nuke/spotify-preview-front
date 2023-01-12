import {CiPause1, CiPlay1} from "react-icons/ci";
import React from "react";

export default function PlayPause(props){
    return (
        props.isPlaying ?
            <CiPause1 onClick={props.onClick} size="2rem"/>
            :
            <CiPlay1 onClick={props.onClick} size="2rem"/>
    )
}
