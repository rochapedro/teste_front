/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
import { createContext, useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';
import { useAlert } from 'react-alert';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const alert = useAlert();

  const isAuthenticated = !!user;

  async function singIn(data) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      body: JSON.stringify({
        user_name: data.user_name,
        password: data.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const response = await res.json();

    if (res.status != 200) {
      alert.error(response.error);
    } else {
      setCookie(null, 'token', response.token, {
        maxAge: 60 * 60 * 1,
        path: '/',
      });
      setUser(response.user);
      Router.push('/colaboradores');
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = AppProps;
