import { PauseCircleFilled, PlayCircleFilled, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown, VolumeUp } from '@material-ui/icons';
import {Slider, Grid } from '@material-ui/core';
import './../../Styles/Footer/Footer.css';
import { useDataLayerValue } from '../DataLayer';
import { useEffect, useState } from 'react';

const Footer = () => {
    const [{ playlists, isPlaying }, dispatch] = useDataLayerValue();
    console.log("Datalayer: ", isPlaying);
    // const isPlaying = data.isPlaying;
    const [_isPlaying, _setIsPlaying] = useState('false');
    console.log("From Footer: ", _isPlaying);

    useEffect(()=>{
        if(dispatch({
            type : "SET_PLAY_STATUS",
            isPlaying : _isPlaying
        })){
            console.log(`Was Changed from Footer: ${isPlaying}`);
        }
    }, [_isPlaying]);

    return ( 
        <div className="footer">
            <div className="footer_left">
                <img className='album_image' src={playlists?.items?.[1]?.images?.[0]?.url} alt="" />
                    <div className="song_info">
                        <h3>Song Title</h3>
                        <p>Album Title</p>
                </div>
            </div>

            <div className="footer_center">
                <div className="controls">
                    <Shuffle />
                    <SkipPrevious />
                    {
                    isPlaying 
                    ? 
                    <PauseCircleFilled onClick={()=>_setIsPlaying(!_isPlaying)} fontSize='large'/>
                    :
                    <PlayCircleFilled onClick={()=>_setIsPlaying(!_isPlaying)} fontSize='large'/>
                    }
                    
                    <SkipNext />
                    <Repeat />
                </div>
                    <Slider />
            </div>

            <div className="footer_right">
                <Grid container spacing={2} >
                    <Grid item >
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby='continous' />
                    </Grid>
                    <Grid item xs>
                        <VolumeUp />
                    </Grid>
                </Grid>
            </div>
        </div>
     );
}
 
export default Footer;