import React, { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import scrollStore from "./scrollStore";
import './scss/App.scss';
import LoadImages from "./LoadImages";
import Fred from "./Fred";
import Sky from "./Sky.jsx";
import Sq from "./Sq.jsx";
import Acorn from "./Acorn.jsx";
import Trends from "./Trends.jsx";
import Cave from "./Cave.jsx";
import Rocks from "./Rocks.jsx";
import Bridge from "./Bridge.jsx";
import Flag from "./Flag.jsx";
import Book from "./Book.jsx";
import Rocket from "./Rocket.jsx";
import Chest from "./Chest.jsx";
import Trace from "./Trace.jsx";
import Cafe from "./Cafe.jsx";
import Hotel from "./Hotel.jsx";
import Grafiti from "./Grafiti.jsx";
import Pizza from "./Pizza.jsx";
import Clock from "./Clock.jsx";
import SatoshiShadow from "./SatoshiShadow.jsx";
import Nest from "./Nest.jsx";
import Mine from "./Mine.jsx";
import MountTrace from "./MountTrace.jsx";
import Flower from "./Flower.jsx";
import Bird from "./Bird.jsx";
import Bees from "./Bees.jsx";
import Whale from "./Whale.jsx";
import Trash from "./Trash.jsx";
import Tables from "./Tables.jsx";
import musicStore from "./musicStore.js";




const imgW = 17482
const imgH = 1080
const sceneAspectRatio = imgW / imgH


function App() {
  const [sceneW, setsceneW] = useState(0);
  const [isTouchMode, setIsTouchMode] = useState(window.innerWidth < 800);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);

  const handleScroll = () => {
    if (!isTouchMode) {
      const position = window.scrollY;
      scrollStore.setScrollPosition(position);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX; // Сохраняем начальную позицию
  };

  const handleTouchMove = (e) => {
    const newTouchX = e.touches[0].clientX; // Текущая позиция пальца
    const delta = newTouchX - touchCurrentX.current; // Разница с предыдущей позицией
    scrollStore.changeScrollPosition(-delta); // Передаем delta
    touchCurrentX.current = newTouchX; // Обновляем текущую позицию
  };

  const handleTouchEnd = () => {
    // После окончания жеста обнуляем значения
    touchStartX.current = 0;
    touchCurrentX.current = 0;
  };

  const gameInit = () => {
    const sceneW = window.innerHeight * sceneAspectRatio - document.documentElement.clientWidth + window.innerHeight;
    setsceneW(sceneW);
    scrollStore.setSceneW(sceneW - window.innerHeight);
    scrollStore.setSceneWRaw(window.innerHeight * sceneAspectRatio);
    scrollStore.setScreenPercentOfScene(((document.documentElement.clientWidth / scrollStore.sceneWRaw) * 100));
    setIsTouchMode(window.innerWidth < 800); // Переключение режима
  };

  useEffect(() => {
    gameInit();

    if (isTouchMode) {
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    window.addEventListener("resize", gameInit);

    return () => {
      window.removeEventListener("resize", gameInit);
      if (isTouchMode) {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isTouchMode]);

  const [volume, setvolume] = useState(true);
  useEffect(() => {
    if (!volume) {
      audioBgRef.current.volume = 0
      audioClickRef.current.volume = 0
    } else {
      audioBgRef.current.volume = 1
      audioClickRef.current.volume = 1
    }
  }, [volume])

  useEffect(() => {
    if (musicStore.play) {
      audioClickRef.current.currentTime = 0; // Перемещаемся к началу
      audioClickRef.current.play()
    }
  }, [musicStore.play])

  const audioBgRef = useRef(null);
  const audioClickRef = useRef(null);
  return (
    <div className='App' style={{
      height: `${sceneW}px`
    }} onClick={() => {
      audioBgRef.current.play()
    }}>

      <audio ref={audioBgRef} src="/music/bg.mp3" loop />
      <audio ref={audioClickRef} src="/music/click.mp3" />


      <div className="App_gde">
        {/* {(scrollStore.POS + scrollStore.screenPercentOfScene).toFixed(2)}% */}
        {/* {scrollStore.POS.toFixed(2)}% */}
        <a href="https://t.me/fredportala" target="_blank" className='App_gde_el'>
          <img src="/img/tg.svg" alt="" />
        </a>
        <a href="https://x.com/fred_cto_sol" target="_blank" className='App_gde_el'>
          <img src="/img/x.svg" alt="" />
        </a>
        <a href="https://dexscreener.com/solana/8sqndszijlrlnxmfqbpzxbbhsujrjur7cefqcqzqz1hq" target="_blank" className='App_gde_el'>
          <img src="/img/dex.svg" alt="" />
        </a>
        <div className='App_gde_el' onClick={() => { setvolume(!volume) }}>
          <img src={`/img/music${volume ? 'On' : 'Off'}.svg`} alt="" />
        </div>
      </div>
      <div className='App_content'>
        <LoadImages></LoadImages>
        <Fred />
        <Sky />
        {/* <Acorn /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 1 && scrollStore.POS <= 2 && <Acorn />}
        {/* <Sq /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 1.5 && scrollStore.POS <= 2.5 && <Sq />}
        {/* <Trends /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 3 && scrollStore.POS <= 8.2 && <Trends />}
        {/* <Cave /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 8 && scrollStore.POS <= 11 && <Cave />}
        {/* <Bridge /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 11.5 && scrollStore.POS <= 13 && <Bridge />}
        {/* <Rocks /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 11 && scrollStore.POS <= 14 && <Rocks />}
        {/* <Flag /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 15 && scrollStore.POS <= 16 && <Flag />}
        {/* <Book /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 16 && scrollStore.POS <= 17.8 && <Book />}
        {/* <Rocket /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 21.6 && scrollStore.POS <= 23.1 && <Rocket />}
        {/* <Chest /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 24.5 && scrollStore.POS <= 26.5 && <Chest />}
        {/* <Trace /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 25.5 && scrollStore.POS <= 30 && <Trace />}
        {/* <Cafe /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 30.5 && scrollStore.POS <= 32.5 && <Cafe />}
        {/* <Hotel /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 32.5 && scrollStore.POS <= 33 && <Hotel />}
        {/* <Clock /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 34.5 && scrollStore.POS <= 35.5 && <Clock />}
        {/* <Grafiti /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 35 && scrollStore.POS <= 35.5 && <Grafiti />}
        {/* <Pizza /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 37.5 && scrollStore.POS <= 39.2 && <Pizza />}
        {/* <SatoshiShadow /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 43.5 && scrollStore.POS <= 44.7 && <SatoshiShadow />}
        {/* <Nest /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 46 && scrollStore.POS <= 48 && <Nest />}
        {/* <Mine /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 49.3 && scrollStore.POS <= 52.3 && <Mine />}
        {/* <MountTrace /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 62.8 && scrollStore.POS <= 64.1 && <MountTrace />}
        {/* <Bees /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 70 && scrollStore.POS <= 85 && <Bees />}
        {/* <Bird /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 73 && scrollStore.POS <= 75 && <Bird />}
        {/* <Flower /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 76 && scrollStore.POS <= 77.8 && <Flower />}
        {/* <Whale /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 82.5 && scrollStore.POS <= 86.5 && <Whale />}
        {/* <Trash /> */}
        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 87.2 && scrollStore.POS <= 88.8 && <Trash />}

        {(scrollStore.POS + scrollStore.screenPercentOfScene) >= 50 && scrollStore.POS <= 62 && <Tables />}



        <img src="/img/earth.png" alt="" style={{
          translate: `-${scrollStore.pos}px 0px`,
          transition: `translate 200ms ease-out`,
          height: "100dvh"
        }} />


      </div>
    </div>
  )
}

export default observer(App)