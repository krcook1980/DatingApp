import React from "react";
import Login from './pages/login';
import Dashboard from '../src/components/Dashboard'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContactsProvider } from "./contexts/contactsProvider";
import { ConversationProvider } from './contexts/conversationProvider';
import { SocketProvider } from './contexts/SocketProvider';
import Home from './pages/Home';
import SignupForm from './pages/SignupForm';
import Settings from './components/Settings.js'


function App() {
  // const [Id, setId] = useState();
  const Id = "60a2cdb0745bca35843bedb2"
  // const [password, setPassword] = useState();
  const dashboard = (
    <SocketProvider Id={Id}>
      <ContactsProvider Id={Id}>
        <ConversationProvider id={Id}>
          <Dashboard Id={Id} />
        </ConversationProvider>
      </ContactsProvider>
    </SocketProvider >
  )

  return (
    <Router basename={process.env.PUBLIC_URL}>
        <div>
               <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/Home' component={Home}/>
                <Route exact path='/Dashboard'>{dashboard}</Route>
                <Route exact path='/SignupForm' component={SignupForm} />
                <Route exact path='/Settings' component={Settings} />
              </Switch>
       </div>
    </Router>

  );
}


export default App;

