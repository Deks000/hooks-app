import React from "react";
import List from "./List";
import "./App.css"

function App() {
    const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);
    const ulRef = React.useRef();

    const addNumber = () => {
        const lastNumber = numbers[numbers.length - 1];
        setNumbers([...numbers, lastNumber + 1])
    };

    const handleScroll = () => {
        console.log('Был скролл');
    };

    React.useEffect(() => {
        ulRef.current.addEventListener('scroll', handleScroll);
    }, []);

    const removeScroll = () => {
        ulRef.current.removeEventListener('scroll', handleScroll);
    };

    return (
        <div>
            <ul ref={ulRef}>
                {numbers.map((n) => (<li key={n}>{n}</li>))}
            </ul>
            <button onClick={addNumber}>Добавить число</button>
            <button onClick={removeScroll}>Не следить</button>
        </div>
    );
}
export default App;
