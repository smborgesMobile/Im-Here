import Home from './src/screens/home';
import { StatusBar } from 'react-native';


// Export Default --> who will import dont need to add {} to specified with module will be imported.
// Export with Default --> Who will import need to specify with module is imported in your file.
export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#131016"
        translucent={true}
      />
      <Home />
    </>
  );
}