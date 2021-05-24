
import './App.css';
import Address from "./Component/Address.js";
import ProfilePhoto from "./Component/ProfilePhoto.js";
import FullName from "./Component/FullName.js";

function App() {
  return (
    <div className="App">
       <div className="el">
      <h1>MON PROFILE </h1>
      <h2>Check Components</h2>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      </div>
    
    </div>
  );
}

export default App;


