import './../../Styles/Sidebar/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { AddToPhotos, AddToPhotosOutlined, Favorite, FavoriteBorder, FavoriteBorderRounded, FavoriteBorderSharp, LibraryAdd, LibraryMusicOutlined } from '@material-ui/icons';
import { useDataLayerValue } from '../DataLayer';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({spotify}) => {
    const [{ playlists}, dispatch] = useDataLayerValue();
    const navigate = useNavigate();

    function selectPlaylist(id){
        navigate(`/playlist/${id}`);

    }
   
    return ( 
        <div className="sidebar">
           <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="" className="sidebar_logo" />
        
        <div className="sidebarOptions">
            <SidebarOption path='/'  title="Home" Icon={HomeOutlinedIcon}/>
            <SidebarOption title="Search" Icon={SearchOutlinedIcon}/>
            <SidebarOption title="Library" Icon={LibraryMusicOutlined}/>
            <br />
            <SidebarOption title="Create Playlist" Icon={AddToPhotos}/>
            <SidebarOption title="Liked Songs" Icon={Favorite}/>

        </div>
        <div className="sidebar_title">
        <p><strong>PLAYLISTS</strong></p>
            <hr />

            {
                playlists?.items?.map((playlist, index) => (
                    <p className='playlists' key={playlist?.id}  onClick={()=>{selectPlaylist(playlist?.id)}}>{index+1}. {playlist?.name} </p>
                ))
            }
        </div>

        </div>
     );
}
 
export default Sidebar;