
import { Rotas } from './shared/routes/Rotas';
  import ThemeProvider from 'react-bootstrap/ThemeProvider'


export const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
      <Rotas></Rotas>
    </ThemeProvider>
    </div>
  );
}
