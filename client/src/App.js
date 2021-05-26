import React, {useState} from "react";
import Login from './pages/login';
import Dashboard from '../src/components/Dashboard'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContactsProvider } from "./contexts/contactsProvider";
import { ConversationProvider } from './contexts/conversationProvider';
import { SocketProvider } from './contexts/SocketProvider';
import Home from './pages/Home';
import SignupForm from './pages/SignupForm';
import Settings from './components/SettingsPage'
import UserContext from "./contexts/userProvider";
import './App.css'

function App() {
  const [userData, setUserData] = useState({})
  const id = userData.username
   
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider id={id}>
        <ConversationProvider id={id}>
          <Dashboard id={id} />
        </ConversationProvider>
      </ContactsProvider>
    </SocketProvider >
  )

  return (
    <Router basename={process.env.PUBLIC_URL}>
        <div>
          <UserContext.Provider value={{userData, setUserData}}>
               <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/Home' component={Home}/>
                <Route exact path='/Dashboard'>{dashboard}</Route>
                <Route exact path='/SignupForm' component={SignupForm} />
                <Route exact path='/Settings' component={Settings} />
              </Switch>
          </UserContext.Provider>
       </div>
    </Router>

  );
}


export default App;

