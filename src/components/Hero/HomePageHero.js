import "./HomePageHero.scss";
import Video from "../../assets/videos/homehero.mp4";
const HomePageHero = () => {
  return (
    <>
      <div className="heroContainer">
          <video src={`${Video}`} autoPlay loop muted></video>
          <div className="heroButtonContainer">
            
          </div>
      </div>
    </>
  );
};

export default HomePageHero;
