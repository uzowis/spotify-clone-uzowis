import { useNavigate } from 'react-router';
import './../../Styles/Sidebar/SidebarOption.css';

const SidebarOption = ({title, Icon, path}) => {
    const navigate = useNavigate();

    function selectHome(path){
        if(path){
            navigate(`${path}`);
        }else{
            navigate('#');
        }
        
    }
    return ( 
        <div className="sidebarOption" onClick={()=>selectHome(path)}>
            {Icon && <Icon className="sidebarOption_icon" />}
            {Icon ? <p>{title}</p> : <h5>{title}</h5>}
        </div>
     );
}
 
export default SidebarOption;