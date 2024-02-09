import { Link } from "react-scroll";
import "../App.css";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="banner cs-style1 pl-9" id="home">

      {/* {css shapes} */}

      <div className="cs_shape_1"></div>
      <div className="cs_shape_1"></div>
      <div className="cs_shape_1"></div>

      {/* {banner  Content} */}
      <div className="lg:text-8xl md:w-2/3 sm:text-6xl  text-5xl text-white font-bold lg:leading-snug sm:leading-snug leading-snug ">
        Creativity in our Blood


        {/* BAnner Btn and text */}
        <div className="text-white text-lg flex md:flex-row  flex-col-reverse md:items-center items-start justify-between gap-8">
          <div>
            <a
              href=""
              className=" flex items-center gap-2 font-semibold hover:text-orange transition-all  duration-300 ease-in pl-9"
            >
              <span>Get a Quote</span>
              <BsArrowRight />
            </a>
          </div>
          <div className="md:w-1/2">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              corrupti quo. Laboriosam!
            </p>
          </div>
        </div>

          {/* Scrool arrow to service section */}
          <Link to="services" smooth={true} className="cs_down_btn md:mt-20 mt-8"></Link>

      



      </div>
    </div>
  );
};

export default Hero;
