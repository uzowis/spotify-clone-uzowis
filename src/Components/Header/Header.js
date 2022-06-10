import { SearchOutlined } from '@material-ui/icons';
import { useDataLayerValue } from '../DataLayer';
import './../../Styles/Header/Header.css';


const Header = ({ searchBar }) => {
    const [{ user }] = useDataLayerValue();
    return ( 
        <div className="header">
            {
            !searchBar &&            
            <div className="search_bar">
                <SearchOutlined  className='search_icon' />
                <input type="text" className="search" placeholder='Artists, songs, or podcasts...' />
            </div>

            }
            <div className={`profile_info ${searchBar && "home"}`}>
                <img src={user?.images?.[0]?.url} alt="profile_pic" />
                <p>{user?.display_name}</p>
            </div>

        </div>
     );
}
 
export default Header;