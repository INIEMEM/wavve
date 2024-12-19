
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Rootlayout from "./Rootlayout";
import Registration from "./Registration";
import Congrats from "./Congrats";
import VerifyAccount from "./VerifyAccount";

function App() {
  
  const routes = createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
        <Route index element={<Registration/>}/>
        <Route path="congrats" element={<Congrats/>}/>
        <Route path="verify" element={<VerifyAccount/>}/>
    </Route>
  );
  const router = createBrowserRouter(routes);
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
