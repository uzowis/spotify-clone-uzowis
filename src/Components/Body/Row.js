import { Timer } from '@material-ui/icons';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import './../../Styles/Body/Row.css';
import SongRow from './SongRow';

const Row = ({title, playlists, recentlyPlayed}) => {
    function truncate (str, n){
        return str.length > n ? str.substr(0, n-1) + "..." : str;
    }
   const navigate = useNavigate();

   const selectPlaylist  = (id) =>{
    navigate(`/playlist/${id}`);
   }
  return (
    <div className="Row">
        
        { !recentlyPlayed &&
        <>
        <div className="row__heading">
            <h4>{title}</h4>
            <p>See All</p>
        </div>
    
        <div className="row__details">
            {
                playlists?.slice(0, 5)?.map((playlist, index)=>(
                    <div className="card__details" key={index} onClick={() =>{selectPlaylist(playlist?.id)}}>
                        {playlist?.images?.[0]?.url && <img src={playlist?.images?.[0]?.url} alt="playlist Image" />}
                        {playlist?.name && <h5>{truncate(playlist?.name, 15)}</h5>}
                        {playlist?.description && <p>{truncate(playlist?.description, 45)}</p>}
                        {playlist?.artists?.[0]?.name && <p>{playlist?.artists?.[0]?.name}</p>}
                    </div>
                ))
            }
            
            
        </div>
        </>
        }

        {recentlyPlayed && 
            <>
            <div className="row__heading">
                <h4>{title}</h4>
                <p>See All</p>
            </div>
        
            { playlists && 
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
            
            {
                playlists?.items?.map((item, index) =>(
                    <SongRow key={index} track={item.track} index={index} />
                ))
            }


            </>
        }
        
        
    </div>
  )
}

export default Row