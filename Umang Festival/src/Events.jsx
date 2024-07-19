import Title from "./Title"
import "./Events.css"
export default function Events(){
    return (
        <>
        <div className="event-container">
            <div className="event-heading">
                <Title title={"EVENTS"} size={"32px"}/>
            </div>
            <div className="event-cards">
                {/* <div className="card-slate"> */}
                <div className="event-card-1">
                <div className="desc">
                    <div className="card-heading">
                        <Title title={"Enlightening Talk"} size={"20px"}></Title>
                    </div>
                    <div className="card-desc">
                        Hg Rambhadra Prabhu
                    </div>
                    </div>
                </div>
                <div className="event-card-2">
                <div className="desc">
                    <div className="card-heading">
                        <Title title={"Theatrical Performance"} size={"20px"}></Title>
                    </div>
{/*                     <div className="card-desc">
                        Hg Rambhadra Prabhu
                    </div> */}
                    </div>
                </div>
                {/* </div> */}
            </div>
            {/* cards-2 */}
            <div className="event-cards">
                {/* <div className="card-slate"> */}
                <div className="event-card-3">
                <div className="desc">
                    <div className="card-3-heading">
                        Panel Discussion
                    </div>
                    <div className="card-3-desc">
                        Discussion on Higher Philosophies
                    </div>
                    </div>
                </div>
                <div className="event-card-4">
                <div className="desc">
                    <div className="card-heading">
                <Title title={"Mantra Rock Dance"} size={"20px"}/>
                    </div>
                    <div className="card-desc">
                        Let's Hands up in Soothing Waves
                    </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            {/* cards-3 */}
            <div className="event-cards">
                {/* <div className="card-slate"> */}
                <div className="event-card-5">
                <div className="desc">
                    <div className="card-5-heading">
                        <Title title={"Dinner Buffet"} size={"20px"}></Title>
                    </div>
                    <div className="card-desc">
                        Sumptious Food
                    </div>
                    </div>
                </div>
                <div className="event-card-6">
                <div className="desc">
                    <div className="card-heading">
                        <Title title={"Lots of Joy,Fun and Dance"} size={"20px"}></Title>
                    </div>
                    <div className="card-desc">
                        Enjoying.....
                    </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
        </>
    )
}
