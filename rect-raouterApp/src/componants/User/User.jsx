import { Outlet } from "react-router"

const User = () => {


    return (
        <div>
            <h1>Welcome to  Main User Page ? </h1>
            <Outlet /> {/* This will render the nested routes like UserProfile */}
        </div>
    )
}

export default User
