
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import introJs from 'intro.js';
import 'intro.js/introjs.css';
import { useEffect } from 'react';
function App() {

  useEffect(()=>{
    introJs()
    .setOptions({
      steps:[
         {   element:"#app-name",
             intro:"Hello Guvi Sales APP!"
         },
         {
            element:"#dashboard",
            intro:"This is dashboard "
         },
         {
            element:"#search-item",
            intro:"search your data..."
         },
         {
           element:"#bell-icon",
           intro:"Notification details"
         },
         {
          element:"#customer",
          intro:"Enter customer details"
        },
        {
          element:"#invoice-id",
          intro:"Enter Invoice id"
        },
        {
          element:"#start-date",
          intro:"Enter start date"
        },
        {
          element:"#end-date",
          intro:"Enter end date"
        },
        {
          element:'#customer-details',
          intro:"cutomer details"
        },
        {
          element:"#help-item",
          intro:"This is help page"
        }

      ]
    })
    .start()
  },[])

 
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
