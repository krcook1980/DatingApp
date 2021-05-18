import React, { useState } from "react";
import Login from './pages/login';
import useLocalStorage from '../src/';
import Dashboard from '../src/components/Dashboard'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContactsProvider } from "./contexts/contactsProvider";
import { ConversationProvider } from './contexts/conversationProvider';
import { SocketProvider } from './contexts/SocketProvider';
import SignupForm from './pages/SignupForm'

{/* <Login onIdSubmit={setId} onPwdSubmit={setPassword} /> */ }
function App() {
  // const [ID, setId] = useState();
  // const id = "Crazy"
  // const [password, setPassword] = useState();
  // const dashboard = (
  //   <SocketProvider id={id}>
  //     <ContactsProvider>
  //       <ConversationProvider id={id}>
  //         <Dashboard id={id} />
  //       </ConversationProvider>
  //     </ContactsProvider>
  //   </SocketProvider >
  // )

  return (
    // id ? dashboard : <Login onSubmit={setId} />
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/SignupForm" component={SignupForm} />
      </Switch>
    </Router>
  );
}


export default App;

