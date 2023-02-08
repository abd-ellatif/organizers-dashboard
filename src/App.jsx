import { useState } from 'react'
import LogisticsPage from './pages/LogisticsPage';
import RhPage from './pages/RhPage'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import NewAnnouncement from './components/NewAnnouncement';
import AddEvent from './components/AddEvent';


function App() {

  const [search,setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSearch =(e) => {
    alert("search Clicked");
    e.preventDefault();
  }




  return (
    <div className="App ">
      <AddEvent></AddEvent>
      <Router>
      <Routes>
        <Route path='/*' element={<LoginPage></LoginPage>}></Route>
        <Route path='/RH/*' element={<RhPage></RhPage>}></Route>
        <Route path='/Logistics/*' element={<LogisticsPage></LogisticsPage>}> </Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App
