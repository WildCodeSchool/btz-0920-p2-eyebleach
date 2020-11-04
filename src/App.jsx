import PostPageMobile from './Components/postPageMobile';
import Navbar from './Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import BodyHP from './Components/BodyHP';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyHP />
      <PostPageMobile />
    </div>
  );
}

export default App;
