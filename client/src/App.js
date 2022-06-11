import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
    const [userList, setUserList] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [major, setMajor] = useState("");
    const [studentId, setStudentId] = useState(0);

    useEffect(() => {
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setUserList(response.data);
        });
    }, []);

    const createUser = () => {
        Axios.post("http://localhost:3001/addUsers", {
            name,
            age,
            major,
            studentId,
        }).then((response) => {
            setUserList([...userList, {name, age, major, studentId}])
        });
    };

    return (
        <div className="App">
            <div className="usersDisplay">
                {userList.map((user) => {
                    return (
                        <div>
                            <h2>Name: {user.name}</h2>
                            <h2>Major: {user.major}</h2>
                            <h2>Age: {user.age}</h2>
                            <h2>Student ID: {user.studentId}</h2>
                            <br />
                        </div>
                    );
                })}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Age"
                    onChange={(event) => {
                        setAge(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Major"
                    onChange={(event) => {
                        setMajor(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Student ID"
                    onChange={(event) => {
                        setStudentId(event.target.value);
                    }}
                />
                <button onClick={createUser}>Create user</button>
            </div>
        </div>
    );
}

export default App;
