
import './App.css'
import  Sidebar from "src\components\Sidebar.jsx"
import  Dashboard from "src\components\Dashboard.jsx"

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
