import motion from "framer-motion";
import Backdrop from "../assets/herobg.png";
import newBack from "../assets/bg-cover.avif";

const IntroductionSection = () => {
  return (
    <div
      className="h-screen w-screen mx-auto bg-cover"
      style={{ backgroundImage: `url(${Backdrop})` }}
    >
      <div className="">
        <h2>About me lorem ipsum </h2>
        <h3>links</h3>
      </div>
    </div>
  );
};

export default IntroductionSection;
