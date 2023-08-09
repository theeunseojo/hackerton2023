import React from 'react'; 
import {Routes,Route} from 'react-router-dom';
import Login from './login/Login';
import Sign from './sign/sign';
import Main from './main/Main';

function App() { 
    return(
        <div className="App">
            <Routes>
                <Route path ="/" element = { <Main/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Sign />} />
            </Routes>
        </div>
);
}

export default App;