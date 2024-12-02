import React, { useState, useEffect, useCallback } from 'react'
import level1 from "../assets/pietro1.svg";
import sektorA from "../assets/ground/sektorA.svg";
import sektorC from "../assets/ground/sektorC.svg";
import sektorD from "../assets/ground/sektorD.svg";
import sektorE from "../assets/ground/sektorA.svg";
import sektorF from "../assets/ground/sektorA.svg";
import sektorG from "../assets/ground/sektorA.svg";
import sektorH from "../assets/ground/sektorA.svg";
import sektorJ from "../assets/ground/sektorA.svg";
import closeBtn from '../assets/ground/close-btn.svg';
import './styles-svg.css'
import { useMediaQuery } from 'react-responsive';
import Loader from './Loader';

const LevelOne = ({ setSelectedRoom, setInfo }) => {
  const sektorImages = {
    A: sektorA,
    C: sektorC,
    D: sektorD,
    E: sektorE,
    F: sektorF,
    G: sektorG,
    H: sektorH,
    J: sektorJ,
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
      title: 'Sektor A - Katedra Akustyki',
      info: {
        "103": "Centrum Neuronauki - prof. UAM dr hab. Michał Klichowski",
        "104": "Pracownia magisterska",
        "105": "Doktoranci - mgr Anna Pastusiak, mgr Maciej Buszkiewicz, mgr Szymon Błaszczyk",
        "106": "dr Karina Mrugalska-Handke, mgr Artur Duraj",
        "107": "mgr Bartłomiej Frank, mgr Jakub Mikołajczak, mgr Przemysław Ślużyński",
        "108": "mgr Jakub Bondek, mgr Jakub Dumanowski - doktorant",
        "109": "dr Jan Felcyn, mgr Eryk Kozłowski",
        "110": "prof. dr hab. Anna Preis",
        "111": "mgr inż. Robert Gogol",
        "112": "dr Honorata Hafke-Dys",
        "113": "Magazyn",
        "116": "Pracownia Kształtowania Słuchu i Dźwięku",
        "118": "Pracownia Montażu Dźwięku",
        "119": "dr Michał Gałuszka, dr Tomasz Kaczmarek, dr Piotr Kokowski, dr Piotr Pękala",
        "120": "prof. UAM dr hab. Roman Gołębiewski",
        "121": "prof. dr hab. Rufin Makarewicz",
        "122": "prof. UAM dr hab. Ewa Skrodzka",
        "123": "dr Edyta Bogusz-Witczak, mgr Remigiusz Pyffel",
        "124": "Pomieszczenie odsłuchowe",
      }
    },
    sectorC: {
      title: 'Sektor C - Biblioteka',
      info: ""
    },
    sectorD: {
      title: 'Sektor D - Zakład Teorii Materii Skondensowanej',
      info: {
        "101": "Pracownia komputerowa",
        "102": "pokój doktorantów i magistrantów - dr Ziemowit Domański",
        "103": "adiunkt - dr hab. Andrzej Pawlak",
        "104": "prof. dr hab. Tadeusz Lulek",
        "105": "prof. zw. dr hab. Tomasz Kostyrko",
        "106": "dr hab. Tomasz Polak",
        "107": "prof. UAM dt hab. Ryszard Wojciechowski",
        "108": "Kierownik zakładu - prof. UAM dr hab. Konrad J. Kapcia",
        "109": "dr Marek Thomas",
        "110": "Pracownia komputerowa",
        "112": "mgr Aleksey Alekseev, mgr Agata Krzywicka, mgr Yelmer Zambrano Mena",
        "113": "prof. zw. dr hab. Leon Kowalewski",
        "114": "dr hab. Ravinda Chhajiany, dr Przemysław Grzybowski",
        "115": "prof. zw. dr hab. Michał Kurzyński",
        "116": "dr hab. Przemysław Chełminiak, dr Wojciech Czart",
        "117": "Kierownik Zakładu - prof. dr hab. Maciej Błaszczak",
        "118": "prof. UAM dr hab. Błażej Szablikowski",
        "119": "prof. UAM dr hab. Agnieszka Cichy",
        "120": "dr maciej Bąk, dr Mariusz Nogala, dr Tomacz Śluszarski",
      }
    },
    sectorE: {
      title: 'Sektor E - Zakład Elektronimi Kwantowej',
      info: {
        "101": "adiunkt - dr inż. Adam Glinka, doktorant - mgr Jacek Baranowski",
        "102": "prof. dr hab. Gotard Burdziński",
        "103": "prof. dr hab. Marcin Ziółek",
        "104": "dr Sanjay Sahare, dr Mykhailo Solovan",
        "105": "prof. UAM dr hab. Jacek Kubicki, dr Wojciech Gawełda",
        "106": "adiunkt - dr Mateusz Gierszewski",
        "107": "prof. UAM dr hab. Krzystof Dobek",
        "108": "doktorant - mgr Chinmai Mysorekar",
        "109": "Laboratorium chemiczne",
        "113": "Laboratorium Spektroskopii Stacjonarnej",
        "114": "Laboratorium Optyki Stosowanej",
        "116": "Laboratorium Nanosekundowej Absorpcji Przejściowej w zakresie UV-VIS",
        "117": "Laboratorium Fotowoltaiczne",
      }
    },
    sectorF: {
      title: 'Sektor F - Zakład Fizyki Biomedycznej',
      info: {
        "130": "mgr Michalina Wilkowska",
        "131": "prof. UAM dr hab. Ewa Banachowicz, dr hab. Dymytro Soloviov, dr Michał Taube, mgr Augustyn Moliński",
        "132": "dr Monika Makrocka-Rydzyk, mgr Adiana Żyła",
        "133": "dr Maria Dobies",
        "134": "dr Agnieszka Boś-Liedke, dr n. med. Adam Piotrowski",
        "135": "dr Zuzanna Pietralik-Molińska, dr. Daria Wojciechowska, mgr inż. Żaneta Kołodziejska",
        "136": "Kierownik zakładu - prof. dr hab. Maciej Kozak",
        "137": "prpf/ UAM dr hab. Zbigniew Fojud, mgr inż. Tomasz Jankowski",
        "149": "prof. UAM dr hab. Tomasz Piotrowski, mgr Julia Jakubowska-Ludwiczak",
        "150": "dr Marek Kempka",
        "202A": "mgr Joanna Maksim, mgr Joanna Patalas, mgr Karolina Rucińska",
      }
    },
    sectorG: {
      title: 'Sektor G',
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
    sectorH: {
      title: 'Sektor H',
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
    sectorJ: {
      title: 'Sektor J',
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
      {!isSektor ? <image height="100%" width="100%" href={level1} /> : null}
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
          <rect id="J" x="242" y="382" width="76" height="33" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('J')}>
            <title>
              {roomInfo["sectorJ"].title}
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
        </>
         :
          <>
            <rect id="A" x="55" y="214" width="102" height="44" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('A')}>
            <title>
              {roomInfo["sectorA"].title}
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

export default React.memo(LevelOne)
