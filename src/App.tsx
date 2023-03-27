import { ColorModeContext, useMode }  from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Topbar } from './scenes/global';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import Form from './scenes/form';
import { Sidebar } from './scenes/global/sidebar';
import Team from './scenes/team';
import Contact from './scenes/contact';
import Invoices from './scenes/invoices';
import Calendar from './scenes/calendar';
import Faq from './scenes/faq';
import Bar from './scenes/bar';
import Pie from './scenes/pie';
import Line from './scenes/line';
import Graphy from './scenes/geography';

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
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/graphy" element={<Graphy />} />
                <Route path="/faq" element={<Faq />} /> 
              </Routes>
            </main>
          </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
