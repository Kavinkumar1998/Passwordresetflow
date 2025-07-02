import './App.css';
import { Route} from "react-router-dom";
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';
import Forgetpassword from './Components/Forgetpassword/Forgetpassword';
import { Setpassword } from './Components/Setpassword/Setpassword';
import { VerifyOTP } from './Components/Verifyotp/Verifyotp';
import { Movie} from './Components/Home/Home.js';
import Movieabout from './Components/Movieabout/Movieabout';
import { Addmovie } from './Components/Addmovie/Addmovie';

function App() {
  return (
    <div className="App">
    
<Route  exact path = "/">
     <Login/>
      </Route>

      <Route path="/Signup">
  <Signup/>
      </Route>
   
      <Route path="/Forgetpassword">
     <Forgetpassword/>
      </Route>
      <Route path="/Verifyotp">
     <VerifyOTP/>
      </Route>

      <Route path="/Setpassword">
     <Setpassword/>
      </Route>

      <Route path="/Home">
     <Movie/>
      </Route>

      <Route path="/About/:Id">
     <Movieabout/>
      </Route>

      <Route path="/Addmovie">
     <Addmovie/>
      </Route>

    
      {/* <Route path="/**">
     <Nopage/>
      </Route> */}

    </div>
  );
}

export default App;
