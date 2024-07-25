import React from "react";

// class List extends React.Component {
//     state = {
//         numbers: [1,2,3]
//     };
//
//     addNextNumber = () => {
//         const nextNumber = this.state.numbers.push() + 1;
//         this.setState({
//             numbers: [...this.state.numbers, nextNumber]
//         });
//     }
//
//     componentDidMount() {
//         console.log('компанент был отображен');
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         // console.log({prevProps, prevState, nextProps: this.props, nextState: this.state});
//         if(this.state.numbers.length !== prevState.numbers.length){
//             console.log('Было добавлено число в массив')
//         }
//     }
//
//     componentWillUnmount() {
//         console.log('Компонент был удален')
//     }
//
//     render() {
//         return (
//             <>
//                 <ul>
//                     {
//                         this.state.numbers.map((num, index) => <li key={index}>{num}</li>)
//                     }
//                 </ul>
//                 <button onClick={this.addNextNumber}>Новое число</button>
//             </>
//         )
//     }
// }

const List = () => {
    const [numbers, setNumbers] = React.useState([1, 2, 3]);
    const [count, setCount] = React.useState(0)

    const addNumber = () => {
        // const randNumber = Math.round(Math.random() * 10);
        const nextNumber = numbers.push() + 1;
        const newNumbersArr = [...numbers, nextNumber];
        setNumbers(newNumbersArr);
    };

    React.useEffect(() => {
        console.log('Компонент был отображен');
        return() => {
            console.log('Компонент был удален');
        };
    },[]);

    React.useEffect(() => {
        console.log('Было добавлено число в массив')
    },[numbers]);

    React.useEffect(() => {
        console.log('Компонент был обновлен')
    },[count]);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <ul>
                {
                    numbers.map((num, index) => <li key={index}>{num}</li>)
                }
            </ul>
            <button onClick={addNumber}>Новое число</button>
        </>
    );
}
export default List;