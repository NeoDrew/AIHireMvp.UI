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
import { AuthProvider } from 'utils';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
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
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
