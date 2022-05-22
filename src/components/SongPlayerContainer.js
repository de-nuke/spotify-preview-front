import SongPlayer from "./SongPlayer";

const SongPlayerContainer = (props) => {
    const show = props.songData || props.isLoading;

    return (
        <div className="uk-flex uk-flex-center uk-padding-small">
            {
                show &&
                <div className="uk-animation-scale-up">
                    <SongPlayer songData={props.songData} onClose={props.onClose} isLoading={props.isLoading}/>
                </div>
            }
        </div>
    )
}

export default SongPlayerContainer;