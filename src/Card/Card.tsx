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
                    <p>Whale and Jaguar</p>
                    <h2>Fullstack Developer</h2>
                </div>
                <div>
                    Remoto - Pais
                </div>
                <div>
                    Dinero
                </div>
                <div className="Tags">
                    <a href="">Badge1</a>
                    <a href="">Badge2</a>
                    <a href="">Badge3</a>
                </div>


                <div className={classes.card_author}>
                    <a href="#" className={classes.author_avatar }>
                        <img src={Avatar} alt=""/>
                    </a>
                    <svg className={classes.half_circle} viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div className={classes.author_name}>
                        <div className={classes.author_name_prefix}>Miebro_1</div>
                        <a href="">Miembro 1</a>
                    </div>

                </div>
                <div className={classes.card_author}>
                    <a href="#" className={classes.author_avatar }>
                        <img src={Avatar} alt=""/>
                    </a>
                    <svg className={classes.half_circle} viewBox="0 0 106 57">
                        <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                    </svg>
                    <div className={classes.author_name}>
                        <div className={classes.author_name_prefix}>Miembro_2</div>
                        <a href="">Miembro 2</a>
                    </div>

                </div>
            </div>








        </div>
    );
}
 
export default Card;