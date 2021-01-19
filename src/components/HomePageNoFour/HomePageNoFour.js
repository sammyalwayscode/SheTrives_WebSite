import React from 'react'
import "./HomePageNoFour.css"
import EventsCards from "./EventsCards"
import ProjPixs1 from '../PI/Image/shecosdes.jpg'
import ProjPixs2 from '../PI/Image/feed.jpg'
import ProjPixs3 from '../PI/Image/3.jpg'
// import christm from '../Img/sfsf.png'

function HomePageNoFour() {
  return (
    <div className="masterEventsDiv">
      <div className="eventCardTextController">
        <div className="eventsTextDiv">
          <p className="eventSmall">EVENTS</p>
          <p className="eventBig">See Recent Works</p>
        </div>
        <div className="eventsCardDiv">
          <EventsCards
            eventPicture={ProjPixs1}
            eventTitle="She Codes Ajegunle In Their Tech Day"
            eventContent="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,"
          />

          <EventsCards
            eventPicture={ProjPixs2}
            eventTitle="Funding Of 250 Kids In Ajegunle"
            eventContent="the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
          />

          <EventsCards
            eventPicture={ProjPixs3}
            eventTitle="Celebration Of The International Day Of The Girl Child"
            eventContent="but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePageNoFour
