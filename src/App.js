import Art from './Art';
import 'tachyons';
import ArtList from './ArtList';
import {robots} from './robots';

function App() {
  return (
    <div className="tc">
      <nav className='pa3 ph5-ns'>
        <h1 class="tc  db black-400 mb0 lh-title mw15 "> Robo Gods NFT Store</h1>
      </nav>
      <ArtList />
    </div>
  );
}

export default App;
