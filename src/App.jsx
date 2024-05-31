import MainContainer from "./container/MainContainer";
import Lenis from "lenis";

function App() {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)


  return (
    <div>
      <MainContainer />
    </div>
  )
}

export default App
