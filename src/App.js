import logo from './logo.svg';
import './App.css';
import React from 'react';
import './styles.css';
import {useState} from 'react';

const App=()=>{
    const [users,setUsers]=useState([]);
  const loadUsers=async()=>{
    console.log('before ');
    const response=await fetch("https://api.github.com/users");
    const jsonresponse=await response.json();
    setUsers(jsonresponse);
  };
  
   return (
    <div class="App">
    <h1>hello all</h1>
    <button class="btn btnInner" onClick={loadUsers}>Get Data</button>
    <h2> LIST OF USERS:</h2>
    
        <div className="container-fluid mt-5">
            <div className="row text-center">
                
            {

                    users.map((curElem) => {
                    
                        const { avatar_url, id, login,url, site_admin,type } = curElem;
                    return (
                          <div className="col-10 col-md-4 mt-5 profile" key={id}>
                  <div className="column">
                            <div className="d-flex align-items-center">
                                    <div className="image"> <img src={ avatar_url }  width="155" /> </div>
                                <div className="ml-3 w-100">
                                        <h4 className="mb-0 mt-0 textLeft">LOGIN:{login}</h4>
                                        <div className="ml-3 w-100">
                                        <h4 className="mb-0 mt-0 textLeft">TYPE:{type}</h4>
                                        <h4 className="mb-0 mt-0 textLeft">URL:{url}</h4>
                                      
                                      
                                      
                                  
                                  </div>
                                </div>
                         </div>
                      </div>
                </div>
                    )
            })        

            }
                
            </div>
        </div>
    </div>
)
 }
 export default App;