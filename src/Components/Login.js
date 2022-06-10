import "./../Styles/Login.css";
import loginUrl from "./spotify";

const Login = () => {
    return ( 
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="" className="login_logo" />
            
            <a href={loginUrl} className="login_button">LOGIN TO  SPOTIFY</a>
        </div>
     );
}
 
export default Login;