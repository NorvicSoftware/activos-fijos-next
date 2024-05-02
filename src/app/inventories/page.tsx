"use client"
import axios from "axios";
import LinkButton from "../components/linkButton";
import { useState, useEffect } from "react";

export default function Inventories() {
    const [inventories, setinventories] = useState<any>([]);

    axios.get('http://127.0.0.1:8000/api/inventories')
    .then(function(response){
        setinventories(response.data.inventories);
    })
    .catch(function (error) {
        console.log('error' + error);
    });


    return (
        <div>
            <h2 className="flex justify-center">LISTADO DE INVENTARIOS</h2>
           
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Fecha de inicio</th>
                        <th>Fecha final</th>
                        <th>Detalles</th>
                        <th>No Leído</th>
                        <th>Leído</th>
                    </tr>
                </thead>
                <tbody>
    {inventories.map((inventory:any, id:number) => (
        <tr key={inventory.id}>
            <td>{inventory.name}</td>
            <td>{inventory.start_Date}</td>
            <td>{inventory.final_date}</td>
            <td>{inventory.details}</td>
            <td>{inventory.not_read}</td>
            <td>{inventory.read}</td>
            <LinkButton name="ver detalles" route="/inventories/read" />
            
        </tr>
    ))}
</tbody>

            </table>
        </div>
    );
}
