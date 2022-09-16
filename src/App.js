import React, {useState, useEffect} from 'react';
import User from './Components/User';
import './App.css';

function App() {

  const [users, setUsers]=useState([]);
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async()=>{
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=>setUsers(data))
    .catch((err)=>{
      console.log(err);
    })
  }

  console.log(users);

  return (
    <div className="App">

      <div>
        <h1 className="mt-3">Users Data From JSON Placeholder</h1>
        {
          users.map((user)=>(
            <User id={user.id} key={user.id} name={user.name} email={user.email} phone={user.phone} website={user.website} />
          ))
        }
      </div>
      
    </div>
  );
}

export default App;
