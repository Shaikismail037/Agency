

const MovingText = () => {
  return (
    <div className="relative overflow-hidden h-40 text-white">
      <div className="absolute inset-x-0 animation-scrooling-text">
        <span className=" text-transparent lg:px-4 py-2 lg:text-7xl text-4xl font-semibold uppercase text-stroke-3 text-white">Our Reputed World wide Partners</span>
      </div>
    </div>
    
  )
}

export default MovingText