import React from "react";
import "./App.css"

function App() {
    const [windows, setWindows] = React.useState([1,2]);
    const [pressed, setPressed] = React.useState(false)
    const [position, setPosition] = React.useState({x: 0, y: 0})

    // const divs = document.querySelectorAll(".okno")

    // const handleClick = (event) => {
    //     console.log(event.target)
    // }
    //
    // divs.forEach(divs => {
    //     divs.addEventListener('click', handleClick)
    // })

    const addWindow = () => {
        setWindows((prev) => [...prev, prev[prev.length - 1] + 1]);
    };

    // Monitor changes to position state and update DOM
    // React.useEffect(() => {
    //     if (windows) {
    //         windows.style.transform = `translate(${position.x}px, ${position.y}px)`
    //     }
    // }, [position])



    // Update the current position if mouse is down
    const onMouseMove = (event) => {
        console.log(event.target)

        if (pressed) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            })
        }
    }
    const onMouseDown = (event) => {
        // console.log(event.target)

        document.addEventListener('mousemove', onMouseMove);
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
                        id="objecttomove-1"
                        // className="okno"
                        // onMouseMove={ onMouseMove }
                        onMouseDown={ onMouseDown }
                        // onMouseDown={ () => setPressed(true) }
                        onMouseUp={ () => setPressed(false) }>
                        { pressed ? "Dragging..." : "Press to drag" }
                    </div>)
                }
            </div>
        </>
    )
}
export default App;
