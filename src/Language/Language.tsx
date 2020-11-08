import React from 'react';
import classes from './Language.module.css';

export interface LanguageProps {
    languages:any;
}
 
const Language: React.FunctionComponent<LanguageProps> = (props) => {
    console.log(props.languages);
    //<img className={classes.language} alt="English" src="https://unpkg.com/language-icons/icons/en.svg"></img>
    return ( 

        <div className="d-flex align-items-end justify-content-center">
            {props.languages.map((lang:any, index:number) => {
                return <img key={index} className={classes.language + ' ml-3 d-block'} alt="English" src={`https://unpkg.com/language-icons/icons/${lang.code}.svg`}></img>
            })}
        </div>
     );
}
 
export default Language;