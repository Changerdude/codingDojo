import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";


const People = props => {
    const { id } = useParams();
    const [person, setPerson] = useState();
    const [homeworld, setHomeworld] = useState();

    const nav = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((res) => {
                console.log(res.data);
                setPerson(res.data);
                axios.get(res.data.homeworld)
                .then((response) => {
                    setHomeworld(response.data)
                })
                .catch((err) =>{
                    console.log(err);
                    nav('/error');
                })
            })
            .catch((err) => { 
                console.log(err);
                nav('/error');
            })
    }, [id,nav])

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {person ?
                    <div>
                        <h1>{person.name}</h1>
                        <p><strong>Height: </strong>{person.height}cm</p>
                        <p><strong>Mass: </strong>{person.mass}kg</p>
                        <p><strong>Hair Color: </strong>{person.hair_color}</p>
                        <p><strong>Skin Color: </strong>{person.skin_color}</p>
                    </div>
                :
                <p>Loading</p>
            }
            {homeworld ?
                    <div>
                        <h3>{homeworld.name}</h3>
                        <p><strong>Climate: </strong>{homeworld.climate}</p>
                        <p><strong>Terrain: </strong>{homeworld.terrain}</p>
                        <p><strong>Surface Water: </strong>{homeworld.surface_water}</p>
                        <p><strong>Population: </strong>{homeworld.population}</p>
                        <p><a href={person.homeworld}>Homeworld</a></p>
                    </div>
                    :
                    <p>Loading</p>
                    }
        </div>
    )
}
export default People;
