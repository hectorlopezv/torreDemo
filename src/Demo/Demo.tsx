import React, {useState} from 'react'
import Torre from '../assests/pictures/Torre.png';
import {fetchTest, fetchJob} from '../API/Api';

import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query-devtools";
import CardList from '../Card/CardList';
import Card from '../Card/Card';
import CardBuss from '../Card/CardBuss';


import Draggable from 'react-draggable'; // The default
import { Input, Label, Button } from 'semantic-ui-react';
export interface DemoProps {    
}

const queryCache = new QueryCache();
const Demo: React.FunctionComponent<DemoProps> = () => {
    //fetch('https://yacdn.org/proxy/' + 'https://torre.co/es/search/people?q=opento%3Afull-time-employment').then(res => console.log(res.json()));
   
    const jobsHandler = (event: any) => {
        setJob(event.target.value);
        console.log(Job);
        if (Job.length < 1){
            setSearch(false)
        }
    }

    const buttonHandler = (event: any) => {
        console.log('entro al button');
        setSearch(true);
    }

   const [Job, setJob] = useState('react');
   const [Search, setSearch] = useState(false);

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
                {Search ?<ReactQueryCacheProvider queryCache={queryCache}>
                    <CardList>

                        <Jobs job={Job} />

                    </CardList>
                    
                </ReactQueryCacheProvider> : <h1>NOP</h1>}
            </div>
        </div>

    </div>  
</div>

  )
}


export interface JobsProps {
    job:any;
    
}
 
const Jobs: React.FunctionComponent<JobsProps> = (props) => {
    const { data, error, isLoading } = useQuery("react", fetchJob.bind(props.job));

    if (isLoading) 
    {
        return <h1>Loading</h1>;
    }
  
    if (error){
      return <h1>An error has occurred"</h1>;
    }
    const {results} = data;
    console.log(data);


    return (  
        <>
            {results.map((entry:any, index:number) => {
                return <CardBuss key={index} nameJob={entry.objective} 
                orgname={entry.organizations[0].name} orgpicture={entry.organizations[0].picture}
                country={entry.locations[0]} deadline={entry.deadline}
                type={entry.type} idJob={entry.id} compensation={entry.compensation.data}
                skills={entry.skills}/>

            })}
        </>
    );
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