import './App.css';
import VideoCard from './VideoCard';


function App() {
  return (
    <div className="app">
      <h1>LETS BUILD INSTAGRAM REEL CLONE!</h1>
      <div className="app_top">
        {/*ig image */}
        <img className="app_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        alt=""/>
        {/*reel text */}
        <h1>REELS</h1>
      </div>
    <div className="app_videos">
      {/*scrollable videos */}
    
      <VideoCard
      avatarSrc='https://picsum.photos/200/300'
      channel='bezawitchannel'
      like={234}
      share={145}
      song='song-maria carie'
      url='https://www.w3schools.com/html/mov_bbb.mp4'
       />
      <VideoCard/>
      <VideoCard/>
    </div>
    </div>

    
  );
}

export default App;
