"use client"
import LinkButton from "../components/linkButton";
import axios from "axios";
import { useState } from "react";

export default function ListAgencies() {

    const title: string = "LISTADO DE AGENCIAS";
    const [agencies, setAgencies] = useState<any>([]);

    axios.get('http://127.0.0.1:8000/api/agencies')
        .then(function (response) {
            setAgencies(response.data.agencies);
        })
        .catch(function (error) {
            console.log('error' + error);
        });

    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-2">
            <div className="bg-white dark:bg-gray-800">
                <h2 className="flex justify-center">{title}</h2>
                <div className="w-56 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <LinkButton name="Crear nueva agencia" route="/agencies/create" />
                </div>
                <table>
                    <thead>
                        <tr className="border border-l-1">
                            <th className="text-md px-6 py-1">Agencia</th>
                            <th className="text-md px-6 py-1">Direccion</th>
                            <th className="text-md px-6 py-1">Numero de telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agencies.map((agency: any) => (
                            <tr key={agency.id}>
                                <td className="border-b text-center">{agency.name}</td>
                                <td className="border-b text-center">{agency.address}</td>
                                <td className="border-b text-left">{agency.phoneNumber}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}