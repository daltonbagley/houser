import React, {Component} from "react"
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'
import  './Dashboard.css'

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }

    componentWillMount(){
        this.getHouses()
    }

    getHouses = () => {
        axios.get('http://localhost:3001/api/houses/').then(res =>
        this.setState({houses: res.data}, ()=> console.log(this.state.houses)))
    }

    deleteHouse = (id) => {
        axios.delete(`http://localhost:3001/api/houses/${id}`).then(this.getHouses)
    }

render(){
    return(
        <div className="Dashboard">
            {/* <Link to = "/wizard/step1" className = 'btn'><p>Add New Property</p></Link> */}
           <button className="btn" onClick={()=>this.props.history.push('/wizard/step1')}>Add New Property</button> 
        <div className="HouseList">
            {this.state.houses.map((house)=>
            <House key={house.id} house={house} deleteHouse={this.deleteHouse} />)
            }
            
        </div>


        </div>
    )
}
}