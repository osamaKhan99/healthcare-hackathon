//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/layout';
import Appointments from './pages/appointments/appointment';
import Dashboard from './pages/dashboard/dashboard';
import Doctors from './pages/others/doctors';
import Department from './pages/others/department';
import Patient from './pages/others/patient';
import Payment from './pages/others/payment';
import Help from './pages/others/help';

function App() {
  return (
    <div className="app">
     <Layout>
       <Switch>
         <Route path="/" exact component={Dashboard} />
         <Route path="/appointments" exact component={Appointments} />
         <Route path="/doctors" exact component={Doctors} />
         <Route path="/departments" exact component={Department} />
         <Route path="/patients" exact component={Patient} />
         <Route path="/payments" exact component={Payment} />
         <Route path="/help" exact component={Help}/>
       </Switch>
     </Layout>
     
    </div>
  );
}

export default App;
