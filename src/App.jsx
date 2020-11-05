import PostPageMobile from './Components/postPageMobile';
import Navbar from './Navbar';
import Home from './Components/Home';
import TextWelcome from './Components/TextWelcome';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TextWelcome />
      <Home />
      <PostPageMobile />
    </div>
  );
}

export default App;
