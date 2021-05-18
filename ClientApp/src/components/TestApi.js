import React from "react";
import { useState, useEffect } from 'react';

import { Table } from 'reactstrap';

export function TestApi() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchApiData();
    }, []);

    const fetchApiData = async () => {
        try {
            const response = await fetch('https://cat-fact.herokuapp.com/facts/', {
                method: 'get',
                headers: new Headers({
                    'Content-Type': 'application/json',
                })
            });
            const payload = await response.json();
            setUsers(payload);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="container">
            {console.log(users)}
            <h1>TESTAPI</h1>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Text</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{users.user}</td>
                                <td>{users.text}</td>
                                <td>{users._id}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    )
}