import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    let i = 0;
    const addFive = () => {
        while (i < 5) {
            setCount((prevState) => prevState + 1);
            i += 1;
        }
    };

    return (
        <div>
            {count}
            <p>
                <button type="button" onClick={() => setCount((prevState) => prevState + 1)}>
                    Add 1
                </button>
            </p>
            <p>
                <button type="button" onClick={addFive}>
                    Add 5
                </button>
            </p>
        </div>
    );
}

export default Counter;

// import React from 'react';

// class Counter extends React.Component {
//     state = {
//         count: 0,
//     };

//     incrementCount = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1,
//         }));
//     };

//     render() {
//         const { children } = this.props;
//         const { count } = this.state;
//         return children(count, this.incrementCount);
//     }
// }

// export default Counter;
