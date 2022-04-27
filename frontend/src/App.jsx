import './styles/main.scss';

import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { Home } from './views/Home';

function App() {
    return (
        <div className="App">
            <AppHeader></AppHeader>
            <Home></Home>
            <AppFooter></AppFooter>
        </div>
    );
}

export default App;
