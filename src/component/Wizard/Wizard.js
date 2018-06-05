import React, {Component} from "react"
import { Link, Route, Switch } from 'react-router-dom'
import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepThree from '../StepThree/StepThree'
//import axios from 'axios'
import {connect} from 'react-redux'
import {resetForm} from '../../ducks/reducer'
import './Wizard.css'


class Wizard extends Component{

render(){
    return(
        <div>
            {/* <Link to = '/' className='link' onClick={()=>this.props.resetForm()}><p>Cancel</p></Link> */}
            <button className="btn" onClick={()=>this.props.history.push('/')}>Cancel</button>
            <div className="wizardMain">
            <Switch>
                <Route component = {StepOne} path = '/wizard/step1'/>
                <Route component = {StepTwo} path = '/wizard/step2'/>
                <Route component = {StepThree} path = '/wizard/step3'/>
            </Switch>
           </div>
        </div>
    )
}
}
function mapStateToProps(state){
    const{name} = state
    return {
        name
    }
}

export default connect(mapStateToProps, {resetForm})(Wizard)
