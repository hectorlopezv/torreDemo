import React from 'react'
import classes from './Card_.module.css';
import Avatar from './Avatar.png';
import Language from '../Language/Language';
import Links from '../Links/Links';
import {CgDollar} from 'react-icons/cg';
import {GiTimeBomb} from 'react-icons/gi';
import Stats from '../Stats/Stats';
import './button.css';
export interface CardProps {
    name_location?:any
    name_person?:any
    pictureThumbnail?:any
    zone?:any
    professionalHeadline?:any
    opportunities?:any;
    languages?:any;
    links?:any;
    stats?:any;
}
 
const Card: React.FunctionComponent<CardProps> = (props) => {
    const personExpect =  props.opportunities.filter((el:any) =>  el.field === 'desirable-compensation-currency' || el.field === 'desirable-compensation-amount' || el.field === 'desirable-compensation-periodicity');
    const [currency, amount, typeSalary] = personExpect;/*get Money information Person*/

    return (  
        
        <div className={classes.card + ' d-flex justify-content-around'}>
        <div className={classes.card_header}>
            <p>{props.name_person}</p>
            <Links
                links={props.links}
            />            
            <h2 className="mt-n5 ">{props.professionalHeadline}</h2>
        </div>

        <div className="d-flex mt-3 mb-3 ">
            <img className={classes.picThumbnail} src={props.pictureThumbnail} alt=""/>
            <div className="d-flex flex-column">
                <div>{props.name_location}</div>
                <div><GiTimeBomb className={classes.icon_timezone}/> {props.zone}</div>
               <div>
                   <CgDollar className={classes.icon_money}/> {amount.data}/{typeSalary.data}
               </div>
                    <Language  languages={props.languages}/>
                <div className="mt-1">
                    Remote - {props.name_location}
                </div>
            </div>
        </div>

        
        <Stats
            stats={props.stats}
        />


    
        </div>
    );
}
 
export default Card;