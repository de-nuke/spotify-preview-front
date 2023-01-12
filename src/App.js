import './App.css';
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import SongPlayerContainer from "./components/Player";
import React from "react";

const API_BASE = "https://cl5qtr94ti.execute-api.eu-central-1.amazonaws.com/test/preview/";

function fetchSongData(songUrl) {
    const apiUrl = API_BASE + "?url=" + songUrl;
    return fetch(apiUrl).then(response => response.json())
}


class App extends React.Component {
    state = {
        songData: null,
        isLoading: false,
    };

    handleFormSubmit(formData) {
        const url = formData.url;
        this.setState({isLoading: true});
        fetchSongData(url).then(data => {
            this.setState({
                isLoading: false,
                songData: data,
            });
        })
    }

    onCloseCard = (e) => {
        this.setState({songData: null});
    }

    render() {
        return (
            <div className="App">
                <div className="uk-container uk-container-small uk-padding">
                    <Header text="Paste Spotify song URL and get a preview."/>
                    <InputForm onSubmit={this.handleFormSubmit.bind(this)}/>
                    <SongPlayerContainer songData={this.state.songData}
                                         isLoading={this.state.isLoading}
                                         onClose={this.onCloseCard}/>
                </div>
            </div>
        );
    }
}


export default App;
