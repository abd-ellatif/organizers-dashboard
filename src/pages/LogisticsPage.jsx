import Logisticsmenu from "../components/Logisticsmenu";
import OrganizersSection from "../components/OrganizersSection";
import NavigationBar from "../components/NavigationBar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LogisticsDashboardSection from "../components/LogisticsDashboardSection";
import SettingsPanel from "../components/SettingsPanel"





export default function LogisticsPage(props){
    return(
        <div>

        <NavigationBar type='Logistics'></NavigationBar>
   <div className="grid grid-cols-5">
       <div className="col-span-1">
           <Logisticsmenu></Logisticsmenu>
       </div>
       <div className="col-span-4">
           <Routes>
               <Route path="/" element={<LogisticsDashboardSection></LogisticsDashboardSection>}></Route>
               <Route path='/organizers' element={<OrganizersSection></OrganizersSection>}></Route>
               <Route path='/settings' element={<SettingsPanel></SettingsPanel>}></Route>
           </Routes>
       </div>
       
   </div>

       </div>
    );
        
    
}