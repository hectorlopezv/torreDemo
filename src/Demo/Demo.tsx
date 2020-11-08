import React from 'react'
import Torre from '../assests/pictures/Torre.png';
import {fetchTest} from '../API/Api';
import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query-devtools";
import CardList from '../Card/CardList';
import Card from '../Card/Card';
export interface DemoProps {    
}

const queryCache = new QueryCache();
const Demo: React.FunctionComponent<DemoProps> = () => {
    //fetch('https://yacdn.org/proxy/' + 'https://torre.co/es/search/people?q=opento%3Afull-time-employment').then(res => console.log(res.json()));
   
    
   
    return (
    <div className="Home">
    <div className="container">
        <div className="row">
            <div className="col">
                 <img className="img-fluid  rounded" src={Torre} alt=""/>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <ReactQueryCacheProvider queryCache={queryCache}>
                <Example/>    
            </ReactQueryCacheProvider>
            </div>
        </div>
    </div>  
</div>

  )
}
export interface ExampleProps {
    
}
 
const Example: React.FunctionComponent<ExampleProps> = (props) => {
    const { data, error, isLoading, isError } = useQuery("repoData", fetchTest);

  if (isLoading) 
  {
      return <h1>Loading</h1>;
  }

  if (error){
    return <h1>An error has occurred"</h1>;
  }
  console.log(data);
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