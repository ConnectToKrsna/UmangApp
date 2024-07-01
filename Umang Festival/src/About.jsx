import Title from "./Title"
import "./About.css"
import img from "./umangPoster.jpeg"
export default function About() {
    return (
        <div className="about-container">
            <div className="about-1">
                <div className="title">
                    <Title title={"About the Fest"} size={"40px"}></Title>
                </div>
                <div className="des">
                    <p> UMANG is the thematic annual youth fest of IYF Ghaziabad
                        and is expected to be participated by 500+ youths. The
                        festival would project Rock music band,Quiz with exciting
                        prizes, Motivational talks by leading personalities,
                        Panel Discussion on current issues and full Dinner Buffet
                        for all the participants.It will be attended by several
                        institute directors, faculties,artists, and scholars
                        from all across Delhi/NCR.</p>
                </div>
            </div>
            <div className="about-2">
                <div className="details">
                    <div className="heading">
                        THEME
                    </div>
                    <div className="detail">
                        KAB HONGE KAMYAB ?
                    </div>
                    <div className="heading">
                        WHERE
                    </div>
                    <div className="detail">
                        <a href="https://www.google.com/maps/place/ISKCON+Temple,+Ghaziabad/@28.6825009,77.4484174,17.13z/data=!4m14!1m7!3m6!1s0x390cf199a672e86f:0x93b6a8443203ee20!2sISKCON+Temple,+Ghaziabad!8m2!3d28.6823722!4d77.4508191!16s%2Fg%2F1ptynny2v!3m5!1s0x390cf199a672e86f:0x93b6a8443203ee20!8m2!3d28.6823722!4d77.4508191!16s%2Fg%2F1ptynny2v?entry=ttu">
                            ISKCON GHAZIABAD
                        </a>
                    </div>
                    <div className="heading">
                        WHEN
                    </div>
                    <div className="detail">
                        31 AUGUST 2024
                    </div>
                </div>
                <div className="img">
                    <img src={img} alt="Umang Festival"/>
                </div>
            </div>
        // </div>
    )
}