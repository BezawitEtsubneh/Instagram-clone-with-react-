import React, {useState,useRef} from "react";
import './videocard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
function VideoCard({url,share,like,avatarSrc,song,channel}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  


return (
   
<div className="videocard">  
<VideoHeader/>
      <video
      ref={videoRef}
      onClick={videoPress}
         className="video_cardcss"
         src={url}/>
    <VideoFooter
    like={like}
    share={share}
    channel={channel}
    song={song}
    avatarSrc={avatarSrc}
    
    />
    </div>
    
  );
};

export default VideoCard