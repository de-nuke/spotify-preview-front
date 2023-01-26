import React from "react";

import PlayPause from "./_PlayPause";
import ProgressBar from "./_ProgressBar";
import Volume from "./_Volume";


class AudioControls extends React.Component {
    constructor(props) {
        super(props);
        let audio = new Audio(props.audioSrc);
        audio.volume = 1;
        audio.onended = this.onEnded.bind(this);

        this.state = {
            trackProgress: 0,
            isPlaying: false,
            audio: audio,
            volume: audio.volume,
        };
        this.interval = null;
    }

    startProgressBar(){
        this.stopProgressBar();
        this.interval = setInterval(()=>{
            if (this.state.isPlaying) {
                this.setState({trackProgress: this.state.audio.currentTime});
            }
        }, 1000)
    }

    stopProgressBar(){
        if (this.interval){
            clearInterval(this.interval);
        }
    }

    handlePlayPause = (event) => {
        if (this.state.isPlaying) {
            this.pause();
            this.stopProgressBar();
        }
        else {
            this.play();
            this.startProgressBar();
        }
    }

    pause(){
        this.state.audio.pause();
        this.setState({isPlaying: false});
    }

    play(){
        this.state.audio.play();
        this.setState({isPlaying: true});
    }

    onScrub = (value) => {
        clearInterval(this.interval);
        let audio = this.state.audio;
        audio.currentTime = value;
        this.setState({audio: audio, trackProgress: audio.currentTime});
      };

    changeVolume = (volumeLevel) => {
        console.log(volumeLevel)
        let audio = this.state.audio;
        audio.volume = volumeLevel;
        this.setState({volume: volumeLevel});
    }

    onEnded(){
        this.pause();
        this.startProgressBar();
        this.setState({trackProgress: 0});
    }

    render() {
        return (
            <div className="uk-flex" style={{marginTop: "10px"}}>
                <PlayPause isPlaying={this.state.isPlaying} onClick={this.handlePlayPause}/>
                <ProgressBar
                    progress={this.state.trackProgress}
                    duration={this.state.audio.duration}
                    onChange={this.onScrub}
                    onEnded={this.onEnded}
                />
                <Volume level={this.state.volume} onChange={this.changeVolume}/>
            </div>
        );
    }
}

export {AudioControls}
