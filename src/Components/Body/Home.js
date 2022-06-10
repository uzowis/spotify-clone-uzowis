import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from './../DataLayer';
import Header from './../Header/Header';
import "./../../Styles/Body/Home.css";
import Row from './Row';

const Home = ({spotify}) => {
    const [{user} ] = useDataLayerValue();
    const [featured_playlists, setFeaturedPlaylists] = useState([]);
    const [newReleases, setNewReleases] = useState([]);
    const [recentTracks, setRecentTracks] = useState([]);
    

    useEffect(()=>{
        spotify.getFeaturedPlaylists().then(playlist =>{
            setFeaturedPlaylists(playlist);
            console.log(playlist);
        });
        spotify.getNewReleases().then(newReleases =>{
            console.log(newReleases?.albums?.items);
            setNewReleases(newReleases);
            
        });
        spotify.getMyRecentlyPlayedTracks().then(recentTracks =>{
            setRecentTracks(recentTracks);
            console.log(recentTracks?.items);
        });
    },[]);
    
    

  return (

        <div className="Home">
            <Header searchBar={true}/>
            {!featured_playlists?.playlists?.items && 
                <div> 
                    <h1 style={{color: "white", fontWeight: "bold", display: "grid", placeItems: "center", marginTop : "auto", marginBottom : "40%" }}>Loading Songs...</h1>
                </div>
            }
            {featured_playlists?.playlists?.items && <Row title="Featured Playlist" playlists={featured_playlists?.playlists?.items}/>}
            {newReleases?.albums?.items && <Row title={`New Releases`} playlists={newReleases?.albums?.items} />}
            {recentTracks?.items && <Row title={`Recently Played`} recentlyPlayed  playlists={recentTracks} />}
        </div>
  )

}

export default Home