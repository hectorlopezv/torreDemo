import React from 'react';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GrUserWorker } from 'react-icons/gr';
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
                <AiOutlineFundProjectionScreen/><p>{props.stats.projects}</p>
            </div>

            <div className={classes.icon + " ml-2"}>
                <GrUserWorker/><p>{props.stats.jobs}</p>
            </div>

            <div className={classes.icon + " ml-2"}>
                <GiTeacher/><p>{props.stats.education}</p>
            </div>

            <div className={classes.icon + " ml-2"}>
                <TiZoomOutline/><p>{props.stats.interests}</p>
            </div>
        </div>

     );
}
 
export default Stats;