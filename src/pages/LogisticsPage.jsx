import Logisticsmenu from "../components/Logisticsmenu";




export default function LogisticsPage(props){
    return(<div className="grid grid-cols-5">
        <div className="col-span-1">
            <Logisticsmenu></Logisticsmenu>
        </div>
        <div className="col-span-4">
        </div>
        
    </div>);
}