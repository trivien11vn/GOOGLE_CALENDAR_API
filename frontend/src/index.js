import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createClient} from '@supabase/supabase-js'
import {SessionContextProvider} from '@supabase/auth-helpers-react'


const supabase = createClient(
  "https://ruhozgzhukhjcdnpbozz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1aG96Z3podWtoamNkbnBib3p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4NTY0OTQsImV4cCI6MjA0MjQzMjQ5NH0.kjgtbUcPKp7pXTyw80SUTAD-dYxBhcLTrwxCn5b-38Q"
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
