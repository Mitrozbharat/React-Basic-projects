import { Outlet } from "react-router"

const GitHub = () => {
    return (
        <div>
            <h2> Wel come to github page ?</h2>
            <Outlet /> {/* This will render the nested routes like GithubProfile */}
            {/* You can add more content or components here related to GitHub */}
        </div>
    )
}

export default GitHub
