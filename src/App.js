// import './Styles/App.css';
import Header from './Components/Header'
import Body from './Components/Body';
import { FilterProvider } from './data/FilterContext'

const App = () => {
  return (
    <div className="App">
      <FilterProvider>
        <Header/>
        <Body/>  
      </FilterProvider>
    </div>
  );
}

export default App;