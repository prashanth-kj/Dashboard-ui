import React from 'react'
import Table from 'react-bootstrap/Table';

function Dashboard() {
        
        let TableData=[
            {  
                invoiceId: '#AHGA68',
                date:'23/09/2022',
                customer:'Jacob Marcus',
                payableAmount:'$100',
                paidAmount:'$000',
                due:'$000'
            },
            {  
                invoiceId: '#AHGA68',
                date:'23/09/2022',
                customer:'Jacob Marcus',
                payableAmount:'$100',
                paidAmount:'$000',
                due:'$000'
            },
            {  
                invoiceId: '#AHGA68',
                date:'23/09/2022',
                customer:'Jacob Marcus',
                payableAmount:'$100',
                paidAmount:'$000',
                due:'$000'
            },
            {  
                invoiceId: '#AHGA68',
                date:'23/09/2022',
                customer:'Jacob Marcus',
                payableAmount:'$100',
                paidAmount:'$000',
                due:'$000'
            },
            {  
                invoiceId: '#AHGA68',
                date:'23/09/2022',
                customer:'Jacob Marcus',
                payableAmount:'$100',
                paidAmount:'$000',
                due:'$000'
            },
            {  
                invoiceId: '#AHGA68',
                date:'23/09/2022',
                customer:'Jacob Marcus',
                payableAmount:'$100',
                paidAmount:'$000',
                due:'$000'
            },
            {  
                invoiceId: '#AHGA68',
                date:'23/09/2022',
                customer:'Jacob Marcus',
                payableAmount:'$100',
                paidAmount:'$000',
                due:'$000'
            },
            {  
                invoiceId: '#AHGA68',
                date:'23/09/2022',
                customer:'Jacob Marcus',
                payableAmount:'$100',
                paidAmount:'$000',
                due:'$000'
            }
            
        ]
        
  return (
    <> 
        <div className="col-lg-10 bg-body-tertiary">
                    <div className="container ">
                        <div className=" row mt-5">
                            <div className="input-group mb-3 " >
                                <img className="input-group-text bg-white"  src="/searchicon.svg" alt="search icon"/>
                                <div className="form-floating" id='search-item'>
                                  <input type="text" className="form-control w-50"  id="floatingInputGroup1" placeholder="Username"/>
                                  <label htmlFor="floatingInputGroup1">Search</label>
                                </div>
                                 <img src="/notificationicon.svg" alt="Notification Icon" id='bell-icon'/>
                              </div>
                         </div> 
                        <div className="row mt-3">
                       
                                <h4>Sales Information</h4>
                               
                                <div className="sales-input d-flex flex-wrap justify-content-between mt-4">
                                   <label htmlFor="Customer" className='h6' id='customer'>Customer  <input type="text" className="form-control  mt-3 " name="Customer" id="Customer" placeholder="Enter Customer name"/> </label>
                                   <label htmlFor="Invoice"  className='h6' id='invoice-id'>Invoice ID <input type="text" className="form-control  mt-3" name="Invoice" id="Invoice" placeholder="Enter Invoice ID"/></label>
                                   <label htmlFor="Startdate" className='h6' id='start-date'>Start Date <input type="text" className="form-control  mt-3 " name="Startdate" id="Startdate" placeholder="Start Date"/></label>
                                   <label htmlFor="Enddate"  className='h6' id='end-date'>End Date <input type="text" className="form-control  mt-3 " name="Enddate" id="Enddate" placeholder="End Date"/></label>
                                   
                                </div>       
                        </div>                       
                         <div className='row mt-5' id='customer-details'>
                               <div className='col-md-10 me-4'>
                               <Table   hover  responsive="md" >
                                            <thead>
                                                <tr>
                                                <th className='text-center'><img src="/minus-square-icon.svg" alt="squreicon"  /></th>
                                                <th>Invoice ID</th>
                                                <th>Date</th>
                                                <th>Customer</th>
                                                <th>Payable Amount</th>
                                                <th>Paid Amount</th>
                                                <th>Due</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    TableData.map((e,i)=>{
                                                        return  <tr key={i}>
                                                                <td className='text-center'><img src="/minus-square-icon.svg" alt="squreicon" /></td>
                                                                <td style={{color:"#0B63F8"}}>{e.invoiceId}</td>
                                                                <td>{e.date}</td>
                                                                <td>{e.customer}</td>
                                                                <td>{e.payableAmount}</td>
                                                                <td>{e.paidAmount}</td>
                                                                <td>{e.due}</td>
                                                        </tr>
                                                    })
                                                }
                                                
                                            </tbody>
                               </Table>
                               </div>
                         </div>

                         
                    </div>
               </div>
       
     </>
  )
}

export default Dashboard






