import { useLoaderData } from "react-router";

const Profile = () => {

    const data = useLoaderData()
    console.log(data);

    return (
        <div className="conatainer">
            <div className="row offset-2">
                <div className="col-8">
                    <h2> GitHub Profile  </h2>
                    <img src={data.avatar_url} style={{ height: '250px', width: '250px' }} />
                    <h2>{data.name}</h2>
                </div>

            </div>

        </div>
    )
}

export default Profile

export const apidataLoader = async () => {

    const response = await fetch('https://api.github.com/users/Bharat7475');
    if (!response.ok) {
        throw new Error("Error occurred while fetching GitHub user data");
    }

    const data = await response.json();
    return data;
};

