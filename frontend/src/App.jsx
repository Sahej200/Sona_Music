import React, { useContext, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);

  // set tab title once on load
  useEffect(() => {
    document.title = "Sona Music";
  }, []);

  return (
    <div className='h-screen bg-black'>
      {
        songsData.length !== 0
          ? <>
              <div className='h-[90%] flex'>
                <Sidebar />
                <Display />
              </div>
              <Player />
            </>
          : ""
      }

      <audio ref={audioRef} src={track ? track.file : ""} preload='auto'></audio>
    </div>
  )
}

export default App
