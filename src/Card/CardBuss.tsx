import React from 'react'
import classes from './Card_.module.css';
import Avatar from './Avatar.png';
import Language from '../Language/Language';
import Links from '../Links/Links';
import {CgDollar} from 'react-icons/cg';
import {GiTimeBomb} from 'react-icons/gi';
import Stats from '../Stats/Stats';

export interface CardBussProps {
    
}
 
const CardBuss: React.FunctionComponent<CardBussProps> = (props) => {
    return (   <div className={classes.card + ' d-flex justify-content-around'}>
    <div className={classes.card_header}>
        <p>{"heloo"}</p>
         
        <h2 className="mt-n5 ">{"heloo"}</h2>
    </div>

    <div className="d-flex mt-3 mb-3 ">
        <img className={classes.picThumbnail}  alt=""/>
        <div className="d-flex flex-column">
            <div>{"heloo"}</div>
            <div><GiTimeBomb className={classes.icon_timezone}/> {"heloo"}</div>
           <div>
               <CgDollar className={classes.icon_money}/> {"heloo"}/{"heloo"}
           </div>
              
            <div className="mt-1">
                Remote - {"heloo"}
            </div>
        </div>
    </div>

    



    </div>);
}
 
export default CardBuss;