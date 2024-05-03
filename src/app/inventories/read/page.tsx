"use client"
import LinkButton from "@/app/components/linkButton";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Read() {
    const title: string = "LISTADO DE ACTIVOS FIJOS inventariados";
    const [assets, setAssets] = useState<any>([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/inventories/read/assets')
            .then(function(response){
                setAssets(response.data.assets);
            })
            .catch(function (error) {
                console.log('error' + error);
            });
    }, []); // Empty dependency array to run once when the component mounts

    return (
        <div className="py-12">
            <h2 className="flex justify-center">{title}</h2>
            <LinkButton name="Volver a inventarios" route="/inventories" />
           
            <table className="table">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activo fijo</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Codigo</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset:any, id:number) => (
                        <tr key={id}>
                            <td>{asset.name}</td>
                            <td>{asset.code}</td>
                            <td>{asset.checked === 1 ? "Inventariado" : "No inventariado"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
