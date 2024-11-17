import React, { useState } from 'react'
import ground from "../assets/parter_with_colors.svg";
import sektorA from "../assets/ground/sektorA.svg";
import sektorB from "../assets/ground/sektorA.svg";
import sektorC from "../assets/ground/sektorC.svg";
import sektorD from "../assets/ground/sektorD.svg";
import sektorE from "../assets/ground/sektorA.svg";
import sektorF from "../assets/ground/sektorA.svg";
import sektorG from "../assets/ground/sektorA.svg";
import sektorH from "../assets/ground/sektorA.svg";
import sektorI from "../assets/ground/sektorA.svg";
import sektorJ from "../assets/ground/sektorA.svg";
import sektorK from "../assets/ground/sektorK.svg";
import closeBtn from '../assets/ground/close-btn.svg';
import './styles-svg.css'
import { useMediaQuery } from 'react-responsive';

const Ground = ({ setSelectedRoom, setInfo, showElevator }) => {

  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  const roomInfo = {
    sectorA: {
      title: 'Sektor A',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorB: {
      title: 'Sektor B',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorC: {
      title: 'Sektor C',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorD: {
      title: 'Sektor D',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorE: {
      title: 'Sektor E',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorF: {
      title: 'Sektor F',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorG: {
      title: 'Sektor G',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorH: {
      title: 'Sektor H',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorI: {
      title: 'Sektor C',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorJ: {
      title: 'Sektor J',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorK: {
      title: 'Sektor K',
      info: 'Sale: 1,2,3,4,5'
    },
  };

  const handleRoomClick = (roomId) => {
    setSelectedRoom(roomId);
    setInfo(roomInfo[roomId]);
  };

  const [sektor, setSektor] = useState('');
  const [isSektor, setIsSektor] = useState(false);

  const handleDisplaySektor = (selectedSektor) => {
    setSektor(selectedSektor);
    setIsSektor(true);
  };

  const handleCloseSektor = () => {
    setSektor('');
    setIsSektor(false);
  }

  const renderSektor = () => {
    switch (sektor) {
      case 'A':
        return <image height="100%" width="100%" href={sektorA} />;
      case 'B':
        return <image height="100%" width="100%" href={sektorB} />;
      case 'C':
        return <image height="100%" width="100%" href={sektorC} />;
      case 'D':
        return <image height="100%" width="100%" href={sektorD} />;
      case 'E':
        return <image height="100%" width="100%" href={sektorE} />;
      case 'F':
        return <image height="100%" width="100%" href={sektorF} />;
      case 'G':
        return <image height="100%" width="100%" href={sektorG} />;
      case 'H':
        return <image height="100%" width="100%" href={sektorH} />;
      case 'I':
        return <image height="100%" width="100%" href={sektorI} />;
      case 'J':
        return <image height="100%" width="100%" href={sektorJ} />;
      case 'K':
        return <image height="100%" width="100%" href={sektorK} />;
      default:
        return null;
    }
  };

  return (
    <svg width={isMobile ? '414' : '750'} height={isMobile ? '490' : '842'} xmlns="http://www.w3.org/2000/svg" onClick={(e) => handleRoomClick(e.target.id)}>
      {!isSektor ? <image height="100%" width="100%" href={ground} /> : null}
      {isMobile ?
        <>
          <rect id="sectorH" x="318" y="305" width="33" height="78" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('H')}>
            <title>
              {roomInfo["sectorH"].title}
            </title>
          </rect>
          <rect id="sectorF" x="318" y="197" width="33" height="77" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('F')}>
            <title>
              {roomInfo["sectorF"].title}
            </title>
          </rect>
          <rect id="sectorD" x="318" y="87" width="33" height="78" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('D')}>
            <title>
              {roomInfo["sectorD"].title}
            </title>
          </rect>
          <rect id="sectorG" x="242" y="274" width="77" height="35" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('G')}>
            <title>
              {roomInfo["sectorG"].title}
            </title>
          </rect>
          <rect id="sectorI" x="242" y="382" width="76" height="33" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('I')}>
            <title>
              {roomInfo["sectorI"].title}
            </title>
          </rect>
          <rect id="sectorE" x="242" y="165" width="76" height="33" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('E')}>
            <title>
              {roomInfo["sectorE"].title}
            </title>
          </rect>
          <rect id="sectorC" x="242" y="55" width="77" height="34" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('C')}>
            <title>
              {roomInfo["sectorC"].title}
            </title>
          </rect>
          <rect id="sectorA" x="41" y="165" width="77" height="33" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('A')}>
            <title>
              {roomInfo["sectorA"].title}
            </title>
          </rect>
          <rect id="sectorB" x="22" y="57" width="205" height="31" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="sectorB" x="148" y="88" width="40" height="107" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="sectorB" x="22" y="28" width="30" height="30" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <circle id="sectorB" cx="72" cy="43" r="22" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </circle>
          <rect id="sectorK" x="360" y="370" width="36" height="90" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('K')}>
            <title>
              {roomInfo["sectorK"].title}
            </title>
          </rect>
        </>
         :
          <>
            <rect id="sectorH" x="575" y="530" width="61" height="143" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('H')}>
              <title>
                {roomInfo["sectorH"].title}
              </title>
            </rect>
            <rect id="sectorF" x="575" y="334" width="61" height="141" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('F')}>
              <title>
                {roomInfo["sectorF"].title}
              </title>
            </rect>
            <rect id="sectorD" x="575" y="136" width="61" height="141" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('D')}>
              <title>
                {roomInfo["sectorD"].title}
              </title>
            </rect>
            <rect id="sectorG" x="435" y="474" width="143" height="57" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('G')}>
              <title>
                {roomInfo["sectorG"].title}
              </title>
            </rect>
            <rect id="sectorJ" x="435" y="670" width="143" height="59" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('J')}>
              <title>
                {roomInfo["sectorJ"].title}
              </title>
            </rect>
            <rect id="sectorI" x="410" y="558" width="85" height="85" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('I')}>
              <title>
                {roomInfo["sectorI"].title}
              </title>
            </rect>
            <rect id="sectorE" x="435" y="277" width="143" height="57" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('E')}>
              <title>
                {roomInfo["sectorE"].title}
              </title>
            </rect>
            <rect id="sectorC" x="435" y="80" width="143" height="58" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('C')}>
              <title>
                {roomInfo["sectorC"].title}
              </title>
            </rect>
            <rect id="sectorA" x="75" y="275" width="139" height="60" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('A')}>
              <title>
                {roomInfo["sectorA"].title}
              </title>
            </rect>
            <rect id="sectorB" x="40" y="82" width="370" height="54" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
              <title>
                {roomInfo["sectorB"].title}
              </title>
            </rect>
            <rect id="sectorB" x="269" y="136" width="73" height="195" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
              <title>
                {roomInfo["sectorB"].title}
              </title>
            </rect>
            <rect id="sectorB" x="40" y="30" width="60" height="52" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
              <title>
                {roomInfo["sectorB"].title}
              </title>
            </rect>
            <circle id="sectorB" cx="132" cy="53" r="38" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
              <title>
                {roomInfo["sectorB"].title}
              </title>
            </circle>
            <rect id="sectorK" x="650" y="650" width="74" height="165" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('K')}>
              <title>
                {roomInfo["sectorK"].title}
              </title>
            </rect>
            {showElevator &&
              <>
                <rect id="sectorK" x="607" y="297" width="10" height="10" fill="blue" className="pointer"/>
                <rect id="sectorK" x="607" y="492" width="11" height="11" fill="blue" className="pointer"/>
                <rect id="sectorK" x="607" y="690" width="10" height="10" fill="blue" className="pointer"/>
              </>
            }
          </>
        }
        {isSektor ?
          <>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              {renderSektor()}
              <image height="20" width="20" x={isMobile ? '380' : '715'} y="10" href={closeBtn} onClick={() => handleCloseSektor()} className="close-btn"/>
            </svg>
          </>
          :
          null}
    </svg>
  )
}

export default Ground
