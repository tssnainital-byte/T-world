
import React from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-sm" style={{backgroundColor:"orange"}}>
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button 
                  className="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Cart">Cart</Link>
                    </li>
                  
                    <li className="nav-item">
                      <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Navbar;


















































// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './navbar.jsx';
// import SignUp from './SignUp.jsx';
// import Dashboard from './Dashboard.jsx';

// function Home() {
//   return <h2>Home hello</h2>;
// }

// function Cart() {
//   return <h2>Cart Page</h2>;
// }

// function Mess() {
//   return <h2>Mess Page</h2>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const styles = {
//     main: { padding: '20px' },
//     title: { color: '#5C6AC4' },
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Dashboard />
      
//       <div style={styles.main}>
//         <h1 style={styles.title}>Hello, World!</h1>
//         <button onClick={() => setCount(count + 1)}>count {count}</button>
//       </div>

//       {/* Routes yahan honge, aur Dashboard ka render sirf jab /dashboard pe ho */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/mess" element={<Mess />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






















// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './navbar.jsx';
// import SignUp from "./SignUp.jsx";
// import Dashboard from "./Dashboard.jsx";
// function Home() {
//   return  <h2>Home hello</h2>  ;
// }

// function Cart() {
//   return <h2>Cart Page</h2>;
// }




// function App() {
//   const [count, setCount] = useState(0);

//   const styles = {
//     main: { padding: '20px' },
//     title: { color: '#5C6AC4' },
//   };

//   return (
//     <Router>
//       <Navbar />
       
    

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Cart" element={<Cart />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/signUp" element={<SignUp />} />
//         <Route path="/mess" element={<Mess />} />
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './navbar.jsx';
// import SignUp from './SignUp.jsx';
// import Dashboard from './Dashboard.jsx';

// function Home() {
//   return <h2>Home hello</h2>;
// }

// function Cart() {
//   return <h2>Cart Page</h2>;
// }

// function Mess() {
//   return <h2>Mess Page</h2>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const styles = {
//     main: { padding: '20px' },
//     title: { color: '#5C6AC4' },
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Dashboard />
      
//       <div style={styles.main}>
//         <h1 style={styles.title}>Hello, World!</h1>
//         <button onClick={() => setCount(count + 1)}>count {count}</button>
//       </div>

//       {/* Routes yahan honge, aur Dashboard ka render sirf jab /dashboard pe ho */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/mess" element={<Mess />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






















// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './navbar.jsx';
// import SignUp from "./SignUp.jsx";
// import Dashboard from "./Dashboard.jsx";
// function Home() {
//   return  <h2>Home hello</h2>  ;
// }

// function Cart() {
//   return <h2>Cart Page</h2>;
// }




// function App() {
//   const [count, setCount] = useState(0);

//   const styles = {
//     main: { padding: '20px' },
//     title: { color: '#5C6AC4' },
//   };

//   return (
//     <Router>
//       <Navbar />
       
    

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Cart" element={<Cart />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/signUp" element={<SignUp />} />
//         <Route path="/mess" element={<Mess />} />
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;









































