import React from 'react';
import Posts from './components/Posts';
import Header from './layout/Header';
import AddPost from './components/AddPost'

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="container">
          <Posts />
          <AddPost />
        </div>
      </div>
    </Provider>
  );
}

export default App;
