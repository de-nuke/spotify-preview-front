import SongPlayer from "./SongPlayer";

const SongCard = (props) => (
    <div className="uk-flex uk-flex-center uk-padding-small">
        <div className="uk-animation-scale-up">
            <SongPlayer songData={props.songData} isLoading={props.isLoading}/>
        </div>
    </div>
)

export default SongCard;