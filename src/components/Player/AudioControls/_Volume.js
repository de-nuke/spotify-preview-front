import {CiVolumeHigh} from "react-icons/ci";
import React from "react";

export default function Volume({level, onChange}){
    return <CiVolumeHigh size="2em" onClick={(e) => onChange(0)}/>
}
