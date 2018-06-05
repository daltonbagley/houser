import React, {Component} from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateMoney, resetForm} from '../../ducks/reducer'
//import {Redirect} from 'react-router'

class StepThree extends Component{
    constructor(props){
        super(props)
        this.state = {
           mortgage: this.props.mortgage,
           rent: this.props.rent
        }
    }
    createHouse = () => {
        let newHouse = {
            name: this.props.name,
            street: this.props.street,
            city: this.props.city,
            state: this.props.st,
            zip: this.props.zip,
            url: this.props.url,
            mortgage: this.props.mortgage,
           rent: this.props.rent
        }
       
        axios.post('http://localhost:3001/api/houses/', newHouse).then(()=>this.props.history.push('/'))
    }

    handleSubmit = () => {
       // console.log(this.state.mortgage, this.state.rent)
        this.props.updateMoney(this.state.mortgage, this.state.rent)
        this.createHouse()
        this.props.resetForm()

    }
    backToStep2(){
        this.props.updateMoney(this.state.mortgage, this.state.rent)
        this.props.history.push('/wizard/step2')
    }

render(){
    return(
        <div> 
            <div className='form'>
                <span>Monthly Mortgage:</span>
                <input type = "text" value = {this.state.mortgage} onChange={(e)=>{
                    this.setState({mortgage: e.target.value})
                }}/>
                <span>Monthly Rent:</span>
                <input type = "text" value = {this.state.rent} onChange={(e)=>{
                    this.setState({rent: e.target.value})
                }}/>
              
            </div>
            <button className="btn" onClick={()=>this.backToStep2()}> Previous Step </button>
             <button className="btn" onClick={()=>this.handleSubmit()}>Complete</button> 
        </div>
    )
}
}
function mapStateToProps(state){
    const {name, street, city, st, zip, url, mortgage, rent} = state
    return {
        name,
        street,
        city,
        st,
        zip,
        url,
        mortgage,
        rent
    }
}

export default connect(mapStateToProps, {updateMoney, resetForm})(StepThree)