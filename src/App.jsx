import './App.css'
import Master from './components/layouts/Master'
import TaskList from './components/TaskList'
import Home from './components/views/Home'



function App() {

  return (
    <>
      <Master>
          <TaskList />
          <Home />
      </Master>
    </>
  )
}

export default App
