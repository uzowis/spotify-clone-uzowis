import { FavoriteRounded, MoreHoriz, PlayCircleFilled, Timer } from '@material-ui/icons';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './../../Styles/Body/Body.css';
import { useDataLayerValue } from '../DataLayer';
import Header from '../Header/Header';
import SongRow from './SongRow';


const Body = ({spotify}) => {
    const [{ isPlaying }, dispatch] = useDataLayerValue();
    const { playlistId } = useParams();
    const [playlist, setPlaylist] = useState('');

    useEffect(()=> {
        // Get the selected playlist and set it to the current playlist
        spotify.getPlaylist(`${playlistId}`).then((_playlist) => {
            setPlaylist(_playlist);
            console.log(_playlist);
        })
    }, [playlistId]);

    

    const [trackIndex, setTrackIndex] = useState(0);
    const [_isPlaying, _setIsPlaying] = useState(false);
    const [audioSrc, setAudioSrc] = useState('');

    // Refs
    const audioRef = useRef();
    useEffect(()=>{
        if(_isPlaying){
            audioRef.current.play();
            console.log(`I'm now Playing`);
        }else{
            audioRef.current.pause();
            console.log(`I'm now Paused`);
        }
        
    }, [_isPlaying, isPlaying]);
   
    const selectPlayPause = (indexNo) => {
        setTrackIndex(indexNo);
        setAudioSrc(playlist?.tracks?.items?.[indexNo]?.track?.preview_url)
        
        if(_isPlaying){
            //Pause Control
            _setIsPlaying(false);
        }else{
            // Play Control
            _setIsPlaying(true);
        }
    }
    useEffect(()=>{
        // _setIsPlaying(isPlaying);
        if(dispatch({
            type : "SET_PLAY_STATUS",
            isPlaying : _isPlaying
        })){
            console.log(`Was Changed from Body: ${isPlaying}`);
        }
        
    }, [_isPlaying]);
    
    return ( 
        <div className="body">
            <Header />
            {!playlist && 
                <div> 
                    <h1 style={{color: "white", fontWeight: "bold", display: "grid", placeItems: "center", marginTop : "auto", marginBottom: "40%" }}>Loading Songs...</h1>
                </div>
            }
            { playlist &&
                <div className="music_banner">
                <img src={playlist?.images?.[0]?.url} alt="" />
                <div className="music_info">
                    <p>PLAYLIST</p>
                    <h2>{playlist?.name}</h2>
                    <p>{playlist?.description}</p>
                    {playlist && <p><strong>{playlist?.owner?.display_name} . {playlist?.tracks?.total} songs </strong></p>}
                </div>
                
            </div>
            }

            { playlist && 
                <div className="play__icons">
                <PlayCircleFilled onClick={()=>{selectPlayPause(0)}} fontSize='large' className='play__icon'/>
                <FavoriteRounded />
                <MoreHoriz style={{color: "white"}}/>
            </div>
            }

            {/* Songs list table */}
          
            { playlist && 
            <>
            <div className="table__heading">
                <div className='table__no'>#</div>
                <div className='title'>TITLE</div>
                <div className='album'>ALBUM</div>
                <div><Timer /></div>
            </div>
            <hr />
            </>
            }

            <audio src={audioSrc} ref={audioRef}/>
            {playlist?.tracks?.items?.map((item, index) =>(
                item?.track?.preview_url &&
                <SongRow selectPlayPause={selectPlayPause} track={item?.track} key={index} index={index}/>
            ))}

        </div>
     );
}
 
export default Body;
