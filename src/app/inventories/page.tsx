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
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <h2 className="flex justify-center">LISTADO DE INVENTARIOS anual</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de inicio</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha final</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalles</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No Leído</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leído</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventories.map((inventory:any) => (
                                    <tr key={inventory.id}>
                                        <td>{inventory.name}</td>
                                        <td>{inventory.start_Date}</td>
                                        <td>{inventory.final_date}</td>
                                        <td>{inventory.details}</td>
                                        <td>{inventory.not_read}</td>
                                        <td>{inventory.read}</td>
                                        <td><LinkButton name="ver detalles" route="/inventories/read" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}