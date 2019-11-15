import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as signal from '@microsoft/signalr';

const App: React.FC = () => {
  const [message, setMessage] = useState('');

  Notification.requestPermission();
  console.log(Notification.permission);

  let connection = new signal.HubConnectionBuilder()
    .withUrl("https://localhost:44326/chatHub")
    .build();

  connection.start()
    .then(() => {
      //  connection.invoke("send", "Hello");
    });

  useEffect(() => {
    console.log("Žirafa")
  }, [message]);

  connection.on("send", (message) => {
    console.log(message)
    setMessage(message);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {message}
      </header>
    </div>
  );
}

export default App;
