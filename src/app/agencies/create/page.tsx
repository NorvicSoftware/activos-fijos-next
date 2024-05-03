"use client"
import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Create() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function saveAgency(event: any) {
        event.preventDefault();
        const data = { 'name': name, 'address': address, 'phoneNumber': phoneNumber };
        console.log(data);

        axios.post('http://127.0.0.1:8000/api/agencies/create', data)
            .then(response => {
                console.log('OK');
            })
            .catch(error => {
                console.log('ERROR');
            });

    }

    return (
        <>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-2">
                <div className="bg-white dark:bg-gray-800"></div>
                <h2>CREAR ACTIVO FIJO</h2>
                <form onSubmit={saveAgency}>
                    <div className="py-2">
                        <label>Nombre Agencia:</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="text-gray-500" />
                    </div>
                    <div className="py-2">
                        <label>Direccion:</label>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="text-gray-500" />
                    </div>
                    <div className="py-2">
                        <label>Numero:</label>
                        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="text-gray-500" />
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            GUARDAR
                        </button>
                    </div>
                </form>
            </div>
        </>

    )
}