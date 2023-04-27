// import kutyak from "./kutyak.json"
import {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";


const Tbody = () => {
    const [kutyak, setKutyak] = useState([]);
    useEffect( () => {        
       fetch(process.env.REACT_APP_IP + "/dogs", {
        method: "get"        
       })
       .then((res) => res.json())
        .then((res) => setKutyak(res))         
    }, []);
    return (
        <tbody>
            {kutyak.map((kutya) => (
                
                    <Kutya kutya={kutya} key={kutya.id}/>
                
            ))}      
        </tbody>
    );
  };

  const Kutya = ({kutya}) => {
    return (
        <tr>
              <th>{kutya.name}</th>
              <td>{kutya.description}</td>
              <td>
                <NavLink key={kutya.id} to={"/dogs/" + kutya.id}>
                    <img src={kutya.kepUrl} alt={kutya.name}/>
                </NavLink>
            </td>
          </tr>
    );
  }

  export default Tbody;