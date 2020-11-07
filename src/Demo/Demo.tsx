import React from 'react'
import Torre from '../assests/pictures/Torre.png';

import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query-devtools";

export interface DemoProps {
    
}
const queryCache = new QueryCache();
const Demo: React.FunctionComponent<DemoProps> = () => {
   /*
    return (  
    <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="col">
                         <img className="img-fluid  rounded" src={Torre} alt=""/>
                    </div>
                </div>
            </div>  
    </div>
    );
    */
   return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Example />
    </ReactQueryCacheProvider>
  )
}
export interface ExampleProps {
    
}
 
const Example: React.FunctionComponent<ExampleProps> = () => {
    const { data, error, isLoading, isError, } = useQuery("repoData", () =>
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
  );

  if (isLoading) return <h1>Loading</h1>;

  if (error) return <h1>An error has occurred"</h1>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
 

 
 
export default Demo;