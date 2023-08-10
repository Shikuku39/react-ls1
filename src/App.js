import './App.css';



function App() {
    const users = [
        {name: 'Manu', age: 17},
        {name: 'Ibra', age: 15},
        {name: 'Voke', age: 22}
    ]
    return ( 
        <div className='App'>
            {users.map((user, key) => {
                return (
                    <User name={user.name} age={user.age} />
                )
            })}
        </div>
    )
}

const User = (props) => {
    return (
        <div>
            {props.name} {props.age}
        </div>
    )
}

export default App;
