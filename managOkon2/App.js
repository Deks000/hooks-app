import React from "react";
import "./App.css"

function App() {
    const [windows, setWindows] = React.useState([1])
    let currentDroppable = null;

    // const okno = document.querySelectorAll('.okno')

    React.useEffect(() => {
        const okno = document.querySelectorAll('.okno')
        function handleMove(event) {
            let shiftX = event.clientX - okno.getBoundingClientRect().left;
            let shiftY = event.clientY - okno.getBoundingClientRect().top;

            okno.style.position = 'absolute';
            okno.style.zIndex = 1000;
            document.body.append(okno);

            moveAt(event.pageX, event.pageY);

            function moveAt(pageX, pageY) {
                okno.style.left = pageX - shiftX + 'px';
                okno.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);

                okno.hidden = true;
                let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
                okno.hidden = false;

                if (!elemBelow) return;

                let droppableBelow = elemBelow.closest('.droppable');
                if (currentDroppable !== droppableBelow) {
                    if (currentDroppable) { // null если мы были не над droppable до этого события
                        // (например, над пустым пространством)
                        leaveDroppable(currentDroppable);
                    }
                    currentDroppable = droppableBelow;
                    if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
                        // (например, только что покинули droppable)
                        enterDroppable(currentDroppable);
                    }
                }
            }
        }
        document.addEventListener('mousemove', handleMove);
        return () => {
            document.removeEventListener('mousemove', handleMove);
            okno.onmouseup = null;
            };
        }, []);

    React.useEffect((event) => {
        const okno = document.querySelectorAll('.okno')
        }, [])

    // const handleClick = (event) => {
    //     console.log(event)
    // }
    //
    // okno.forEach(div => {
    //     div.addEventListener('click', onmousedown)
    // })



    // const onMouseDown = function (event) {
    //     console.log(event.target)
    //     let shiftX = event.clientX - okno.getBoundingClientRect().left;
    //     let shiftY = event.clientY - okno.getBoundingClientRect().top;
    //
    //     okno.style.position = 'absolute';
    //     okno.style.zIndex = 1000;
    //     document.body.append(okno);
    //
    //     moveAt(event.pageX, event.pageY);
    //
    //     function moveAt(pageX, pageY) {
    //         okno.style.left = pageX - shiftX + 'px';
    //         okno.style.top = pageY - shiftY + 'px';
    //     }
    //
    //     function onMouseMove(event) {
    //         moveAt(event.pageX, event.pageY);
    //
    //         okno.hidden = true;
    //         let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    //         okno.hidden = false;
    //
    //         if (!elemBelow) return;
    //
    //         let droppableBelow = elemBelow.closest('.droppable');
    //         if (currentDroppable !== droppableBelow) {
    //             if (currentDroppable) { // null если мы были не над droppable до этого события
    //                 // (например, над пустым пространством)
    //                 leaveDroppable(currentDroppable);
    //             }
    //             currentDroppable = droppableBelow;
    //             if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
    //                 // (например, только что покинули droppable)
    //                 enterDroppable(currentDroppable);
    //             }
    //         }
    //     }

    //     document.addEventListener('mousemove', onMouseMove);
    //
    //     okno.onmouseup = function () {
    //         document.removeEventListener('mousemove', onMouseMove);
    //         okno.onmouseup = null;
    //     };
    // };

    function enterDroppable(elem) {
        elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
        elem.style.background = '';
    }

    okno.ondragstart = function () {
        return false;
    };

    const addWindow = () => {
        setWindows((prev) => [...prev, prev[prev.length - 1] + 1]);
    };


    return (
        <>
            <button onClick={addWindow}>Добавить окно</button>
            <div className="mainWindow">
                {
                    windows.map((n) =>
                    <div
                        key={n}
                        className="okno"
                        // onMouseMove={ onMouseMove }
                        onMouseDown={handleMove}
                        // onMouseUp={ () => setPressed(false) }
                    >
                        Окно {n}
                    </div>)
                }
            </div>
        </>
    )
}
export default App;
