import React, { useState } from 'react'
import basement from "../assets/przyziemie.svg";
import './styles-svg.css'
import { useMediaQuery } from 'react-responsive';

const Basement = ({ setSelectedRoom, setInfo }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  const roomInfo = {
    room1: 'Bufet',
    room2: 'Wejście B',
    room3: '3',
    room4: '4',
    room5: '5',
    room6: '6',
    room7: '7',
    room8: '8',
    room9: '9',
  };

  const handleRoomClick = (roomId) => {
    setSelectedRoom(roomId);
    setInfo(roomInfo[roomId]);
  };

  return (
    <svg width={isMobile ? '414' : '750'} height={isMobile ? '490' : '842'} xmlns="http://www.w3.org/2000/svg" onClick={(e) => handleRoomClick(e.target.id)}>
      <image height="100%" width="100%" href={basement} />
      {isMobile ? 
        <>
          <circle id="room1" cx="130" cy="265" r="17" fill="transparent" className="pointer">
            <title> 
              {roomInfo["room1"]}
            </title>
          </circle>
          <rect id="room2" x="250" y="483" width="15" height="25" fill="transparent" className="pointer">
            <title> 
              {roomInfo["room2"]}
            </title>
          </rect>
          <rect id="room3" x="276" y="495" width="13" height="25" fill="transparent" className="pointer">
            <title> 
              {roomInfo["room3"]}
            </title>
          </rect>
        </>
         :
          <>
            <circle id="room1" cx="303" cy="60" r="38" fill="transparent" className="pointer">
              <title>
                {roomInfo["room1"]}
              </title>
            </circle>
            <rect id="room2" x="582" y="565" width="27" height="55" fill="transparent" className="pointer">
              <title> 
                {roomInfo["room2"]}
              </title>
            </rect>
            <rect id="room3" x="639" y="590" width="28" height="58" fill="transparent" className="pointer">
              <title> 
                {roomInfo["room3"]}
              </title>
            </rect>
          </>
        }
    </svg>
  )
}

export default Basement
