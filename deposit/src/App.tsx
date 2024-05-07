import React from 'react';
import CustomizedTables from "./components/Table";
import { createTheme, ThemeProvider } from '@mui/material';
import "./App.module.css";

const theme = createTheme({
  typography: {
    fontFamily: [
      'IRANSans',
    ].join(','),
  },
  direction:"rtl"
});

function App() {
  //sample of subscribe to an event
  // (window as any).subscribe('mife-a', (msg:any) => {
  //   console.log('message inside deposit' , msg)
  // });
  return (
      <div className="app">
          <CustomizedTables/>
      </div>
  );
}

export default App;
