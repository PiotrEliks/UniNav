import React, { useState } from 'react'
import ground from "../assets/parter_with_colors.svg";
import './styles-svg.css'
import { useMediaQuery } from 'react-responsive';

const Ground = ({ setSelectedRoom, setInfo, showElevator }) => {

  const isMobile = useMediaQuery({ query: '(max-width: 1200px)' });

  const roomInfo = {
    sectorH: {
      title: 'Sektor H',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorF: {
      title: 'Sektor F',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorD: {
      title: 'Sektor D',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorG: {
      title: 'Sektor G',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorJ: {
      title: 'Sektor J',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorI: {
      title: 'Sektor I',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorE: {
      title: 'Sektor E',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorC: {
      title: 'Sektor C',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorA: {
      title: 'Sektor A',
      info: 'Sale: 1,2,3,4,5'
    },
    sectorB: {
      title: 'Sektor B',
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

  return (
    <svg width={isMobile ? '414' : '750'} height={isMobile ? '490' : '842'} xmlns="http://www.w3.org/2000/svg" onClick={(e) => handleRoomClick(e.target.id)}>
      <image height="100%" width="100%" href={ground} />
      {isMobile ?
        <>
          <rect id="sectorH" x="318" y="305" width="33" height="78" fill="transparent" className="pointer" onClick={() =>console.log(roomInfo["sectorH"].title)}>
            <title>
              {roomInfo["sectorH"].title}
            </title>
          </rect>
          <rect id="sectorF" x="318" y="197" width="33" height="77" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorF"].title}
            </title>
          </rect>
          <rect id="sectorD" x="318" y="87" width="33" height="78" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorD"].title}
            </title>
          </rect>
          <rect id="sectorG" x="242" y="274" width="77" height="35" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorG"].title}
            </title>
          </rect>
          <rect id="sectorI" x="242" y="382" width="76" height="33" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorI"].title}
            </title>
          </rect>
          <rect id="sectorE" x="242" y="165" width="76" height="33" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorE"].title}
            </title>
          </rect>
          <rect id="sectorC" x="242" y="55" width="77" height="34" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorC"].title}
            </title>
          </rect>
          <rect id="sectorA" x="41" y="165" width="77" height="33" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorA"].title}
            </title>
          </rect>
          <rect id="sectorB" x="22" y="57" width="205" height="31" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="sectorB" x="148" y="88" width="40" height="107" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <rect id="sectorB" x="22" y="28" width="30" height="30" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </rect>
          <circle id="sectorB" cx="72" cy="43" r="22" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorB"].title}
            </title>
          </circle>
          <rect id="sectorK" x="360" y="370" width="36" height="90" fill="transparent" className="pointer">
            <title>
              {roomInfo["sectorK"].title}
            </title>
          </rect>
        </>
         :
          <>
            <rect id="sectorH" x="575" y="530" width="61" height="143" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorH"].title}
              </title>
            </rect>
            <rect id="sectorF" x="575" y="334" width="61" height="141" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorF"].title}
              </title>
            </rect>
            <rect id="sectorD" x="575" y="136" width="61" height="141" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorD"].title}
              </title>
            </rect>
            <rect id="sectorG" x="435" y="474" width="143" height="57" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorG"].title}
              </title>
            </rect>
            <rect id="sectorJ" x="435" y="670" width="143" height="59" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorJ"].title}
              </title>
            </rect>
            <rect id="sectorI" x="410" y="558" width="85" height="85" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorI"].title}
              </title>
            </rect>
            <rect id="sectorE" x="435" y="277" width="143" height="57" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorE"].title}
              </title>
            </rect>
            <rect id="sectorC" x="435" y="80" width="143" height="58" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorC"].title}
              </title>
            </rect>
            <rect id="sectorA" x="75" y="275" width="139" height="60" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorA"].title}
              </title>
            </rect>
            <rect id="sectorB" x="40" y="82" width="370" height="54" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorB"].title}
              </title>
            </rect>
            <rect id="sectorB" x="269" y="136" width="73" height="195" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorB"].title}
              </title>
            </rect>
            <rect id="sectorB" x="40" y="30" width="60" height="52" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorB"].title}
              </title>
            </rect>
            <circle id="sectorB" cx="132" cy="53" r="38" fill="transparent" className="pointer">
              <title>
                {roomInfo["sectorB"].title}
              </title>
            </circle>
            <rect id="sectorK" x="650" y="650" width="74" height="165" fill="transparent" className="pointer">
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
    </svg>
  )
}

export default Ground
