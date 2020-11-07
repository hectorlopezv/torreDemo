import React from 'react'
import classes from './Card_.module.css';
import Avatar from './Avatar.png';
export interface CardProps {
    
}
 
const Card: React.FunctionComponent<CardProps> = () => {
    return (  
        <div className={classes.card_list}>

            <div className={classes.card}>
                <div className={classes.card_header}>
                    <p>May 25th 2020</p>
                    <h2>Card tricks are fun. Hi mom!</h2>
                </div>
                <div className={classes.card_author}>
                    <a href="#" className={classes.author_avatar }>
                        <img src={Avatar} alt=""/>
                    </a>
                    <svg className={classes.half_circle} viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div className={classes.author_name}>
                        <div className={classes.author_name_prefix}>Author</div>
                        Jeff Delaney
                    </div>
                </div>
            </div>

            <div className={classes.card}>
                <div className={classes.card_header}>
                    <p>May 25th 2020</p>
                    <h2>Card tricks are fun. Hi mom!</h2>
                </div>
                <div className={classes.card_author}>
                    <a href="#" className={classes.author_avatar }>
                        <img src={Avatar} alt=""/>
                    </a>
                    <svg className={classes.half_circle} viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div className={classes.author_name}>
                        <div className={classes.author_name_prefix}>Author</div>
                        Jeff Delaney
                    </div>
                </div>
            </div>


            <div className={classes.card}>
                <div className={classes.card_header}>
                    <p>May 25th 2020</p>
                    <h2>Card tricks are fun. Hi mom!</h2>
                </div>
                <div className={classes.card_author}>
                    <a href="#" className={classes.author_avatar }>
                        <img src={Avatar} alt=""/>
                    </a>
                    <svg className={classes.half_circle} viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div className={classes.author_name}>
                        <div className={classes.author_name_prefix}>Author</div>
                        Jeff Delaney
                    </div>
                </div>
            </div>



            <div className={classes.card}>
                <div className={classes.card_header}>
                    <p>May 25th 2020</p>
                    <h2>Card tricks are fun. Hi mom!</h2>
                </div>
                <div className={classes.card_author}>
                    <a href="#" className={classes.author_avatar }>
                        <img src={Avatar} alt=""/>
                    </a>
                    <svg className={classes.half_circle} viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div className={classes.author_name}>
                        <div className={classes.author_name_prefix}>Author</div>
                        Jeff Delaney
                    </div>
                </div>
            </div>



            <div className={classes.card}>
                <div className={classes.card_header}>
                    <p>May 25th 2020</p>
                    <h2>Card tricks are fun. Hi mom!</h2>
                </div>
                <div className={classes.card_author}>
                    <a href="#" className={classes.author_avatar }>
                        <img src={Avatar} alt=""/>
                    </a>
                    <svg className={classes.half_circle} viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div className={classes.author_name}>
                        <div className={classes.author_name_prefix}>Author</div>
                        Jeff Delaney
                    </div>
                </div>
            </div>




            <div className={classes.card}>
                <div className={classes.card_header}>
                    <p>May 25th 2020</p>
                    <h2>Card tricks are fun. Hi mom!</h2>
                </div>
                <div className={classes.card_author}>
                    <a href="#" className={classes.author_avatar }>
                        <img src={Avatar} alt=""/>
                    </a>
                    <svg className={classes.half_circle} viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div className={classes.author_name}>
                        <div className={classes.author_name_prefix}>Author</div>
                        Jeff Delaney
                    </div>
                </div>
            </div>








        </div>
    );
}
 
export default Card;