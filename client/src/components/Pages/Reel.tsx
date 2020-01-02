import React from 'react';

const Reel: React.FC = () => {
  return (
    <div id={'reel'}>
      <div id={'header'}>
        <h1>Reel</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, quisquam distinctio exercitationem aliquid ipsa omnis cupiditate delectus pariatur. Sit in, tempore assumenda mollitia fugiat unde dicta repellendus, illo alias delectus cupiditate incidunt?</p>
      </div>

      <div id="video-wrapper">
        <iframe src="https://player.vimeo.com/video/131188216?api=1"></iframe>
      </div>
    </div>
  );
}

export default Reel;