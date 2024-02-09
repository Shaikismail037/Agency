import {Navbar,Hero,About,Services,Projects,Partners,Contact,Footer} from "./components/constants"

const App = () => {
  return (
    <>
    <div className="bg-dark">
     <Navbar />
     <Hero />
     <About />
     <Services />
     <Projects />
     <Partners/>
     <Contact />             
     <Footer />
    </div>
    
    </>
  )
}

export default App