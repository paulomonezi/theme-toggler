import './App.css';
import { Card } from './card/card';
import { ThemeTogglerButton } from './components/theme-toggler.button/theme-toggler-button';
import { ThemeProvider } from './contexts/theme-context';

function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
      <Card/>
      <Card/>
    </ThemeProvider>
  );
}

export default App;
