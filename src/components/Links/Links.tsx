import React from 'react';
import { GiBirdTwitter } from "react-icons/gi";
import { FiGithub} from "react-icons/fi";


import classes from './Links.module.css';
export interface LinksProps {
    links:any;
}
 
const Links: React.FunctionComponent<LinksProps> = (props) => {
   
    return ( 
        <div className={"d-flex mt-2 justify-content-between align-items-center " + classes.top}>
            {props.links.map( (ln:any, index:number) => {
                return <div className={'ml-2'} key={index}><a href={ln.address} target="blank"> {ln.name === 'twitter' ? <GiBirdTwitter className={classes.icon +" "+ classes.icon_twitter}/> :  <FiGithub className={classes.icon +" "+ classes.icon_github}/>} </a></div>
            })}
        </div>

     );
}
 
export default Links;
