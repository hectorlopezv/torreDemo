import React from 'react'
import classes from './Card_.module.css';
import Avatar from './Avatar.png';
import Language from '../Language/Language';
import Links from '../Links/Links';
import {CgDollar} from 'react-icons/cg';
import {GiTimeBomb} from 'react-icons/gi';
import Stats from '../Stats/Stats';
import Skill from '../Skills/Skill';

export interface CardBussProps {
    nameJob:any;
    orgname:any;
    orgpicture:any;
    country:any;
    deadline:any;
    type:any;
    idJob:any;
    compensation:any;
    skills:any;
}
 
const CardBuss: React.FunctionComponent<CardBussProps> = (props) => {
   

    
    return (   <div className={classes.cardBuss + ' d-flex justify-content-between'}>
    <div className={classes.card_header}>
        <p >{props.orgname} - {props.idJob}</p>
        <h2>{props.nameJob}</h2>
    </div>

    <div className="d-flex mt-3 mb-0 ">
        <img className={classes.bussThumbnail} src={props.orgpicture} alt=""/>
        <div className="d-flex flex-column">
            <div>{props.type}</div>
            <div className="ml-n5"><GiTimeBomb className={classes.icon_timezone}/> {props.deadline? props.deadline.slice(0, 10): "Not Found"}</div>
           <div className="ml-n1">
            <CgDollar className={classes.icon_money}/>{props.compensation.minAmount?props.compensation.minAmount : 'Not Found'}-{props.compensation.maxAmount?props.compensation.maxAmount: "Not Found"}/{props.compensation.periodicity.slice(0,4)}
           </div>
              
            <div className="mt-1">
                Remote {props.country? <span>- </span> : null}{props.country ? props.country : null}
            </div>
        </div>
    </div>

    <Skill skills={props.skills}/>



    



    </div>);
}
 
export default CardBuss;