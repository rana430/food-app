import React from 'react'
import './Dashboard.css'
import Example from './Charts'
import logoadmin from './logoadmin.png'
import logomember from './logomember.png'
import  BarChart  from '../../component/chart/BarChart'

const Dashboard = () => {
  let MainBarNewCustomer='#FFB200'
  let BarNewCustomer='#FFF5CC'

  let MainBarOldCustomer='#34B53A'
  let BarOldCustomer='#D7FFD3'

  let MainBarComeBackCustomer='#4339F2'
  let BarComeBackCustomer='#DAD7FE'

  let precentage=70
  return (
    <div className='MainDashboard'>

      <div className='SecPage'>

        <div className='Revenues'>
          <div className='NameRevenues'><span>Revenues</span></div>

          <div className='CardsRevenues'>

            <div className='CardRevn-Today'>

              <div className='Today'><span>Today</span></div>
              <div className='AvgToday'><span className='AVG1'>$143,624</span> <span className='avg2'>+11.01</span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
  <path  clip-rule="evenodd" d="M6.95488 2.10777L12.5 0.5L11.1198 6.1061L9.39804 4.4532L6.62069 7.34627C6.52641 7.44448 6.39615 7.5 6.26 7.5C6.12385 7.5 5.99359 7.44448 5.89931 7.34627L3.86 5.22199L0.860694 8.34627C0.669457 8.54547 0.35294 8.55193 0.153735 8.36069C-0.0454709 8.16946 -0.0519304 7.85294 0.139307 7.65373L3.49931 4.15373C3.59359 4.05552 3.72385 4 3.86 4C3.99615 4 4.12641 4.05552 4.22069 4.15373L6.26 6.27801L8.67665 3.76067L6.95488 2.10777Z" fill="#1C1C1C"/>
</svg>
</div>
              <div className='LastDay'><span>Last Day</span></div>
              <div className='AvgLastDay'><span>$173,452</span></div>
            </div>

            <div className='CardRevn-Today'>

<div className='Today'><span>Month</span></div>
<div className='AvgToday'><span className='AVG1'>$143,624</span> <span className='avg2'>+11.01</span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
  <path  clip-rule="evenodd" d="M6.95488 2.10777L12.5 0.5L11.1198 6.1061L9.39804 4.4532L6.62069 7.34627C6.52641 7.44448 6.39615 7.5 6.26 7.5C6.12385 7.5 5.99359 7.44448 5.89931 7.34627L3.86 5.22199L0.860694 8.34627C0.669457 8.54547 0.35294 8.55193 0.153735 8.36069C-0.0454709 8.16946 -0.0519304 7.85294 0.139307 7.65373L3.49931 4.15373C3.59359 4.05552 3.72385 4 3.86 4C3.99615 4 4.12641 4.05552 4.22069 4.15373L6.26 6.27801L8.67665 3.76067L6.95488 2.10777Z" fill="#1C1C1C"/>
</svg> 
</div>
<div className='LastDay'><span>LastMonth</span></div>
<div className='AvgLastDay'><span>$173,452</span></div>
            </div>

            <div className='CardRevn-Today'>

<div className='Today'><span>Year</span></div>
<div className='AvgToday'><span className='AVG1'>$143,624</span> <span className='avg2'>+11.01</span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
  <path  clip-rule="evenodd" d="M6.95488 2.10777L12.5 0.5L11.1198 6.1061L9.39804 4.4532L6.62069 7.34627C6.52641 7.44448 6.39615 7.5 6.26 7.5C6.12385 7.5 5.99359 7.44448 5.89931 7.34627L3.86 5.22199L0.860694 8.34627C0.669457 8.54547 0.35294 8.55193 0.153735 8.36069C-0.0454709 8.16946 -0.0519304 7.85294 0.139307 7.65373L3.49931 4.15373C3.59359 4.05552 3.72385 4 3.86 4C3.99615 4 4.12641 4.05552 4.22069 4.15373L6.26 6.27801L8.67665 3.76067L6.95488 2.10777Z" fill="#1C1C1C"/>
</svg>
 </div>
<div className='LastDay'><span>LastYear</span></div>
<div className='AvgLastDay'><span>$173,452</span></div>
            </div>

          </div>

        </div>

        <div className='Bestseller'>

           <div className="FilterBestSeller">

             <div className="NameBestSeller"><span>Best Seller</span></div>

             <div className='FilterColor'>

              <div className='Blue'>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <path  clip-rule="evenodd" d="M8.5 16C12.9183 16 16.5 12.4183 16.5 8C16.5 3.58172 12.9183 0 8.5 0C4.08172 0 0.5 3.58172 0.5 8C0.5 12.4183 4.08172 16 8.5 16Z" fill="#4339F2"/>
              </svg>  <span>Pizza</span>
              </div>

              <div className='Yellow'>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path clip-rule="evenodd" d="M8.5 16C12.9183 16 16.5 12.4183 16.5 8C16.5 3.58172 12.9183 0 8.5 0C4.08172 0 0.5 3.58172 0.5 8C0.5 12.4183 4.08172 16 8.5 16Z" fill="#FFB200"/>
</svg><span>Fish</span>
              </div>

              <div className='Green'>
                
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path  clip-rule="evenodd" d="M8.5 16C12.9183 16 16.5 12.4183 16.5 8C16.5 3.58172 12.9183 0 8.5 0C4.08172 0 0.5 3.58172 0.5 8C0.5 12.4183 4.08172 16 8.5 16Z" fill="#34B53A"/>
</svg><span>Meat</span>
              </div>
           


             </div>

             <div className='FilterButton'>
              <button className='filterbtn'>Day</button>
              <button className='filterbtn'>Month</button>
              <button className='filterbtn'>Year</button>

             </div>

           </div>
           <div className='PannelChart'>
             <Example/>
           </div>

        </div>

        <div className='Specail'>

          <div className='CustomersState'>
            <div className='Line-1'>
              <span>Customers state</span>
            </div>
            <div className='Line-2'>
              <div className='TypeCustomer'> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path clip-rule="evenodd" d="M7 14.5093C10.866 14.5093 14 11.3753 14 7.50928C14 3.64328 10.866 0.509277 7 0.509277C3.13401 0.509277 0 3.64328 0 7.50928C0 11.3753 3.13401 14.5093 7 14.5093Z" fill="#FFB200"/>
</svg>
<span>New costumers</span></div>
              <div className='TypeCustomer'> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path clip-rule="evenodd" d="M7 14.5093C10.866 14.5093 14 11.3753 14 7.50928C14 3.64328 10.866 0.509277 7 0.509277C3.13401 0.509277 0 3.64328 0 7.50928C0 11.3753 3.13401 14.5093 7 14.5093Z" fill="#34B53A"/>
</svg><span>old costumers</span></div>
              <div className='TypeCustomer'> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path  clip-rule="evenodd" d="M7 14.5093C10.866 14.5093 14 11.3753 14 7.50928C14 3.64328 10.866 0.509277 7 0.509277C3.13401 0.509277 0 3.64328 0 7.50928C0 11.3753 3.13401 14.5093 7 14.5093Z" fill="#4339F2"/>
</svg><span>Come Back costumers</span></div>

              
            </div>
            
            <div className='Line-3'>
              <div className='StaticsTypeCustomer'>

                <div className='NameAndNumber'>
                  <span className='NewTypeCustomer'>New costumers</span>
                  <span className='NumberNewTypeCustomer'>65,376</span>
                </div>
                
                <div className="order-precentage">
          <div className="precentage-container" style={{backgroundColor:`${BarNewCustomer}`}}>
            <div className="precentage-bar" style={{width:`${precentage}%` ,backgroundColor:`${MainBarNewCustomer}`}}></div>
          </div>
                 </div>
        

              </div>

              <div className='StaticsTypeCustomer'>

                <div className='NameAndNumber'>
                  <span className='OldTypeCustomer'>Old costumers</span>
                  <span className='NumberOldTypeCustomer'>65,376</span>
                </div>
                <div className="order-precentage">
          <div className="precentage-container" style={{backgroundColor:`${BarOldCustomer}`}}>
            <div className="precentage-bar" style={{width:`${precentage}%` ,backgroundColor:`${MainBarOldCustomer}`}}></div>
          </div>
                 </div>

              </div>

              <div className='StaticsTypeCustomer'>

                <div className='NameAndNumber'>
                  <span className='ComeBackTypeCustomer'>Come Back costumers</span>
                  <span className='NumberComeBackTypeCustomer'>65,376</span>
                </div>
                <div className="order-precentage">
          <div className="precentage-container" style={{backgroundColor:`${BarComeBackCustomer}`}}>
            <div className="precentage-bar" style={{width:`${precentage}%` ,backgroundColor:`${MainBarComeBackCustomer}`}}></div>
          </div>
                 </div>

              </div>
            </div>

          </div>

          <div className='TeamAttendance'>

            <div className='Line-1T'>
              <span>TeamAttendance</span>
            </div>

            <div className='Line-2T'>
              <div className='LogoSec'>
                <div className='LogoAdmin'><img src={logoadmin} alt='admin-mym'></img></div>
              </div>
              <div className='DesSec'>
                <div className='TotalAdmin'><span>Total Admin</span></div>
                <div className='NumberOfAdmin'><span>6 of 9 </span></div>
              </div>
            </div>

            <div className='Line-3T'>
              <div className='LogoSec'>
                <div className='LogoMember'><img src={logomember} alt='member-mym'></img></div>
              </div>
              <div className='DesSec'>
                <div className='TeamMember'><span>Team Member</span></div>
                <div className='NumberOfTeam'><span>9 of 15</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Dashboard