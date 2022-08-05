import React , {  useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';


function App(){
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=> response.json())
    //         .then(users => this.setState({robots:users}));
    // }

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => setRobots(users));
        console.log(count) 
        //console.log(robots,searchfield)    
    },[count])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
    
    const filteredRobot = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    //console.log(robots,searchfield)
        return  !robots.length ? 
        <h1>Loading......</h1>:
    (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <button onClick={()=>setCount(count+1)}>Click me!</button>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobot} /> 
                    </ErrorBoundry>
                </Scroll>

            </div>
        );
    }
    

export default App ; 