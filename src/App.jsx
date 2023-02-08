import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import LogisticsPage from './pages/LogisticsPage';
import RhPage from './pages/RhPage'


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
      <NavigationBar type={"Logistics"} handleSearch={handleSearch} handleSearchChange={handleSearchChange}></NavigationBar>
      <LogisticsPage></LogisticsPage>
    </div>
  )
}

export default App
