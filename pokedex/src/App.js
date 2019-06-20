import React from 'react';
import Header from './components/Header';
import Pokemon from './components/Pokemon';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import PokemonDetail from './components/PokemonDetail';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Pokemon} />
        <Route path="/pokemon/:no" exact component={PokemonDetail} />
      </Switch>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
