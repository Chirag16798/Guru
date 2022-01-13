import {Routes,Route} from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Login/Signup';
import { UserAuthContextProvider , useUserAuth } from '../Contex/UserAuthContex';
import ProtectedRoute from './Login/ProtectedRoute';
import './Login/Form.css'
import Home from './Pages/Home';
import Wasp from './Pages/Wasp/Wasp';
import Task from './Pages/Task/Task';

import Country from './Pages/OncePages/Country/Country';
import Currency from './Pages/OncePages/Currency/Currency';
import Languages from './Pages/OncePages/Languages/Languages';




const App = () =>{
      return(
          <div className="App">
                <UserAuthContextProvider>
                  <Routes>
                    <Route
                      path="/home"
                      element={
                        <ProtectedRoute>
                          <Home />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/Wasp"
                      element={
                        <ProtectedRoute>
                          <Wasp />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/Task"
                      element={
                        <ProtectedRoute>
                          <Task />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/Country"
                      element={
                        <ProtectedRoute>
                          <Country />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/Currency"
                      element={
                        <ProtectedRoute>
                          <Currency />
                        </ProtectedRoute>
                      }
                    />

                    <Route
                      path="/Languages"
                      element={
                        <ProtectedRoute>
                          <Languages />
                        </ProtectedRoute>
                      }
                    />
                    {/* <Route path="/Wasp" element={<Wasp />} />
                    <Route path="/Task" element={<Task />} />
                    <Route path="/Once/Country" element={<Country />} /> */}

                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                  </Routes>
                </UserAuthContextProvider>
          </div>
      )
}

export default App;
