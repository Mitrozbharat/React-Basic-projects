import { useEffect, useState } from "react";

const Profile = () => {

    const [data, setData] = useState([]);


    // here we used get data from  api


    useEffect(() => {

        fetch("https://api.github.com/users/Bharat7475")
            .then((Response) => Response.json())
            .then((data) => setData(data), console.log(data))

    }, []);


    return (
        <div>
            <div className="container">
                <div className="d-flex justify-contain-center">
                    <h2> GitGub Profile </h2>
                    <h4> Name : {data.name}</h4>
                    <img src={data.avatar_url} style={{ height: '250px', width: '400px' }} />
                    <h4> Followers: {data.followers}</h4>
                </div>
            </div>

        </div>
    )
}

export default Profile
