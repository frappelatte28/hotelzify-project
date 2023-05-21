import react from "react";
import "./card.css";
import room1 from "../../assets/room1.jpg";
export default function NewsFeedCard(props) {
  return (
    <div>
      <div className="card-container">
        <img className="w-100 pb-3" src={room1}></img>
        <div className="card-content p-3">
          <div className="row pb-2">
            <div className="col">{props.date}</div>
            <div className="col">{props.author}</div>
          </div>
          <h3 className="pb-3">{props.heading}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}
