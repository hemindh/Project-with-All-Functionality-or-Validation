import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Component/SignIn';
import UserDashboard from './Dashboard/UserDashboard';
import HookFormOne from './React-Hook-Form/HookFormOne';

function App() {
  return (
    <div className="App">
      {/* <h2>Hello</h2> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path='/Dashboard' element={<UserDashboard />} />
        <Route path='/HookForm' element={<HookFormOne />} />
      </Routes>
    </div>
  );
}

export default App;
