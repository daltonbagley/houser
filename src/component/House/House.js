import React from 'react'
import './House.css'
export default function House(props){
    return(
        <div className="HouseCard">
            <div className="HouseImage">
             <img src={props.house.url} width="300" height="200"/>
            </div>
            <div className="HouseInfo">
             <span>Property Name: {props.house.name}</span>
             <span>Street: {props.house.street}</span>
             <span>City: {props.house.city}</span>
             <span>State: {props.house.state}</span>
             <span>Zip: {props.house.zip}</span>
             <span>Monthy Mortgage: {props.house.mortgage}</span>
             <span>Monthly Rent: {props.house.rent}</span>
            </div>
            <button onClick={()=>props.deleteHouse(props.house.id)}><img src="https://png.icons8.com/metro/1600/delete.png" alt="trash" width="50" height="50"/></button>
        </div>
    )
}