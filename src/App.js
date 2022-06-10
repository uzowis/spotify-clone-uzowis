import { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Player from './Components/Player';
import {getTokenFromURL} from './Components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './Components/DataLayer';


function App() {
  const spotify = new SpotifyWebApi();
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() =>{
    const hash = getTokenFromURL();
    window.location.hash = '';
    const _token = hash.access_token;

    if(_token){
      // setToken(_token);
      dispatch({
        type : 'SET_TOKEN',
        token : _token

      });
      // Set access token
      spotify.setAccessToken(_token);
      

      // Get Current User
      spotify.getMe().then((_user) => {
        dispatch({
          type: 'SET_USER',
          user: _user,
        });
      });
      
      // Get User's playlist Data
       spotify.getUserPlaylists().then((_playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists : _playlists
        });
      });
      spotify.getAlbum()
      // Get Album Data
      spotify.getAlbums(['4yP0hdKOZPNshxUOjY0cZj']).then((_albums) => {
        dispatch({
          type: 'SET_ALBUMS',
          albums : _albums
        });
      });

    }

    
  }, []);

  return (
   

      <div className="App">
        
        {
          token ?
          <Player spotify={spotify} />
          :
          <Login />
        }

        

      </div>

  );
}

export default App;
