import { ColorModeContext, useMode }  from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Topbar } from './scenes/global';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import Form from './scenes/form';
import { Sidebar } from './scenes/global/sidebar';
import Team from './scenes/team';
import Contact from './scenes/contact';

function App() {
  const [theme, colorMode] = useMode()


  return (
    <ColorModeContext.Provider value={colorMode as any}>
        <ThemeProvider theme={theme as any}>
          <CssBaseline />
          <div className='app'>
            <Sidebar />
            <main className='content'>
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/form" element={<Form />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
