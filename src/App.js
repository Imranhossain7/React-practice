import GetPost2 from './components/UseReduce/GetPost2';

export default function App() {
    return (
        <div className="App">
            <GetPost2 />
        </div>
    );
}

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
