import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { store } from "./store/configureStore";
import MainContent from "./screens/mainContent";


function App() {

  return (
    <Provider store={store}>
      <MainContent></MainContent>
    </Provider>
  );
}

export default App;
