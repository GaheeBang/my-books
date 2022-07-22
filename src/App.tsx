import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from './pages/Edit';
import Detail from './pages/Detail';
import Add from './pages/Add';
import Signin from './pages/Signin';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import { ErrorBoundary } from 'react-error-boundary';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';

function App() {
  return(
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Routes>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/book/:id" element={<Detail/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
