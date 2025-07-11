import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import About from './componants/About/About.jsx';
import Contact from './componants/Contact/Contact.jsx';
import Github from './componants/Github/Github.jsx';
import GithubProfile from './componants/GithubProfile/Profile.jsx';
import Home from './componants/Home/Home.jsx';
import Layout from './componants/Layout.jsx';
import Profile, { apidataLoader } from './componants/Profile/Profile.jsx';
import User from './componants/User/User.jsx';
import UserProfile from './componants/UserProfile/UserProfile.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route
        path='/'
        index element={<Home />}
      />
      <Route path='/Home' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />

      <Route path='user' element={<User />} >
        <Route path='profile/:userid' element={<UserProfile />} />     // Dynamic route to capture userId
      </Route>                                                      //  Example of dynamic nested route with parameter

      <Route path='github' element={<Github />} >
        <Route
          path='GithubProfile'
          element={<GithubProfile />}
        />

        // use the loader to get optimize the performace in data fetch and make application faster

        <Route
          loader={apidataLoader}
          path='Profile'
          element={<Profile />}
        />
      </Route>
    </Route>
  )
);

/*

const router = createBrowserRouter(
[

path: '/',
element: <Layout />,
children: [
  { index: true, element: <Home /> },
  { path: 'about', element: <About /> },
  { path : 'contact', element: <Contact /> },
  { path: 'github', element: <Github /> }

]
)

*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
