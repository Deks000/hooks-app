import React, {useState, useCallback, useEffect, useRef} from "react";
import { useMovable } from "react-move-hook";

import "./App.css";

function App() {
    const [state, setState] = useState({
        moving: false,
        position: { x: 0, y: 0 },
        delta: undefined,
    });

    useEffect(() => {
        document.body.classList.toggle("moving", state.moving);
    }, [state.moving]);

    const handleChange = useCallback((moveData) => {
        setState((state) => ({
            moving: moveData.moving,
            position: moveData.stoppedMoving
                ? {
                    ...state.position,
                    x: state.position.x + moveData.delta.x,
                    y: state.position.y + moveData.delta.y,
                }
                : state.position,
            delta: moveData.moving ? moveData.delta : undefined,
        }));
    }, []);

    const ref = useMovable({ onChange: handleChange });

    const style = {
        // backgroundColor: state.moving ? "red" : "lightgray",
        left: state.position.x,
        top: state.position.y,
        transform: state.delta
            ? `translate3d(${state.delta.x}px, ${state.delta.y}px, 0)`
            : undefined,
    };

    const inputEl = useRef(3);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };

    return (
        <div ref={ref} className="container" style={style}>
            <input ref={inputEl} type={"text"}/>
            <button onClick={onButtonClick} className="movable">f
            </button>
        </div>
    );
}

export default App;
