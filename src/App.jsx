import Footer from "./component/Footer"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Lower from "./component/Lower"
import PopUp from "./component/PopUp"
import { useState } from "react"
function App() {

  const [ispoppedUp,setisPoppedUp] = useState(false)
  return (
    <div className="text-white" >
     <Header/>
     <Hero setisPoppedUp = {setisPoppedUp}/>
     <Lower/>
     <Footer />
     {ispoppedUp && <PopUp setIsPoppedUp={setisPoppedUp}/>}
    </div>
  )
}

export default App
