import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Services from './components/Services';

export default function App() {
    const isLoggedIn = true;
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/services" element={<Services number={5} />} />

                <Route path="/posts/:category/:topic" element={<Posts />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route
                    path="/login"
                    element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Home />}
                />

                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

// import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import About from './components/About';
// import Dashboard from './components/Dashboard';
// import Error from './components/Error';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Posts from './components/Posts';
// import Services from './components/Services';

// export default function App() {
//     const isLoggedIn = false;

//     return (
//         <Router>
//             <Navbar />
//             <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route exact path="/about" component={About} />
//                 <Route exact path="/services">
//                     <Services number="5" />
//                 </Route>
//                 {/* <Route exact path="/services" render={() => <Services number="5" />} /> */}
//                 <Route exact path="/posts/:category/:topic" component={Posts} />

//                 <Route exact path="/dashboard" component={Dashboard} />

//                 <Route exact path="/login">
//                     {isLoggedIn ? <Redirect to="/dashboard" /> : <Home />}
//                 </Route>

//                 <Route component={Error} />
//             </Switch>
//         </Router>
//     );
// }

// /* eslint-disable react/jsx-no-constructed-context-values */
// import React, { useReducer } from 'react';
// import ComponentA from './components/UseReduce/ComponentB';

// export const counterContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         default:
//             return state;
//     }
// };

// export default function App() {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div className="app">
//             <div>Count: {count}</div>
//             <counterContext.Provider value={{ countDispatch: dispatch }}>
//                 <ComponentA />
//             </counterContext.Provider>
//         </div>
//     );
// }
