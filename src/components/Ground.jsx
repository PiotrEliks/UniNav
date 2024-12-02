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

      }
    },
    sectorB: {
      title: 'Sektor B',
      info: {
        "1": "Salka językowa",
        "6": "Sala dydaktyczna",
        "7": "Sala dydaktyczna",
        "8": "Sala dydaktyczna",
        "9": "Sala dydaktyczna",
        "10": "Sala dydaktyczna",
        "11": "Sala dydaktyczna",
        "12": "Sala dydaktyczna",
        "13": "Sala dydaktyczna",
        "14": "Sala dydaktyczna",
      }
    },
    sectorC: {
      title: 'Sektor C',
      info: {
        "1": "Biuro Obsługi Wydziału / Main Office - zaplecze techniczne / technical facilities",
        "2": "Biuro Obsługi Wydziału / Main Office - Dziekan / Dean - prof. dr hab. Ireneusz Weymann",
        "3": "Biuro Obsługi Wydziału / Main Office - Kierownik / Head - mgr Katarzyna Panek",
        "4": "Biuro Obsługi Wydziału / Main Office - obciążenia dydaktycze, plany zajęć / schedule - mgr inż. Karolina Czaronek",
        "5": "Prodziekan ds. organizacyjno-finansowych / Vice-Dean for Organizational and Financial Affairs - prof. UAM dr hab. Przemysław Bartczak, Kierownik Studiów Doktoranckich / Head of Doctoral Sytudies - prof. dr hab. Sławiomir Breiter",
        "6": "Prodziekan ds. naukowych / Vice-Dean for Research - prof. UAM dr hab. Bartłomiej Graczykowski",
        "7": "Biuro Obsługi Wydziału / Main Office - punkt kancelaryjny, delegacje krajowe i zagraniczne / office point, delegation - mgr Anna Binert",
        "8": "Biuro Obsługi Wydziału / Main Office - Specjalista ds. finansowych / Finance Specialist - mgr Joanna Kubicka, mgr Grażyna Ratajczak-Wójcik",
        "12/13": "Biuro Obsługi Studentów / Students Services Office - Kierowniczka / Office Manager - mgr Ewa Pawelczyk, mgr Anna Kolańczyk-Marszałek, mgr Natalia Kupis [pn./Mo. 9:00-17:00, wt.-czw./Tu.-Thu. 9:00-15:00, pt./Fr zamknięte/closed]",
        "14": "Prodziekan ds. studenckich i kształcenia / Vice-Dean for Student Affairs and Teaching - prof. UAM dr hab. Aneta Woźniak-Braszak",
        "19": "Sala seminaryjna",
      }
    },
    sectorD: {
      title: 'Sektor D - Laboratorium Fizyki Widzenia i Optometrii',
      info: {
        "1": "Magazyn, salka seminaryjna",
        "2": "St. Wykładowca - dr Robert Szuba, St. Wykładowca - mgr Sławomin Nogaj",
        "3": "St. Wykładowca - dr Sylwia Kropacz-Sobkowiak, St. Wykładowca dr Alicja Brenk-Krakowska",
        "4": "Lekarz neurolog prof. UAM dr hab. Krzysztod Michalak, St. Wykładowca - dr Zenon Woźniak",
        "5": "prof. UAM dr hab. Anna Przekoracka-Krawczyk, prof. UAM dr Rob van der Lubbe, adiunkt dr Monika Wojtczak-Kwaśniewska, St. Wykładowca dr Jacek Zabel",
        "6": "Biuro Obsługi Wydziału / Main Office - programy mobilności / mobility programmes - mgr Agnieszka Bobowska-Chełminiak",
        "7": "Biuro Obsługi Wydziału / Main Office - sprawozdawczość / reporting - Karol Frankowski",
        "8": "Biuro Obsługi Wydziału / Main Office - portale internetowe / websites - mgr Weronika Kucia",
        "9": "Biuro Obsługi Wydziału / Main Office - sala seminaryjna / seminar room ",
        "11": "Pracownia optyki okularowej - sala ćwiczeń",
        "12": "Pracownia optyki okularowej - sala ćwiczeń",
        "13": "Pracownia optometryczna - sala ćwiczeń",
        "14": "Pracownia optometryczna - sala ćwiczeń",
        "15": "Pracownia optometryczna - sala ćwiczeń",
        "16": "Kierownik LFWIO - prof. dr hab. Ryszard Naskręcki",
        "17": "St. Wykładowca dr Monika Czaińska, St. Wykładowca dr paulina Pyżalska, Wykładowca mgr Rozalia Molenda",
      }
    },
    sectorE: {
      title: 'Sektor E',
      info: {
        "2": "doktoranci - mgr Maciej Dymczyk, mgr Maria Padurska, mgr monika Ciurko, mgr Rozalia Żak",
        "3/4": "Laboratorium Pomiarowe OCT, USG/TMS",
        "5": "Pracownia metod niejonizujących w diagnostyce medycznej",
        "6": "prof. dr hab. Henryk Szydłowski",
        "7": "zyrcon",
        "8": "dr Iwona Iwaszkiewicz-Kostka. dr Krzystof Gębura",
        "10": "Rada Samorządu Studentó Wydziału Fizyki",
        "14": "Sala seminaryjna",
        "15": "Filami",
        "16": "Filami",
        "17": "Filami",
        "18": "Laboratorium Dydaktyki Fizyki",
        "19": "Laboratorium Dydaktyki Fizyki",
        "20": "Laboratorium Dydaktyki Fizyki",
      }
    },
    sectorF: {
      title: 'Sektor F',
      info: {
        "49": "Zaplecze techniczne",
        "52": "gł. specjalista Bartosz Wołejko",
        "55": "administrator grupy serwerów - mgr Michał Karlic",
        "56": "administrator grupy serwerów - mgr Maciej Światłowski",
        "57": "Serwerownia",
        "58": "Serwerownia",
        "60": "Laboratorium dydaktyczne - sieci i systemy komputerowe",
        "61": "Laboratorium dydaktyczne",
        "62": "Laboratorium dydaktyczne",
        "63": "Laboratorium dydaktyczne",
        "64": "Laboratorium dydaktyczne",
        "65": "Zaplecze techniczne",
        "66": "Zaplecze techniczne",
      }
    },
    sectorG: {
      title: 'Sektor G - Laboratorium FIzyczne i Elektroniki Cyfrowej',
      info: {
        "67": "Laboratorium Chemiczne",
        "68": "Laboratorium Boifizyki Molekularnej",
        "69/70": "Laboratorium Biofizyki Molekularnej",
        "71": "Laboratorium Rentgenowskie",
        "72": "Laboratorium Rentgenowskie",
        "73": "Laboratorium Elektronowego Rezonansu Paramagnetycznego",
        "74": "Ciemnia Fotograficzna",
        "78": "Laboratorium Magnetycznego Rezonansu Jądrowego",
        "79/80": "Laboratorium Izotropowe",
        "81/82": "Laboratorium Optyki",
        "83": "Centrum automatyki budynkowej Siemens",
        "84": "Laboratorium Biofizyki Molekularnej",
      }
    },
    sectorH: {
      title: 'Sektor H - Laboratorium Fizyczne i Elektroniki Cyfrowej',
      info: {
        "29": "Biuro ds. realizacji projektu międzyuczlniane centrum nanobiomedyczne",
        "29A": "Centrum nanobiomedyczne - mgr Wojciech Przybecki",
        "29B": "prof. UAM dr hab. Kosma Szutkowski, specjalista dr inż. Artur Jędrzejczak",
        "29C": "Laboratorium Preparacyjne",
        "29D": "Chromatografia",
        "30": "NANO CARBO TECH",
        "31": "Biuro ds. realizacji projektu międzyuczlniane centrum nanobiomedyczne",
        "32": "dr Mikołaj Baranowski",
        "33": "prac. Inżynierujno-techniczny mgr Rafał Pietrzyk, prac. Inżynierujno-techniczny mgr Szymon Krakowski, prac. Inżynierujno-techniczny Mikołaj Czarnecki",
        "34": "prac. Inżynierujno-techniczny mgr Rafał Pietrzyk, prac. Inżynierujno-techniczny mgr Szymon Krakowski, prac. Inżynierujno-techniczny Mikołaj Czarnecki",
        "42": "Laboratorium dydaktyczne - system Linux",
        "43": "Magazyn",
        "44/45": "Laboratorium Nanotechnologii i Dielektryków",
        "46": "Laboratorium Elektroniki",  
        "47": "Centrum CNC",
      }
    },
    sectorI: {
      title: 'Sektor I',
      info: {
        "1": "Zaplecze techniczne",
        "4": "Zaplecze techniczne",
        "8": "Zaplecze techniczne",
      }
    },
    sectorJ: {
      title: 'Sektor J',
      info: {
        "8/7": "Biuro szkoły doktorskiej nauk społecznych - mgr Beata Nowak, dr Lidia Szutkowska, pn.-pt. 9:00-15:00",
        "9": "Biuro szkoły doktorskiej nauk humanistycznych - mgr inż. Anna Wojtera, pn.-pt. 9:00-15:00",
        "10": "Szkoła Doktorska Nauk Przyrodniczych - Małgorzata Klimorowska, pn.-czw. 9:00-13:00",
        "11": "Uczelniane Centrum Innowacji i Transferu Technologii UAM - dyrektor mgr Alicja Ostrowska-Leszczyńska",
        "12": "Uczelniane Centrum Innowacji i Transferu Technologii UAM - specjalista mgr Robert Flaszak",
        "13": "Uczelniane Centrum Innowacji i Transferu Technologii UAM - starszy specjalista mgr Małgorzata Marczak",
        "14": "Sekcja Operacyjna i Wsparcia Aplikacji Grantowych - specjalista mgr Aleksandra Dziadkowiec",
        "15": "Sekcja Operacyjna i Wsparcia Aplikacji Grantowych - starszy specjalista mgr Dorota Obiegała",
        "20": "Sekcja Operacyjna i Wsparcia Aplikacji Grantowych - koordynator mgr Magdalena Dylewska",
        "21": "Sekcja Operacyjna i Wsparcia Aplikacji Grantowych - specjalista dr Izabela Pruska",
        "22": "Laboratorium Elektroniki",
        "23/24": "Laboratorium Elektroniki",
        "25": "Laboratorium komputerowe",
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
    <svg
      width={isMobile ? '414' : '550'}
      height={isMobile ? '490' : '642'}
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
          <rect id="B" x="148" y="88" width="40" height="110" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="B" x="22" y="28" width="70" height="31" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('B')}>
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
          <rect id="I" x="227" y="320" width="45" height="48" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('I')}>
            <title>
              {roomInfo["sectorI"].title}
            </title>
          </rect>
          <rect id="J" x="242" y="382" width="76" height="33" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('J')}>
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
          <rect id="I" x="300" y="421" width="64" height="63" fill="transparent" className="pointer" onClick={() => handleDisplaySektor('I')}>
            <title>
              {roomInfo["sectorI"].title}
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
        null
      }
    </svg>
  )
}

export default React.memo(Ground);
