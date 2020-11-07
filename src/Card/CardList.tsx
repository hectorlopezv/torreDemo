import React from 'react'
import classes from './Card_.module.css';

export interface CardListProps {
    
}
 
const CardList: React.FunctionComponent<CardListProps> = (props) => {
    return ( 
        <div className={classes.card_list}> 
            {props.children}
        </div>
     );
}
 
export default CardList;