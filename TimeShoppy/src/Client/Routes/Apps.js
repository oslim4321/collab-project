import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "../Interface/Menu/Navbar";
/* Registration start */
import SignIn from "../Interface/Registration/SignIn/SignIn";
import SignUp from "../Interface/Registration/SignUp/SignUp";
/* Registration end */

/* HomePageStart */
import HomePage from "../Interface/HomePage";
/* HomePageStart ends*/

import Errorpage from "../NotFound/Errorpage";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* Registration */}
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>

          <Route path="*" element={<Errorpage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
