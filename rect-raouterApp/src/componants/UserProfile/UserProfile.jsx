import { useParams } from 'react-router-dom';
const UserProfile = () => {
    const { userid } = useParams(); // Extracting userid from the URL parameters
    return (
        <div>
            <h1 style={{ backgroundColor: 'blue' }}>Welcome to User Profile Page :{userid} </h1>
        </div>
    )
}

export default UserProfile
