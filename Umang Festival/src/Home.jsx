import Title from "./Title"
import "./Home.css"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function Home(){
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/register');
      };
    return(
        <>

        <div className="video-bg">

        <video  autoPlay loop muted>
        <source src="https://res.cloudinary.com/dwneljbds/video/upload/v1718181670/Umang_is_back_AGAIN_howsthejosh_online-video-cutter.com_1_cmhxk6.mp4"/></video>

         </div>

         <div className="Home">
            <div className="title">

                <Title title={"Umang 2024"}/>
                
                </div>

            <div className="line-1">
                Festival of Joy And Enthusiasm
            </div>

            <div className="line-2">
                31 AUGUST 2024  / ISCKON GHAZIABAD / 3PM ONWARDS
            </div>

            <button className="btn-reg" onClick={handleRedirect}>Register Now</button>
        </div>

        </>
    )
}