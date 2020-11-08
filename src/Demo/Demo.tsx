import React, {useState} from 'react'
import Torre from '../assests/pictures/Torre.png';
import {fetchTest, fetchJob} from '../API/Api';

import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query-devtools";
import CardList from '../Card/CardList';
import Card from '../Card/Card';

import Draggable from 'react-draggable'; // The default
import { Input, Label, Button } from 'semantic-ui-react';
export interface DemoProps {    
}

const queryCache = new QueryCache();
const Demo: React.FunctionComponent<DemoProps> = () => {
    //fetch('https://yacdn.org/proxy/' + 'https://torre.co/es/search/people?q=opento%3Afull-time-employment').then(res => console.log(res.json()));
   
    const jobsHandler = (event: any) => {
        setJob(event.target.value);
    }

    const buttonHandler = (event: any) => {
        console.log('entro al button');

    }
   const [Job, setJob] = useState('react');

   const nodeRef = React.useRef(null);
    return (
    <div className="Home">
    <div className="container">
        <div className="row">
            <Draggable nodeRef={nodeRef}>
                <div ref={nodeRef} className="col">
                    <ReactQueryCacheProvider queryCache={queryCache}>
                        <Example />    
                    </ReactQueryCacheProvider>
                </div>
            </Draggable>
 

            <div className="col">
                 <img className="img-fluid  rounded" src={Torre} alt=""/>
            </div>

        </div>
        
        <div className="row">
            <div className="col d-flex ">

                <div>
                    <Label basic>$</Label>
                        <Input onChange={jobsHandler} transparent={false} list='languages' labelPosition='left'  type='text' placeholder='Choose language...' />
                        <datalist id='languages'>
                        <option value='react'>react</option>
                        <option value='python'>python</option>
                        <option value='javascript'>javascript</option>
                        </datalist>
                </div>

                <Button  onClick={buttonHandler} size={"huge"} primary>Search</Button>

                
            </div>
        </div>

        <div className="row">
            <div className="col">
                <h1>X2</h1>
            </div>
        </div>

    </div>  
</div>

  )
}


export interface JobsProps {
    
}
 
const Jobs: React.FunctionComponent<JobsProps> = () => {
    const { data, error, isLoading } = useQuery("react", fetchJob.bind('react'));

    if (isLoading) 
    {
        return <h1>Loading</h1>;
    }
  
    if (error){
      return <h1>An error has occurred"</h1>;
    }
    console.log(data);
    return (  <h1>Jobs</h1>);
}
 


export interface ExampleProps {
    
}
 
const Example: React.FunctionComponent<ExampleProps> = (props) => {
    const { data, error, isLoading } = useQuery("repoData", fetchTest);

  if (isLoading) 
  {
      return <h1>Loading</h1>;
  }

  if (error){
    return <h1>An error has occurred"</h1>;
  }

  const {stats, opportunities, person:{name:name_person, pictureThumbnail, professionalHeadline, links, location:{name:name_location, timezone}}, 
  languages} = data;
 
  return (
            <Card
                name_location={name_location}
                name_person={name_person}
                pictureThumbnail={pictureThumbnail}
                zone={timezone}
                professionalHeadline={professionalHeadline}
                opportunities={opportunities}
                languages={languages}
                links={links} 
                stats={stats}           
            />
  );
}
 


 
export default Demo;