import "./Action.css"
import Title from "./Title"
import DoneIcon from '@mui/icons-material/Done';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useNavigate } from 'react-router-dom';
export default function Action(){
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/register');
      };
    return(
        <div className="action-container">
            <div className="plate-1">
                <div className="action-title">
                Grab your Ticket now
                </div>
                <div className="action-desc-1">
                    Don't Miss This Wonderful Oppurtinity
                </div>
                <div className="action-desc-2">
                    Hurry up ! Limited seats left 
                </div>
            </div>
            <div className="plate-2">
                <div className="plate-2-head">
                    Full Access
                </div>
                <div className="price">
                    ₹200/-
                </div>
                <ul className="features">
                    <li>
                    Seminar</li>
                    <li>Debate</li>
                    <li>Mantra Rock Show</li>
                    <li>Theatre</li>
                    <li>Dinner Buffet</li>
                </ul>
                    <button className="btn-purchase" onClick={handleRedirect}>Purchase Ticket</button>
            </div>
        </div>
    )
}
