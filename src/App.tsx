import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import theme from 'theme';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <>
              <Route path="/Home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Home />} />
            </>,
          ),
          { basename: '/' },
        )}
      />
    </ChakraProvider>
  );
};

export default App;
