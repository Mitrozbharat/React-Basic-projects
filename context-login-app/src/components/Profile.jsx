import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <p>Please login</p>;
    }

    return (
        <div className="container mt-4">
            <h2>Profile</h2>
            <p>Welcome, {user.username}</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Profile;
