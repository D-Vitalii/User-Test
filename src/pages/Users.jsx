import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user details:', error));
    }, [id]);

    return (
        <div>
            <Helmet>
                <title>User Details - React SSR App</title>
                <meta name="description" content={`Details for User ${id}`} />
            </Helmet>
            {user ? (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
};

export default User;