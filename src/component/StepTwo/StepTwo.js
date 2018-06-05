import React, {Component} from "react"
import { Link } from 'react-router-dom'
//import axios from 'axios'
import {connect} from 'react-redux'
import {updateUrl} from '../../ducks/reducer'
//import {Redirect} from 'react-router'


class StepTwo extends Component{
    constructor(props){
        super(props)
        this.state = {
           url: this.props.url
        }
    }

backToStep1(){
    this.props.updateUrl(this.state.url)
    this.props.history.push('/wizard/step1')
}
nextToStep3(){
    this.props.updateUrl(this.state.url)
    this.props.history.push('/wizard/step3')
}
render(){
    return(
        <div>
           
            <div className='form'>
                 <span>Image URL:</span>
                 <input type = "text" value= {this.state.url} onChange={(e)=>{
                    this.setState({url: e.target.value})
                }}/> 
                
              
            </div>
            <button className="btn" onClick={()=>this.backToStep1()}> Previous Step </button>
            <button className="btn" onClick={()=>this.nextToStep3()}> Next Step </button>
        </div>
    )
}
}

function mapStateToProps (state){
    const {url} = state

    return{
        url
    }
}

export default connect(mapStateToProps, {updateUrl})(StepTwo)