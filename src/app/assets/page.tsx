"use client"
import LinkButton from "../components/linkButton";
import axios from "axios";
import { useState } from "react";

export default function ListAssets() {

    const title: string = "LISTADO DE ACTIVOS FIJOS";
    const [assets, setAssets] = useState<any>([]);

    axios.get('http://127.0.0.1:8000/api/assets')
    .then(function(response){
        setAssets(response.data.assets);
    })
    .catch(function (error) {
        console.log('error' + error);
    });

    return (
        <div>
            <h2 className="flex justify-center">{title}</h2>
            <LinkButton name="Crear nuevo activo fijo" route="/assets/create" />
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
                    { assets.map((asset:any, id:number) =>(
                        <tr key={id}>
                            <td>{asset.name}</td>
                            <td>{asset.code}</td>
                            <td>{asset.description}</td>
                            <td>{asset.brand}</td>
                            <td>{asset.model}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}