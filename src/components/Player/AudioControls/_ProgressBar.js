import React from "react";

export default function ProgressBar({progress, duration, onChange}){
    return (
        <input
            className="uk-range uk-inline uk-width-4-5"
            style={{paddingLeft: "5px", paddingRight: "5px"}}
            type="range"
            value={progress || 0}
            min="0"
            max={duration || 0}
            step="1"
            onChange={(e) => onChange(e.target.value)}
        />
    )
}
