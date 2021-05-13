import "./SpotlightSearch.css";
import React, { useState, useEffect, useContext } from "react";
import Typed from "typed.js";
import SearchList from "../search-list/SearchList";
import { Context } from "../../store/store";
import { useSpring, useTransition, config, animated } from "react-spring";
import {
  ACTIVE_CARD,
  ACTIVE_ICON,
  DIMS,
  EXPANDED,
} from "../../reducers/uiReducer";

import { ReactComponent as ContactIcon } from '../../assets/contactIcon.svg';

import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";

import { ReactComponent as AddressIcon } from "../../assets/addressIcon.svg";

import { ReactComponent as ProjectIcon } from "../../assets/projectIcon.svg";

import { ReactComponent as HamburgerIcon } from "../../assets/hamburgerIcon.svg"

const SpotlightSearch = () => {


  const [state, dispatch] = useContext(Context);
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");

  const vhToPixel = (value) => `${(window.innerHeight * value) / 100}px`;
  const vwToPixel = (value) => `${(window.innerWidth * value) / 100}px`;

  let springConfig;
  if (!active && !state.ui) {
    springConfig = {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
        height: "50px",
        width: vwToPixel(50),
      },
    };
  } else if (active && !state.ui) {
    springConfig = {
      config: { ...config.stiff },
      from: {
        height: "50px",
        width: vwToPixel(50),
      },
      to: {
        height: "280px",
        width: vwToPixel(50),
      },
    };
  } else if (state.ui) {
    springConfig = {
      config: { ...config.stiff },
      to: {
        height: vhToPixel(85),
        width: vwToPixel(85),
      },
    };
  }

  const handleSearchClick = () => {
    if (state.ui) {
      dispatch({ type: EXPANDED, payload: false });
      dispatch({ type: ACTIVE_CARD, payload: null });
      dispatch({ type: ACTIVE_ICON, payload: null });
    }
  };

  const MenuIcon = () => {
    const transitions = useTransition(state.ui, {
      from: { opacity: 0, transform: "translate3d(-25%, 0px, 0px)" },
      enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
      leave: { opacity: 0, height: 0, width: 0, transform: "translate3d(25%, 0px, 0px)" },
      trail: 1000,
      config: config.gentle,
    });
    const baseDivStyles = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
    return transitions((styles, item) =>
      item ? (
        <animated.div style={{ ...styles, ...baseDivStyles }}>
          <HamburgerIcon
            id="hamburgerIcon"
            onClick={(e) => handleSearchClick()}
          />
        </animated.div>
      ) : (
        <animated.div style={{ ...styles, ...baseDivStyles }}>
          <SearchIcon id="searchIcon" />
        </animated.div>
      )
    );
  };

  const icons = {
    'About': <AddressIcon id='input-icon'/>,
    'Contact': <ContactIcon id='input-icon'/>,
    'Projects': <ProjectIcon id='input-icon'/>
  }


  const ActiveIcon = () => {
    const transitions = useTransition(state.icon, {
      from: { opacity: 0, transform: "translate3d(25%, 0px, 0px)" },
      enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
      leave: { opacity: 0, height: 0, transform: "translate3d(-25%, 0px, 0px)" },
      trail: 1000,
      config: config.gentle,
    });
    return transitions((styles, item) => {
      return (
        <animated.div style={styles}>
          {icons[item]}
        </animated.div>
      )
    })
  }

  const headers = {
    'About': "About",
    'Contact': "Contact",
    'Projects': "My Projects",
    'Experience': "Experience",
    'Education': "Education",
  };

  // const ActiveHeader = () => {
  //   debugger
  //   const transitions = useTransition(state.card, {
  //     from: { opacity: 0, transform: "translate3d(25%, 0px, 0px)" },
  //     enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
  //     leave: {
  //       opacity: 0,
  //       height: 0,
  //       transform: "translate3d(-25%, 0px, 0px)",
  //     },
  //     trail: 1000,
  //     config: config.gentle,
  //   });
  //   return transitions((styles, item) => {
  //       item ? (
  //         <animated.div style={styles}>{headers[item]}</animated.div>
  //       ) : (
  //         <animated.div style={styles}>
  //           <input
  //             type="text"
  //             id="inputArea"
  //             placeholder="Search"
  //             value={search}
  //             onChange={(e) => setSearch(e.currentTarget.value)}
  //             onClick={(e) => setActive(true)}
  //           />
  //         </animated.div>
  //       );
  //   });
  // };
  
  let spotlightContainerSpring = useSpring(springConfig);

  useEffect(() => {
    getWindowDimensions();
    const typed = new Typed("#inputArea", {
      strings: [
        "Software Engineer",
        "Software Developer ",
        "Good jokes",
        "Theo Mantz",
      ],
      smartBackspace: true,
      typeSpeed: 50,
      backSpeed: 50,
      onComplete: (self) => {
        setSearch("Theo Mantz");
        setActive(true);
      },
    });
    return () => {
      typed.destroy();
    };
  }, []);



  const getWindowDimensions = () => {
    const root = document.querySelector("#root");
    const window = root.getBoundingClientRect();

    dispatch({ type: DIMS, payload: { x: window.width, y: window.height } });
  };

  let inputArea;
  if (!state.ui) {
    inputArea = (
      <input
        type="text"
        id="inputArea"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        onClick={(e) => setActive(true)}
      />
    );
  } else {
    inputArea = <span id="inputArea-text">Theo Mantz</span>;
  }

  return (
    <animated.div id="spotlight-container" style={spotlightContainerSpring}>
      <div id="spotlight-inner">
        <div id="searchIcon-container">
          {MenuIcon()}
        </div>
        <div id="inputArea-container">
          {inputArea}
          {ActiveIcon()}
        </div>
      </div>
      <SearchList active={active} />
    </animated.div>
  );
};

export default SpotlightSearch;
