"use client"
import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Create() {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");

    function saveRepair(event:any) {
        event.preventDefault();
        const data = {'name': name, 'code': code};
        console.log(data);
        
        axios.post('http://127.0.0.1:8000/api/repairs/create', data)
        .then(response =>{
            console.log('OK');
        })
        .catch(error => {
            console.log('ERROR');
        });

    }

    return (
        <>
            <h2>CREAR REPARACION</h2>
            <form onSubmit={saveRepair}>
                <div className="py-2">
                    <label>Nombre Reparacion:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="text-gray-500" />
                </div>
                <div className="py-2">
                    <label>Codigo:</label>
                    <input value={code} onChange={(e) => setCode(e.target.value)} type="text" className="text-gray-500" />
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        GUARDAR
                    </button>
                </div>
            </form>
        </>

    )
}