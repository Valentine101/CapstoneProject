// import './Styles/App.css';
import Header from './Components/Header'
import Body from './Components/Body';
import { FilterProvider } from './data/FilterContext'
import { PageProvider } from './data/PageContext';

const App = () => {
  return (
    <div className="App">
      <PageProvider>
        <FilterProvider>
          <Header/>
          <Body/>  
        </FilterProvider>
      </PageProvider>
    </div>
  );
}

export default App;