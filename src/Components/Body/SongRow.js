import "./../../Styles/Body/SongRow.css";


const SongRow = ({ track, index, selectPlayPause }) => {
    
    function milliTomins(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
   
  
    return ( 
    
        <div className="song__row">
            <div className='table__no'>{index}</div>
            <div className='title'>
                <img src={track?.album?.images?.[2]?.url} alt="" />
                <div className="song__info">
                    <h3  onClick={()=>{ selectPlayPause(index)}}>{track?.name} </h3>
                    <p> {track?.artists.map((artist) =>(
                        artist?.name
                        )).join(", ")}
                    </p>
                </div>
            </div>
            <div className='album'>{(track?.album?.name === "=") ?  (track?.name) : (track?.album?.name) }</div>
            <div className='time'>{milliTomins(track?.duration_ms)}</div>
        </div>

     );
}

export default SongRow;