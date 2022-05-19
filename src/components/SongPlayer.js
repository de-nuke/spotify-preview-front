import spotifyLogo from "../images/icons8-spotify.svg"


const RealSongPlayer = (props) => (
    <>
        <div className="uk-background-default uk-cover-container" style={{minWidth: "300px", minHeight: "300px"}}>
            <img src={props.songData.image_url}
                 alt=""/>
            <div className="uk-position-top-left">
                <a href={props.songData.url} target={"_blank"}><img src={spotifyLogo} alt="Spotify's logo"/>
                <div className="uk-badge uk-animation-slide-right-small">Listen on Spotify</div></a>
            </div>
            <div className="uk-position-top-right">
                    <span data-uk-icon="icon: close; ratio: 1.5"
                          className="uk-light"
                          style={{cursor: "pointer", filter: "drop-shadow(1px 1px 1px rgb(0 0 0 / 0.6))"}}>
                    </span>
            </div>
        </div>
        <div className="uk-background-default uk-padding-small">
            <div>
                <h3>{props.songData.title}</h3>
                <h5 className="uk-margin-remove">{props.songData.description}</h5>
            </div>
            <div className="">
                <div className="uk-flex">
                    <span className="uk-inline uk-width-1-5" data-uk-icon="icon: play; ratio: 2.5"></span>
                    <input className="uk-range uk-inline uk-width-4-5" type="range" min="0" max="10" step="0.1"/>
                </div>
            </div>
        </div>
    </>
)


const PlayerPlaceholder = () => (
    <>
        <div className="uk-background-default uk-cover-container" style={{minWidth: "300px", minHeight: "300px", backgroundColor: "gray"}}>
            <img src=""
                 alt=""/>
            <div className="uk-position-top-right">
                    <span data-uk-icon="icon: close; ratio: 1.5" className="uk-light"
                          style={{cursor: "pointer"}}></span>
            </div>
        </div>
        <div className="uk-background-default uk-padding-small">
            <div>
                <h3 style={{backgroundColor: "lightgray", borderRadius: "10px"}}>&nbsp;</h3>
                <h5 style={{backgroundColor: "lightgray", borderRadius: "10px"}} className="uk-margin-remove">&nbsp;</h5>
            </div>
            <div className="">
                <div className="uk-flex">
                    <span className="uk-inline uk-width-1-5" data-uk-icon="icon: play; ratio: 2.5"></span>
                    <input className="uk-range uk-inline uk-width-4-5" type="range" min="0" max="10" step="0.1"/>
                </div>
            </div>
        </div>
    </>
)

const SongPlayer = (props) => (
    <div className="uk-width-medium uk-box-shadow-large uk-border-rounded uk-overflow-hidden">
        <div>
            {props.isLoading ?
                (
                    <>
                        <div className="uk-overlay-default uk-position-cover" style={{zIndex: 1}}></div>
                        <PlayerPlaceholder/>
                    </>
                )
                :
                <RealSongPlayer songData={props.songData}/>
            }
        </div>
        {props.isLoading && (
            <div className="uk-position-center" style={{zIndex: 2}}>
                <div data-uk-spinner="ratio: 3"></div>
            </div>
        )}
    </div>
)

export default SongPlayer;
