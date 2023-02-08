import DashboardSeciton from "../components/RhDashboardSection";
import MembersSection from "../components/MembersSection";
import NewMember from "../components/NewMember";
import OrganizersSection from "../components/OrganizersSection";
import RHmenu from "../components/RHmenu";
import SettingsPanel from  "../components/SettingsPanel";

export default function RhPage(props){
    return(<div className="grid grid-cols-5">
        <div className="col-span-1">
            <RHmenu></RHmenu>
        </div>
        <div className="col-span-4">
        </div>
        
    </div>);
}