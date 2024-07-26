import React, {useEffect, useRef, useState} from "react";
import "./App.css"

function App() {
    const [windows, setWindows] = React.useState([1]);
    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    const divWindowsRef = React.useRef();

    // divWindowsRef.current = windows;

    const addWindow = () => {
        setWindows((prev) => [...prev, prev[prev.length - 1] + 1]);
    };

    // Monitor changes to position state and update DOM
    useEffect(() => {
        if (windows) {
            windows.style.transform = `translate(${position.x}px, ${position.y}px)`
        }
    }, [position])

    // Update the current position if mouse is down
    const onMouseMove = (event) => {
        if (pressed) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            })
        }
    }

    // const map1 = windows.map()

    return (
        <>
            <button onClick={addWindow}>Добавить окно</button>
            <div className="mainWindow">
                {
                    windows.map((n) =>
                    <div
                        key={n}
                        className="window"
                        onMouseMove={ onMouseMove }
                        onMouseDown={ () => setPressed(true) }
                        onMouseUp={ () => setPressed(false) }>
                        { pressed ? "Dragging..." : "Press to drag" }
                    </div>)
                }
            </div>
        </>
    )
}
export default App;
