import React, {Component} from "react"
import { Link } from 'react-router-dom'
//import axios from 'axios'
import {connect} from 'react-redux'
import {updateInfo} from '../../ducks/reducer'
import './StepOne.css'


 class StepOne extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            street: this.props.street,
            city: this.props.city,
            state: this.props.st,
            zip: this.props.zip
        }
    }

 handleUpdateInfo(){
   const {name, street, city, state, zip} = this.state
    this.props.updateInfo(name, street, city, state, zip)
    this.props.history.push('/wizard/step2')
 }

render(){
    return(
        <div>
            <div className='form'>
                <span>Property Name:</span>
                <input type = "text" value={this.state.name} onChange={(e)=>{
                    this.setState({name: e.target.value})
                }}/>
                <span>Street:</span>
                <input type = "text" value={this.state.street} onChange={(e)=>{
                    this.setState({street: e.target.value})
                }}/>
                <span>City:</span>
                <input type = "text" value={this.state.city} onChange={(e)=>{
                    this.setState({city: e.target.value})
                }}/>
                <span>State:</span>
                <input type = "text" value={this.state.state} onChange={(e)=>{
                    this.setState({state: e.target.value})
                }} />
                <span>Zip:</span>
                <input type = "text" value={this.state.zip} onChange={(e)=>{
                    this.setState({zip: e.target.value})
                }}/>
            </div>
              {/* <button className="btn" onClick={()=>this.props.history.push('/wizard/step2')}> Next Step </button>    */}
              <button className="btn" onClick={()=>this.handleUpdateInfo()}> Next Step </button>   
        </div>
    )
}
}

function mapStateToProps (state){
    const {name, street, city, st, zip} = state

    return{
        name,
        street,
        city,
        st,
        zip
    }
}

export default connect(mapStateToProps, {updateInfo})(StepOne)