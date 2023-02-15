import { ColorModeContext, useMode }  from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Topbar } from './scenes/global';

function App() {
  const [theme, colorMode] = useMode()


  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline />
      </ThemeProvider>
      <div className='app'>
        <main>
          <Topbar />
        </main>
      </div>
    </ColorModeContext.Provider>
    
  );
}

export default App;
