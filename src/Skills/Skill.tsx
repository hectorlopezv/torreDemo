import React from 'react'
import classes from './Skill.module.css';
import { SiWorkplace } from "react-icons/si";
import { GiSoapExperiment } from "react-icons/gi";

export interface SkillProps {
    skills:any;
}
 
const Skill: React.FunctionComponent<SkillProps> = (props) => {
    return ( 
        <div className="d-flex justify-content-around align-items-center flex-column">
            <div className="mb-3">
                <GiSoapExperiment className={classes.icon_experience}/>
            </div>
            
            {props.skills.map((entry:any, index:number) => {
                 return  <p key={index} className={classes.experience}>{entry.name} - {entry.experience}</p>
                        
            })}
        </div>

     );
}
 
export default Skill;