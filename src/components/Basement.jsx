import React, { useState, useEffect, useCallback } from 'react'
import basement from "../assets/przyziemie.svg";
import sektorA from "../assets/ground/sektorA.svg";
import sektorB from "../assets/ground/sektorA.svg";
import sektorC from "../assets/ground/sektorC.svg";
import sektorD from "../assets/ground/sektorD.svg";
import sektorE from "../assets/ground/sektorA.svg";
import sektorF from "../assets/ground/sektorA.svg";
import sektorG from "../assets/ground/sektorA.svg";
import sektorH from "../assets/ground/sektorA.svg";
import sektorJ from "../assets/ground/sektorA.svg";
import sektorK from "../assets/ground/sektorK.svg";
import closeBtn from '../assets/ground/close-btn.svg';
import './styles-svg.css'
import { useMediaQuery } from 'react-responsive';
import Loader from './Loader';

const Basement = ({ setSelectedRoom, setInfo }) => {
  const sektorImages = {
    A: sektorA,
    B: sektorB,
    C: sektorC,
    D: sektorD,
    E: sektorE,
    F: sektorF,
    G: sektorG,
    H: sektorH,
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

      }
    },
    sectorB: {
      title: 'Sektor B',
      info: {
        
      }
    },
    sectorC: {
      title: 'Sektor C',
      info: {
        
      }
    },
    sectorD: {
      title: 'Sektor D',
      info: {
        
      }
    },
    sectorE: {
      title: 'Sektor E',
      info: {
        
      }
    },
    sectorF: {
      title: 'Sektor F',
      info: {
        
      }
    },
    sectorG: {
      title: 'Sektor G',
      info: {
        
      }
    },
    sectorH: {
      title: 'Sektor H',
      info: {
        
      }
    },
    sectorJ: {
      title: 'Sektor J',
      info: {
        
      }
    },
    sectorK: {
      title: 'Sektor K',
      info: {
        
      }
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
        {loading && <Loader />}
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
    <svg width={isMobile ? '414' : '550'} height={isMobile ? '490' : '642'} xmlns="http://www.w3.org/2000/svg" onClick={(e) => handleRoomClick(e.target.id)}>
      {!isSektor ? <image height="100%" width="100%" href={basement} /> : null}
      {isMobile ?
        <>
          <rect id="H" x="318" y="305" width="33" height="78" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('H')}>
            <title>
              {roomInfo["sectorH"].title}
            </title>
          </rect>
          <rect id="F" x="318" y="197" width="33" height="77" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('F')}>
            <title>
              {roomInfo["sectorF"].title}
            </title>
          </rect>
          <rect id="D" x="318" y="87" width="33" height="78" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('D')}>
            <title>
              {roomInfo["sectorD"].title}
            </title>
          </rect>
          <rect id="G" x="242" y="274" width="77" height="35" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('G')}>
            <title>
              {roomInfo["sectorG"].title}
            </title>
          </rect>
          <rect id="E" x="242" y="165" width="76" height="33" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('E')}>
            <title>
              {roomInfo["sectorE"].title}
            </title>
          </rect>
          <rect id="C" x="242" y="55" width="77" height="34" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('C')}>
            <title>
              {roomInfo["sectorC"].title}
            </title>
          </rect>
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
          <rect id="B" x="148" y="88" width="40" height="107" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="B" x="22" y="28" width="30" height="30" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <circle id="B" cx="72" cy="43" r="22" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </circle>
          <rect id="K" x="360" y="370" width="36" height="90" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('K')}>
            <title>
              {roomInfo["sectorK"].title}
            </title>
          </rect>
        </>
         :
         <>
          <rect id="A" x="55" y="214" width="102" height="44" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('A')}>
            <title>
              {roomInfo["sectorA"].title}
            </title>
          </rect>
          <rect id="B" x="30" y="72" width="270" height="40" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="B" x="198" y="113" width="52" height="145" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="B" x="30" y="30" width="90" height="50" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="C" x="321" y="70" width="103" height="45" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('C')}>
            <title>
              {roomInfo["sectorC"].title}
            </title>
          </rect>
          <rect id="D" x="422" y="113" width="44" height="103" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('D')}>
            <title>
              {roomInfo["sectorD"].title}
            </title>
          </rect>
          <rect id="E" x="321" y="215" width="103" height="43" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('E')}>
            <title>
              {roomInfo["sectorE"].title}
            </title>
          </rect>
          <rect id="F" x="422" y="257" width="44" height="104" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('F')}>
            <title>
              {roomInfo["sectorF"].title}
            </title>
          </rect>
          <rect id="G" x="321" y="360" width="103" height="43" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('G')}>
            <title>
              {roomInfo["sectorG"].title}
            </title>
          </rect>
          <rect id="H" x="422" y="401" width="44" height="103" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('H')}>
            <title>
              {roomInfo["sectorH"].title}
            </title>
          </rect>
          <rect id="J" x="321" y="503" width="103" height="43" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('J')}>
            <title>
              {roomInfo["sectorJ"].title}
            </title>
          </rect>
          <rect id="K" x="482" y="489" width="50" height="120" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('K')}>
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
              x={isMobile ? '380' : '515'}
              y="10"
              href={closeBtn}
              onClick={handleCloseSektor}
              className="close-btn"
            />
          </>
          :
          null}
    </svg>
  )
}

export default React.memo(Basement)
