import { useEffect, useState } from "react";
import User from "./components/User";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch("https://raw.githubusercontent.com/cederdorff/web-frontend/main/data/wu-e22a.json");
            const data = await response.json();
            setUsers(data);
        }
        getUsers();
    }, []);

    return (
        <div>
            <header>
                <h1>Canvas Users</h1>
            </header>
            <main>
                <section className="grid-container">
                    {users.map(user => (
                        <User key={user.id} user={user} />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default App;
