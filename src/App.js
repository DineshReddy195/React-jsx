import './App.css';

function App() {
  return (
    <div className="App">
      <div className='card'>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1421211957969960966/Vn7s-v3m_400x400.jpg' className='image' alt='pic'/>
        <h2>Alexandra Caulea</h2>
        <p>I enjoy drinking a cup of coffee everyday</p>
      </div>
      <div className='numbers'>
        <p>172</p>
        <p>47</p>
        <p>20</p>
      </div>
      <div className='social'>
        <h3>POSTS</h3>
        <h3>FOLLOWERS</h3>
        <h3>FOLLOWING</h3>
      </div>
      <div className='buttons'>
        <button className='btn'>FOLLOW</button>
        <button className='btn1'>MESSAGE</button>
      </div>
      </div>
    </div>
  );
}

export default App;
