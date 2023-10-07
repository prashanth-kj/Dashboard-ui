import React from 'react'

function Sidebar() {
  return (
    <>
          <div className="col-lg-2 bg-white">
                <div className="container">
                      <nav className="navbar navbar-expand-lg d-flex flex-wrap">
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavBar">
                           <span className="navbar-toggler-icon"></span>
                      </button>

                      
                        <div className="navbar-brand mt-4 ">
                             <span className='navhead'> <h3 style={{color:"#0B63F8"}}>Guvi Sales</h3></span>
                        </div>
                       
                        <div className="collapse navbar-collapse" id='myNavBar'>
                            <ul className="nav nav-pills flex-column" >
                              
                                <li className='nav-item active'>
                                    <img src="/Activeicon.svg" alt="activeicon"  className='active'/>
                                    <a href="javascript(void)"> 
                                       <img src='/dashboardicon.svg' alt="dashboardicon"  className="img-fluid"/>
                                        <span >Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                               
                                   <a href="javascript(void)"> 
                                      <img src="/labicon.svg" alt="labicon"  className="img-fluid"/>
                                       <span  className='nav1'>Lab Test</span>
                                   </a>
                               </li>
                               <li className="nav-item">
                                   <a href="javascript(void)"> 
                                       <img src="/appoinmenticon.svg" alt="AppointmentIcon"  className="img-fluid"/>
                                       <span className='nav1'>Appointment </span>
                                   </a>
                               </li>
                               <li className="nav-item">
                                   <a href="javascript(void)"> 
                                       <img src="/medicineordericon.svg" alt="MedicineOrderIcon"  className="img-fluid"/>
                                       <span className='nav1'>Medicine Order</span>
                                   </a>
                               </li>
                               <li className="nav-item">
                                   <a href="javascript(void)"> 
                                       <img src="/messageicon.svg" alt="MessageIcon"  className="img-fluid"/>
                                       <span className='nav1'>Message</span>
                                   </a>
                               </li>
                               <li className="nav-item">
                                   <a href="javascript(void)"> 
                                       <img src="/paymenticon.svg" alt="PaymentIcon"  className="img-fluid"/>
                                       <span className='nav1'>Payment</span>
                                   </a>
                               </li>
                               <li className="nav-item">
                                   <a href="javascript(void)"> 
                                       <img src="/settingsicon.svg" alt="SettingsIcon"  className="img-fluid"/>
                                       <span className='nav1'>Settings</span>
                                   </a>
                               </li>
   
                               <li className="nav-item help">
                                   <a href="javascript(void)"> 
                                       <img src="/helpicon.svg" alt="HelpIcon"  className="img-fluid"/>
                                       <span className='nav1'>Help</span>
                                   </a>
                               </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    </>
  )
}

export default Sidebar









