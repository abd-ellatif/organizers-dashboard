import DashboardSeciton from "../components/RhDashboardSection";
import MembersSection from "../components/MembersSection";
import NewMember from "../components/NewMember";
import OrganizersSection from "../components/OrganizersSection";
import RHmenu from "../components/RHmenu";
import SettingsPanel from  "../components/SettingsPanel";
import NavigationBar from "../components/NavigationBar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import RhDashboardSection from "../components/RhDashboardSection";

export default function RhPage(props){

    return(
        <div>

         <NavigationBar type='RH'></NavigationBar>
    <div className="grid grid-cols-5">
        <div className="col-span-1">
            <RHmenu></RHmenu>
        </div>
        <div className="col-span-4">
            <Routes>
                <Route path="/" element={<RhDashboardSection></RhDashboardSection>}></Route>
                <Route path='/Members' element={<MembersSection></MembersSection>}></Route>
                <Route path='/settings' element={<SettingsPanel></SettingsPanel>}></Route>
            </Routes>
        </div>
        
    </div>

        </div>
   );
}