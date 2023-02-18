import AutoComplete from './components/auto-complete-search';
import DrawMap from './components/map';
import './styles/index.css';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="place-explorer-tool">
      <AutoComplete />
      <DrawMap />
    </div>
    </Provider>
  );
}

export default App;