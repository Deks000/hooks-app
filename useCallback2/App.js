import React from "react";
import "./App.css"
import Buttons from "./Buttons";

function App() {
    const [count, setCounter] = React.useState(0);

    const onePlus = React.useCallback(() => setCounter((count) => count + 1), []);

    const onMinus = React.useCallback(() => setCounter((count) => count - 1), []);

    return (
        <div>
            <h1>{count}</h1>
            <Buttons onPlus={onePlus} onMinus={onMinus} />
        </div>
    );
}
export default App;
