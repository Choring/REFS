import { Player } from "./components/Player"
import { Header } from "./components/Layout/Header"
import { TimerChallenge } from "./components/TimerChallenge"
function App() {

  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <TimerChallenge title="쉬움" targetTime={1} />
        <TimerChallenge title="보통" targetTime={5} />
        <TimerChallenge title="어려움" targetTime={10} />
        <TimerChallenge title="매우 어려움" targetTime={15} />
      </div>
    </>
  )
}

export default App
