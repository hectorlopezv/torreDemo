import React from 'react';
import {
    Link
  } from "react-router-dom";
export interface HomeProps {
    
}
 
const Home: React.FunctionComponent<HomeProps> = () => {
    return (  

        <div className="Home">
            <div className="container">
                <div className="row title">
                    <div className="col">
                        <p>Torre Demo Day</p>
                    </div>
                </div>
            
                <div className="row ml-9">
                    <div className="container">
                        <Link  className="Home_link" to="/demo" replace>Click Me!</Link>
                    </div>
                </div>
                
            </div>
            


        </div>
    );
}
 
export default Home;