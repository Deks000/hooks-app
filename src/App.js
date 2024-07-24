import React, {useEffect, useRef, useState} from "react";

// const quickAndDirtyStyle = {
//     width: "200px",
//     height: "200px",
//     background: "#FF9900",
//     color: "#FFFFFF",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
// }

function App() {
    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    const ref = useRef()

    // Monitor changes to position state and update DOM
    useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
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

    return (
        <div
            ref={ ref }
            style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                cursor: "grab",
                zIndex: "1000",
                backgroundColor: "burlywood",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                border: "solid black 2px",
                borderRadius: "15px",
            }}
            onMouseMove={ onMouseMove }
            onMouseDown={ () => setPressed(true) }
            onMouseUp={ () => setPressed(false) }>
            <p>{ pressed ? "Dragging..." : "Press to drag" }</p>
        </div>
    )
};
export default App;
