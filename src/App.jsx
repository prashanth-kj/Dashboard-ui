
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
 
  return (
    <>
      <div id='Wrapper'>
               
        <div className="container-fluid">
          
              <div className="row ">
                  <Sidebar/>
                  <Dashboard/>

              </div>
        </div>

      </div>
    </>
  )
}

export default App
