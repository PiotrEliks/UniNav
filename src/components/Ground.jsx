import React, { useState } from 'react'
import ground from "../assets/parter.svg";
import './styles-svg.css'
import { useMediaQuery } from 'react-responsive';

const Ground = ({ setSelectedRoom, setInfo }) => {

  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  const roomInfo = {
    room1: 'Audytorium Maximum im. prof. Franciszka Kaczmarka',
    room2: 'Audytorium Zachodnie',
    room3: 'Audytorium Wschodnie',
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
      <image height="100%" width="100%" href={ground} />
      {isMobile ? 
        <>
          <rect id="room1" x="318" y="305" width="33" height="78" fill="transparent" className="pointer">
            <title> 
              {roomInfo["room1"]}
            </title>
          </rect>
          <rect id="room2" x="318" y="197" width="33" height="77" fill="transparent" className="pointer">
            <title> 
              {roomInfo["room2"]}
            </title>
          </rect>
          <rect id="room2" x="318" y="87" width="33" height="78" fill="transparent" className="pointer">
            <title> 
              {roomInfo["room2"]}
            </title>
          </rect>
          <rect id="room3" x="242" y="274" width="77" height="35" fill="transparent" className="pointer">
            <title> 
              {roomInfo["room3"]}
            </title>
          </rect>
          <rect id="room3" x="242" y="382" width="76" height="33" fill="transparent" className="pointer">
            <title> 
              {roomInfo["room3"]}
            </title>
          </rect>
          <rect id="room3" x="225" y="321" width="48" height="46" fill="transparent" className="pointer">
            <title> 
              {roomInfo["room3"]}
            </title>
          </rect>
          <rect id="room3" x="242" y="165" width="76" height="33" fill="transparent" className="pointer">
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

export default Ground
