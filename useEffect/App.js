import React from "react";
import List from "./List";
import "./App.css"

function App() {
    const [visibleList, setVisibleList] = React.useState(true);

    const toggleVisibleList = () => {
        setVisibleList(visible => !visible);
    }
    return (
        <div className="App">
            {visibleList && <List/>}
            <button onClick={toggleVisibleList}>Показать / Скрыть</button>
        </div>
    );
}
export default App;
