import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const DogSinglePage = () => {
    const param = useParams();
    const id = param.dogById;
    const [dog, setDog] = useState({});
    useEffect(() => {  
        (async () => {
            try {
              const res = await fetch(`http://localhost:9000/dogs/${id}`);
              const kutya = await res.json();
              setDog(kutya)              
            } catch (err) {
              console.log(err);
            }
          })();        
    }, []);
    return (
        <Kartya>
            <h1>{dog.name}</h1>
            <img src={"../" + dog.kepUrl} alt={dog.name} />
            <p>{dog.description}</p>
        </Kartya>
    );
}

const Kartya = styled.div`
    width: 30%;
    box-shadow: 0 0 10px; 
    padding: 10px;
    margin: 10px auto;   
    text-align: center;
`

export default DogSinglePage;