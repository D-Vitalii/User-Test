import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    useEffect(() => {
        const results = users.filter(user =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, users]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <Helmet>
                <title>Home Page - React SSR App</title>
                <meta name="description" content="Welcome to the Home page of React SSR App" />
            </Helmet>
            <h2>Home</h2>
            <input
                type="text"
                placeholder="Search by username"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map(user => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
