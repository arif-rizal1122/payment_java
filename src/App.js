import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
        
        <div className="">
            <Navigation />

            <div>
            <Homepage />  
            
            </div>
        
        </div>

    </div>
  );
}

export default App;
