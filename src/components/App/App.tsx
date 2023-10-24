import logo from '../../assets/logo.svg';
import Footer from '../Footer/Footer';
import GroceriesList from '../GroceriesList/GroceriesList';
import Header from '../Header/header';

import './App.scss';

const groceries = ['farine', 'lait', 'oeuf', 'beurre'];

function App() {
  return (
    <div className="App">
      <Header />
      <GroceriesList list={groceries} />
      <Footer />
    </div>
  );
}

export default App;
