import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Component/SignIn';
import UserDashboard from './Dashboard/UserDashboard';

function App() {
  return (
    <div className="App">
      {/* <h2>Hello</h2> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path='/Dashboard' element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
