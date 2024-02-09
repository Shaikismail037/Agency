
const About = () => {
  return (
    <div className=" text-white md:mt-[100px] -mt-10 bg-gradient-to-tr from-[#16166] to-[080808] lg:mx-24 md:py-20 mx-4 py-12 md:px-16 rounded-xl px-6 z-50 flex flex-col md:flex-row justify-between md:items-center relative">
            <div className="background_aboutUS bg-center bg-no-repeat h-full w-full absolute top-0 left-0 opacity-15 rounded-2xl">

            </div>
            {/* left side text */}
            <div className="md:w-2/5" id="about">
              <h2 className="text-5xl font-bold mb-5 ">Our Fun fact</h2>
              <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae deserunt repellendus quaerat.</p>
            </div>

            {/* right side */}
            <div className="  md:w-3/5">
              <div className=" grid sm:grid-cols-2 grid-cols-1 gap-8">
                  <div className="flex h-auto items-center gap-3">
                        <h4 className=" md:text-5xl text-lg font-semibold ">40K</h4>
                        <div>
                          <span className=" text-orange font-bold text-lg">+</span>
                          <p className="mb-2 text-sm leading-tight text-gray-100">Global Happy Client</p>
                        </div>
                  </div>
                  <div className="flex h-auto items-center gap-3">
                        <h4 className=" md:text-5xl text-lg font-semibold ">40K</h4>
                        <div>
                          <span className=" text-orange font-bold text-lg">+</span>
                          <p className="mb-2 text-sm leading-tight text-gray-100">Global Happy Client</p>
                        </div>
                  </div>
                  <div className="flex h-auto items-center gap-3">
                        <h4 className=" md:text-5xl text-lg font-semibold ">40K</h4>
                        <div>
                          <span className=" text-orange font-bold text-lg">+</span>
                          <p className="mb-2 text-sm leading-tight text-gray-100">Global Happy Client</p>
                        </div>
                  </div>
                  <div className="flex h-auto items-center gap-3">
                        <h4 className=" md:text-5xl text-lg font-semibold ">40K</h4>
                        <div>
                          <span className=" text-orange font-bold text-lg">+</span>
                          <p className="mb-2 text-sm leading-tight text-gray-100">Global Happy Client</p>
                        </div>
                  </div>
              </div>
            </div>

     </div>
  )
}

export default About