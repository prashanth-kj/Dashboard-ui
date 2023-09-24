
import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/sidebar'

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
