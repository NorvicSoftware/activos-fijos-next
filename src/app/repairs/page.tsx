"use client"
import LinkButton from "../components/linkButton";
import axios from "axios";
import { useState } from "react";

export default function ListRepairs() {

    const title: string = "LISTADO DE REPARACIONES";
    const [repairs, setRepairs] = useState<any>([]);

    axios.get('http://127.0.0.1:8000/api/repairs')
    .then(function(response){
        setRepairs(response.data.repairs);
    })
    .catch(function (error) {
        console.log('error' + error);
    });

    return (
        <div>
            <h2 className="flex justify-center">{title}</h2>
            <LinkButton name="Crear nueva reparacion" route="/repairs/create" />
            <table>
                <thead>
                    <tr>
                        <th>Activo fijo</th>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                    </tr>
                </thead>
                <tbody>
                    { repairs.map((repair:any, id:number) =>(
                        <tr key={id}>
                            <td>{repair.repair_date}</td>
                            <td>{repair.date}</td>
                            <td>{repair.detail}</td>
                            <td>{repair.asset_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}