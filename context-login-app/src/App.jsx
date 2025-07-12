import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import ProviderContext from './context/ContextProvider'
function App() {

  return (
    <>
      <ProviderContext>
        <Login />
        <Profile />
      </ProviderContext>
    </>

  )
}

export default App
