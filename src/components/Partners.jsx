import MovingText from "./MovingText"
import {logo} from "../assets/index"

const Partners = () => {
  return (
    <div>
        <MovingText/>

        {/* Company Logos */}
        <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center gap-8  lg:px-24">
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />
          <img src={logo} alt="" />

        </div>
        <div className="h-20"></div>
    </div>
  )
}

export default Partners