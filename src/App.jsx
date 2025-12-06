import './App.css'
import Master from './components/layouts/Master'
import TaskList from './components/TaskList'
import TicTacToe from './components/TicTacToe'



function App() {

  return (
    <>
      <Master>
          <TicTacToe />
          <TaskList />
          {/* <Home /> */}
      </Master>
    </>
  )
}

export default App
