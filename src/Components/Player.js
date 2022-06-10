import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import './../Styles/Player.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Body/Home";


const Player = ({spotify}) => {
    return ( 
       <Router>
            <div className="player">
                <div className="player_body">
                    <Sidebar spotify={spotify}/>
                    <Routes>
                        <Route path="/playlist/:playlistId" caseSensitive="false" element={<Body spotify={spotify}/>}/>
                        <Route path="/" caseSensitive="false" element={<Home spotify={spotify}/>}/>
                   

                    </Routes> 
                    
                </div>

                <Footer />
                    
            </div>
        </Router>
     );
}
 
export default Player;