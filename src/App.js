import './App.css';

function App() {
  return (
    <div className="App">
      <div className='box1'>
        <h2>Join our community</h2>
        <h3>30-day hassie-free money back guarantee</h3>
        <p>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developer who are serius about honing their skills</p>
      </div>
      <div className='box2'>
        <h2>Monthly Subcription</h2>
        <div className='price-container'>
          <span className='price'>$29</span>
          <h3>per month</h3>
        </div>
        <p>Full access for less than $1 a day</p>
        <button className='btn-sign-up'>Sign Up</button>
      </div>
      <div className='box3'>
        <h2>Why Us</h2>
        <p>tutorials by industry expert Peer & expert code review Coding Excercises Access to our github repos Community forum Flashcard decks new videos every week</p>
      </div>
    </div>
  );
}

export default App;
