import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Planet = props => {
    const { id } = useParams();
    const [homeworld, setHomeworld] = useState();

    const nav = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((res) => {
                setHomeworld(res.data);
            })
            .catch((err) => { console.log(err) 
            nav('/error');
            })
    }, [id,nav])

    return (
        <div>
            {homeworld ?
                <div>
                    <h1>{homeworld.name}</h1>
                    <p><strong>Climate: </strong>{homeworld.climate}</p>
                    <p><strong>Terrain: </strong>{homeworld.skin_color}</p>
                    <p><strong>Surface Water: </strong>{homeworld.surface_water}</p>
                    <p><strong>Population: </strong>{homeworld.population}</p>
                </div>
                :
                <p>Loading</p>
            }
        </div>
    )
}
export default Planet;