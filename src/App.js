import './App.css';

function App() {
    return (
        <div className="App">
            <Job salary = {30000} job = 'Teacher' company = 'St. Anthony' />
            <Job salary = {10000} job = 'Cook' company = 'Guardian' />
            <Job salary = {40000} job = 'Head Teacher' company = 'Hurumaa' />
        </div>
    );
}

const Job = (props) => {
    return (
        <div>
            <h1>{props.salary}</h1>
            <h1>{props.job}</h1>
            <h1>{props.company}</h1>
        </div>
    )
}

export default App;
