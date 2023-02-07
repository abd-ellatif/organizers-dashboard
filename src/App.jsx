import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
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
      <NavigationBar type={"RH"} handleSearch={handleSearch} handleSearchChange={handleSearchChange}></NavigationBar>
      <RhPage></RhPage>
    </div>
  )
}

export default App
