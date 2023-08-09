import React from 'react'; 
import {Routes,Route} from 'react-router-dom';
import Login from './login/Login';
import Sign from './sign/sign';
import SimplePage from './simplepage/SimplePage';

function App() { 
    return(
        <div className="App">
            <Routes>
                <Route path ="/simplepage" element = { <SimplePage/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Sign />} />
            </Routes>
        </div>
);
}

export default App;