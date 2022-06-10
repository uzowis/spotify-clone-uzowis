import { useEffect, useRef, useState } from "react";
import { useDataLayerValue } from "./Components/DataLayer";
import "./SongRow.css";


const SongRow = ({ track, index }) => {
    const [{ isPlaying }, dispatch] = useDataLayerValue();
    const [myUrl, setMyUrl] = useState(track?.preview_url);
   
      
    // Refs 
    const audio = useRef(new Audio(myUrl));

    useEffect(()=>{
        if(!isPlaying){
            audio.current.pause();
        }else{
            audio.current.play();
            // console.log(myUrl);
        }
        // dispatch({
        //     type: "SET_PLAY_STATUS",
        //     isPlaying : false
        // });
    }, [isPlaying]);

    function onSelectPlay(){
        setMyUrl(track?.preview_url)
       if(myUrl){
            console.log(track?.preview_url);
            if(!isPlaying){
                dispatch({
                    type: "SET_PLAY_STATUS",
                    isPlaying : true
                });

            }else{
                dispatch({
                    type: "SET_PLAY_STATUS",
                    isPlaying : false
                });

            }
       }
       

    }

  
    function milliTomins(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
    // const no_ = track.indexOf([0]);
  
    return ( 
    
        <div className="song__row">
            <div className='table__no'>{index}</div>
            <div className='title'>
                <img src={track?.album?.images?.[2]?.url} alt="" />
                <div className="song__info">
                    <h3  onClick={()=>{ onSelectPlay()}}>{track?.name} </h3>
                    <p> {track?.artists.map((artist) =>(
                        artist?.name
                        )).join(", ")}
                    </p>
                </div>
            </div>
            <div className='album'>{(track?.album?.name === "=") ?  (track?.name) : (track?.album?.name) }</div>
            {/* <div className='date___added'>DATE ADDED</div> */}
            <div className='time'>{milliTomins(track?.duration_ms)}</div>
        </div>

     );
}
// export const data = { isPlaying};
export default SongRow;