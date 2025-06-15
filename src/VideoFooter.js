import React from 'react';
import  './VideoFooter.css';
import { Avatar,Button } from '@mui/material';
import Ticker from 'react-ticker';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
function VideoFooter({url,share,like,avatarSrc,song,channel}) {
  return (
    <div className="videofooter">
        <div className='videofooter_text'>
        <Avatar src={avatarSrc}/>
        <div className='videofooter_button'></div>
       <h3>{channel}.<Button>Follow</Button></h3>
        <div className='videofooter_ticker'>
          <MusicNoteIcon
          className="videofooter_icon"/>
          <div/>
                   {/* <Ticker mode="smooth">
            {() => (
              <div className="ticker_content">
                <h3>{song}</h3>  
              </div>
            )}
          </Ticker> */}
          <div className='videofooter_action'>
          <div className='videofooter_action_left'>
          <FavoriteIcon fontSize='large'/>
          <CommentIcon  fontSize='large'/>
          <SendIcon   fontSize='large'/>
          <MoreHorizIcon fontSize='large'/>
          </div>
          <div className='videofooter_action_right'>
            <div className='statheader'>
            <div className='stat'>
              <FavoriteIcon/>
              <p>{like}</p>
            </div>
            <div className='stat'>
              <CommentIcon/>
          <p>{share}</p>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default VideoFooter