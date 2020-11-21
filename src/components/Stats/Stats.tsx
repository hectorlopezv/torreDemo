import React from 'react';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { CgWorkAlt } from 'react-icons/cg';
import { VscRemoteExplorer } from 'react-icons/vsc';
import { GiTeacher } from 'react-icons/gi';
import { TiZoomOutline } from 'react-icons/ti';
import classes from './Stats.module.css';


export interface StatsProps {
    stats:any;
}
 
const Stats: React.FunctionComponent<StatsProps> = (props) => {
    return ( 
        <div className="d-flex justify-content-around align-items-center">
            <div className={classes.icon + " ml-2"}>
                <GiWeightLiftingUp/> <p>{props.stats.strengths}</p>
            </div>

            <div className={classes.icon + " ml-2"}>
                <CgWorkAlt/><p>{props.stats.projects}</p>
            </div>

            <div className={classes.icon + " ml-2"}>
                <VscRemoteExplorer/><p>{props.stats.jobs}</p>
            </div>

            <div className={classes.icon + " ml-2"}>
                <GiTeacher/><p>{props.stats.education}</p>
            </div>

            <div className={classes.icon  + " ml-2"}>
                <TiZoomOutline/><p>{props.stats.interests}</p>
            </div>
        </div>

     );
}
 
export default Stats;