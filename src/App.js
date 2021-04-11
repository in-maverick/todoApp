import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Home } from 'layouts';
import './App.css';
import { configureStore, loadState } from 'stores';
const preloadedState = loadState();
const store = configureStore(preloadedState);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Home />
      </div>
    </StoreProvider>
  );
}
export default App;
