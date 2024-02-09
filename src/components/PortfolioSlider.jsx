import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-scroll";

import {data} from "../components/constants"


const PortfolioSlider = () => {
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
      return (
        <Slider {...settings} className=" lg:max-64">
                {
                    data.map((item,index)=> <Link key={index} to="/" className="cs-portfolio cs-bg relative"  >
                        <div className="absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl"></div>
                        <div>
                            <img src={item.image} alt="Proje" />
                        </div>
                        <div className=" absolute top-0 left-0 hover:bg-orange/80 w-full h-full flex items-center justify-center rounded-2xl cursor-pointer  ">
                            <div className="text-white text-center">
                                <h2 className="text-2x1 font-semibold mb-1">{item.title}</h2>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    </Link>)
                }

                
        </Slider>
      );
    }

export default PortfolioSlider