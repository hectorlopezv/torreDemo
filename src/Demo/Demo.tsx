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
                <Example>
                    <Card/>
                </Example>
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
  return (
      <CardList>
            {props.children}
      </CardList>

  );
}
 

 
 
export default Demo;