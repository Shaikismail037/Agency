import { BsArrowRight } from "react-icons/bs";

import {Database1} from "../assets/index"
import {Database2} from "../assets/index"



const Services = () => {
  return (
    <div className="text-white lg:px-24 px-4">
        <div className="h-36"></div>

        {/* Services Section */}

        <div className=" lg:flex lg:justify-between items-start" id="services">
            {/* Content */}
            <div className=" lg:w-1/3 space-y-5">
                <h4 className="text-gray-200 font-semibold text-2xl">What Can We Do</h4>
                <h2 className="text-5xl font-bold mb-5 leading-snug">Services we can help you with</h2>
                <a href="" className=" flex items-center gap-2 font-semibold hover:text-orange transition-all  duration-300 ease-in pl-9"><span>See All Services</span><BsArrowRight />
                </a>
            </div>
            
                {/* Services Card */}
                <div className="lg:w-2/3 my-8">
                    <div className="flex flex-wrap ">
                        <div className=" lg:w-1/4 hidden lg:block"></div>
                            <div className="service-card">
                                <a href="" className=" rounded-2xl block relative">
                                    <img src={Database2} alt="" className=" rounded-2xl" />
                                    <div className=" absolute bg-black left-0  top-0 opacity-50 h-full w-full rounded-2xl">
                                    </div>

                                    {/* Text */}
                                    <div className=" absolute top-1/3 left-4 right-0">
                                        <span className=" w-3 h-3 block rounded-full bg-orange mb-2"></span>
                                        <h2 className=" font-bold text-white text-2xl">Ui/Ux Design</h2>                                    
                                    </div>                    
                                </a>
                            </div>

                            <div className=" lg:w-1/4 hidden lg:block"></div>
                            <div className="service-card">
                                <a href="" className=" rounded-2xl block relative">
                                    <img src={Database1} alt="" className=" rounded-2xl"/>
                                    <div className=" absolute bg-black left-0  top-0 opacity-50 h-full w-full rounded-2xl">
                                    </div>

                                    {/* Text */}
                                    <div className=" absolute top-1/3 left-4 right-0">
                                        <span className=" w-3 h-3 block rounded-full bg-orange mb-2"></span>
                                        <h2 className=" font-bold text-white text-2xl">React</h2>                                    
                                    </div>                    
                                </a>
                            </div>

                            
                            <div className="service-card">
                                <a href="" className=" rounded-2xl block relative">
                                    <img src={Database1} alt="" className=" rounded-2xl"/>
                                    <div className=" absolute bg-black left-0  top-0 opacity-50 h-full w-full rounded-2xl">
                                    </div>

                                    {/* Text */}
                                    <div className=" absolute top-1/3 left-4 right-0">
                                        <span className=" w-3 h-3 block rounded-full bg-orange mb-2"></span>
                                        <h2 className=" font-bold text-white text-2xl">Wordpress</h2>                                    
                                    </div>                    
                                </a>
                            </div>

                            
                            <div className="service-card">
                                <a href="" className=" rounded-2xl block relative">
                                    <img src={Database1} alt="" className=" rounded-2xl"/>
                                    <div className=" absolute bg-black left-0  top-0 opacity-50 h-full w-full rounded-2xl">
                                    </div>

                                    {/* Text */}
                                    <div className=" absolute top-1/3 left-4 right-0">
                                        <span className=" w-3 h-3 block rounded-full bg-orange mb-2"></span>
                                        <h2 className=" font-bold text-white text-2xl">Database</h2>                                    
                                    </div>                    
                                </a>
                            </div>

      
                    </div>
                </div>

               
        </div>

        <div className="h-26"></div>
    </div>
  )
}

export default Services