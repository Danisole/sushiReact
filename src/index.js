import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Style.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette:{
    primary: {
      main: "#EOD8CB"},
      
    secondary:{
      main:"#ff1616"},

    text:{
      primary:"393d3f"
    }
      
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
     <App />
  </ThemeProvider>
   
  
);


