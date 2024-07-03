import "./Theme.css"
import Title from "./Title"
import img from "./gloryOfVedicIndia.jpg"
export default function Theme() {
    return (
        <div className="theme">
            <div className="part-1">
                <div className="up-title">
                    Theme
                </div>
                <div className="title">
                    <Title title={"Kab Honge Kamyab ?"} size={"30px"} />
                </div>
                <div className="para">
                    Once titled Golden Bird, Vishwa Guru, India has now come way ahead only to
                    realize that the paradise is lost. The countless glories that embellished
                    Indian historical era are now a part of textbooks only. Let us become
                    instrumental in excavating and reviving the lost grandeur of our ancient
                    tradition. Let us discover, understand, preserve and promote the glories
                    of Vedic Culture.
                </div>
            </div>
            <div className="part-2">
                <div className="img-glory">
                
                </div>
            </div>
        </div>
    )
}