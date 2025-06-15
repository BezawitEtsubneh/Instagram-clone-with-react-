import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import './VideoHeader.css';
function VideoHeader() {
  return (
    <div className="videoheader">
      {/* <ThemeProvider theme={defaultTheme}>   Wrap with ThemeProvider */}
        <ArrowBackIosIcon />
        <h3>Reels</h3>
        <PhotoCameraIcon />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default VideoHeader;


