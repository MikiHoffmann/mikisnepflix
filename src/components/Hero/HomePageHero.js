import "./HomePageHero.scss";
import IMG from "../../assets/images/06.jpg";
const HomePageHero = () => {
  return (
    <>
      <div className="heroContainer">
          <img src={`${IMG}`} alt='hero'/>
      </div>
    </>
  );
};

export default HomePageHero;
