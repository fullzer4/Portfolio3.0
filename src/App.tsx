import Intro from "./components/intro"
import Navbar from "./components/navbar"
import "./scss/index.scss"

export default function App() {

  return (
      <div className="App">
        <Intro/>
        <div className="Page">
          <Navbar/>
          <div></div>
        </div>
      </div>
  )
}
