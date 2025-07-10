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
import Home from './componants/Home/Home.jsx';
import Layout from './componants/Layout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='github' element={<Github />} />
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
