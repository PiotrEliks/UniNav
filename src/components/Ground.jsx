import React, { useState, useEffect, useCallback } from 'react';
import ground from "../assets/parter_colors.svg";
import sektorA from "../assets/ground/sektorA.svg";
import sektorB from "../assets/ground/sektorB.svg";
import sektorC from "../assets/ground/sektorC.svg";
import sektorD from "../assets/ground/sektorD.svg";
import sektorE from "../assets/ground/sektorE.svg";
import sektorF from "../assets/ground/sektorF.svg";
import sektorG from "../assets/ground/sektorG.svg";
import sektorH from "../assets/ground/sektorH.svg";
import sektorI from "../assets/ground/sektorI.svg";
import sektorJ from "../assets/ground/sektorJ.svg";
import sektorK from "../assets/ground/sektorK.svg";
import closeBtn from '../assets/ground/close-btn.svg';
import './styles-svg.css';
import { useMediaQuery } from 'react-responsive';
import Loader from './Loader';

const Ground = ({ setSelectedRoom, setInfo }) => {
  const sektorImages = {
    A: sektorA,
    B: sektorB,
    C: sektorC,
    D: sektorD,
    E: sektorE,
    F: sektorF,
    G: sektorG,
    H: sektorH,
    I: sektorI,
    J: sektorJ,
    K: sektorK,
  };

  useEffect(() => {
    Object.values(sektorImages).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [sektorImages]);

  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  const roomInfo = {
    sectorA: {
      title: 'Sektor A',
      info: {
        "4": "Pokój konferencyjny",
        "5": "Sala szkoleniowa",
        "6": "Biuro zarządu",
        "7": "Sala spotkań",
        "8": "Laboratorium",
        "9": "Sala wykładowa",
        "12": "Pokój administracyjny",
        "13": "Sala warsztatowa",
        "14": "Pokój socjalny",
        "15/16": "Sala konferencyjna",
        "17": "Sala testowa",
      }
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
      title: 'Sektor I',
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
    const roomKey = `sector${roomId}`;
    if (roomInfo[roomKey]) {
      setSelectedRoom(roomKey);
      setInfo(roomInfo[roomKey]);
    }
  };

  const [sektor, setSektor] = useState('');
  const [isSektor, setIsSektor] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDisplaySektor = useCallback((selectedSektor) => {
    setSektor(selectedSektor);
    setIsSektor(true);
    setLoading(true);
  }, []);

  const handleCloseSektor = useCallback(() => {
    setSektor('');
    setInfo(null);
    setIsSektor(false);
    setLoading(false);
  }, [setInfo]);

  const renderSektor = () => {
    if (!sektor) return null;
    const ImageComponent = sektorImages[sektor];
    if (!ImageComponent) return null;
    return  (
      <>
        {loading && <Loader className="sector-loader" />}
        <image
          height="100%"
          width="100%"
          href={ImageComponent}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </>
    )
  };

  return (
    <svg
      width={isMobile ? '414' : '750'}
      height={isMobile ? '490' : '842'}
      xmlns="http://www.w3.org/2000/svg"
      onClick={(e) => handleRoomClick(e.target.id)}
    >
      {!isSektor ? <image height="100%" width="100%" href={ground} /> : null}
      {isMobile ?
        <>
          <rect id="A" x="41" y="165" width="77" height="33" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('A')}>
            <title>
              {roomInfo["sectorA"].title}
            </title>
          </rect>
          <rect id="B" x="22" y="57" width="205" height="31" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="C" x="242" y="55" width="77" height="34" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('C')}>
            <title>
              {roomInfo["sectorC"].title}
            </title>
          </rect>
          <rect id="D" x="318" y="87" width="33" height="78" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('D')}>
            <title>
              {roomInfo["sectorD"].title}
            </title>
          </rect>
          <rect id="E" x="242" y="165" width="76" height="33" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('E')}>
            <title>
              {roomInfo["sectorE"].title}
            </title>
          </rect>
          <rect id="F" x="318" y="197" width="33" height="77" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('F')}>
            <title>
              {roomInfo["sectorF"].title}
            </title>
          </rect>
          <rect id="G" x="242" y="274" width="77" height="35" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('G')}>
            <title>
              {roomInfo["sectorG"].title}
            </title>
          </rect>
          <rect id="H" x="318" y="305" width="33" height="78" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('H')}>
            <title>
              {roomInfo["sectorH"].title}
            </title>
          </rect>
          <rect id="I" x="242" y="382" width="76" height="33" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('I')}>
            <title>
              {roomInfo["sectorI"].title}
            </title>
          </rect>
          <rect id="J" x="242" y="470" width="77" height="34" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('J')}>
            <title>
              {roomInfo["sectorJ"].title}
            </title>
          </rect>
          <rect id="K" x="360" y="370" width="36" height="90" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('K')}>
            <title>
              {roomInfo["sectorK"].title}
            </title>
          </rect>
        </>
        :
        <>
          <rect id="A" x="75" y="275" width="139" height="60" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('A')}>
            <title>
              {roomInfo["sectorA"].title}
            </title>
          </rect>
          <rect id="B" x="40" y="82" width="370" height="54" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="B" x="269" y="136" width="73" height="195" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="B" x="40" y="30" width="60" height="52" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <circle id="B" cx="132" cy="53" r="38" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </circle>
          <rect id="C" x="435" y="80" width="143" height="58" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('C')}>
            <title>
              {roomInfo["sectorC"].title}
            </title>
          </rect>
          <rect id="D" x="575" y="136" width="61" height="141" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('D')}>
            <title>
              {roomInfo["sectorD"].title}
            </title>
          </rect>
          <rect id="E" x="435" y="277" width="143" height="57" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('E')}>
            <title>
              {roomInfo["sectorE"].title}
            </title>
          </rect>
          <rect id="F" x="575" y="334" width="61" height="141" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('F')}>
            <title>
              {roomInfo["sectorF"].title}
            </title>
          </rect>
          <rect id="G" x="435" y="474" width="143" height="57" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('G')}>
            <title>
              {roomInfo["sectorG"].title}
            </title>
          </rect>
          <rect id="H" x="575" y="530" width="61" height="143" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('H')}>
            <title>
              {roomInfo["sectorH"].title}
            </title>
          </rect>
          <rect id="I" x="410" y="558" width="85" height="85" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('I')}>
            <title>
              {roomInfo["sectorI"].title}
            </title>
          </rect>
          <rect id="J" x="435" y="670" width="143" height="59" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('J')}>
            <title>
              {roomInfo["sectorJ"].title}
            </title>
          </rect>
          <rect id="K" x="650" y="650" width="74" height="165" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('K')}>
            <title>
              {roomInfo["sectorK"].title}
            </title>
          </rect>
        </>
      }
      {isSektor ?
        <>
          {renderSektor()}
          <image
            height="20"
            width="20"
            x={isMobile ? '380' : '715'}
            y="10"
            href={closeBtn}
            onClick={handleCloseSektor}
            className="close-btn"
          />
        </>
        :
        null
      }
    </svg>
  )
}

export default React.memo(Ground);
