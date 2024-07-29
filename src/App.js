import React from "react";
import "./App.css"

function App() {
    const [windows, setWindows] = React.useState([1]);
    // const [pressed, setPressed] = React.useState(false)
    // const [position, setPosition] = React.useState({x: 0, y: 0})

    // const divs = document.querySelectorAll(".okno")

    // const handleClick = (event) => {
    //     console.log(event.target)
    // }

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

        // let shiftX = event.clientX - ball.getBoundingClientRect().left;
        // let shiftY = event.clientY - ball.getBoundingClientRect().top;

        moveAt(event.pageX, event.pageY);

        console.log(event.target)
        // переносит мяч на координаты (pageX, pageY),
        // дополнительно учитывая изначальный сдвиг относительно указателя мыши
        function moveAt(pageX, pageY) {
            event.target.style.left = pageX -  event.target.offsetWidth / 2 + 'px';
            event.target.style.top = pageY -  event.target.offsetHeight / 2 + 'px';
        }
    }
    const onMouseDown = (event) => {
        // console.log(event.target)
        document.addEventListener('mousemove', onMouseMove);
    }

    const onMouseUp = (event) => {
        // console.log(event.target)
        document.removeEventListener('mousemove', onMouseMove);
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
                            id={"objecttomove-" + n}
                            className="okno"
                            // onMouseMove={ onMouseMove }
                            onMouseDown={ onMouseDown }
                            // onMouseDown={ () => setPressed(true) }
                            onMouseUp={ onMouseUp }
                        >
                            Okno {n}
                        </div>)
                }
            </div>
        </>
    )
}
export default App;
