import React from 'react';
import './globals.css'
import Header from './header';
import Search from './search.js';
import Grid from './grid.js';

export default function Home() {
    return (
        <>
            <Header/>
            <Search/>
            <Grid/>
        </>
    );
  };

