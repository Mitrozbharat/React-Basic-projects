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
import Github1 from './componants/GitHub1/GitHub1.jsx';
import Home from './componants/Home/Home.jsx';
import Layout from './componants/Layout.jsx';
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
        <Route path='profile/:userid' element={<UserProfile />} />  // Dynamic route to capture userId
      </Route>                                                   //  Example of dynamic nested route with parameter

      <Route path='github' element={<Github />} >
        <Route path='github1' element={<Github1 />} /> // Example of nested route
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
