
import './App.css';
import { action,originals,trending } from './urls';

import Banner from './Components/Banner/Banner';
import NaveBar from './Components/NaveBar/NaveBar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
         <NaveBar/>
         <Banner url={trending}/>
         <RowPost url={originals} title='Netflix Originals'/>
         <RowPost url={action} title='Action' isSmall={true}/>
         
    </div>
  );
}

export default App;
