import { PauseCircleFilled, PlayCircleFilled, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown, VolumeUp } from '@material-ui/icons';
import {Slider, Grid } from '@material-ui/core';
import './../../Styles/Footer/Footer.css';
import { useDataLayerValue } from '../DataLayer';
import { useEffect } from 'react';

const Footer = () => {
    const [{ playlists, isPlaying }, dispatch] = useDataLayerValue();
    console.log(isPlaying);
    // const isPlaying = data.isPlaying;
    function playPauseClick(){
        if(!isPlaying){
            dispatch({
                type: 'SET_PlAY_STATUS',
                isPlaying : true
            });
        }else{
            dispatch({
                type: 'SET_PlAY_STATUS',
                isPlaying : false
            });
        }
    }
    useEffect(()=>{
        console.log(isPlaying);
    }, [isPlaying]);

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
                    <PauseCircleFilled onClick={()=>{playPauseClick()}} fontSize='large'/>
                    :
                    <PlayCircleFilled onClick={()=>{playPauseClick()}} fontSize='large'/>
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