
import { Link } from "react-router-dom";

function Banner(props) {

    // eslint-disable-next-line react/prop-types
    const images = props.images;
    // eslint-disable-next-line react/prop-types
    const text = props.text;
    // eslint-disable-next-line react/prop-types
    const buttonText = props.buttonText;
    // eslint-disable-next-line react/prop-types
    const buttonPath = props.buttonPath;




  return (
    <div>
      <div
        className="hero min-h-screen w-screen"
        style={{
          backgroundImage:
            `url(${images})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[50rem]">
            <h1 className="mb-5 sm:text-5xl text-2xl font-bold">
              {text}
            </h1>
            <Link to={buttonPath} className="btn btn-accent">{buttonText}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
