import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [linePosition, setLinePosition] = useState([0, 0]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [rectangles, setRectangles] = useState([
    { id: 1, visible: true, text: 'Play' },
    { id: 2, visible: true, text: 'View' },
    { id: 3, visible: true, text: 'Relive' },
  ]);

  useEffect(() => {
    const handleScroll = (e) => {
      const delta = e.deltaY;

      if (delta > 0) {
        // Scrolling down
        setScrollPosition((prevPosition) => prevPosition + 1);
      } else if (delta < 0) {
        // Scrolling up
        setScrollPosition((prevPosition) => prevPosition - 1);
      }
    };

    const interval = setInterval(() => {
      setLinePosition((prevPositions) => [
        (prevPositions[0] + 1) % 4,
        (prevPositions[1] + 1) % 4
      ]);
    }, 1000);

    const handleScrollCheck = () => {
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollCheck);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollCheck);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRectangles(prevRectangles => {
        // Fade out the rectangles
        return prevRectangles.map(rectangle => ({
          ...rectangle,
          visible: false,
        }));
      });
    }, 3000);

    setTimeout(() => {
      setRectangles(prevRectangles => {
        // Hide the last rectangle and show only two rectangles with different words
        const updatedRectangles = prevRectangles.map(rectangle => ({
          ...rectangle,
          visible: false,
        }));
        updatedRectangles[0].visible = true;
        updatedRectangles[0].text = 'Edit';
        updatedRectangles[1].visible = true;
        updatedRectangles[1].text = 'Share';
        return updatedRectangles;
      });
    }, 4000);

    setTimeout(() => {
      setRectangles(prevRectangles => {
        // Hide all rectangles except the first one and show the last rectangle with a different word
        const updatedRectangles = prevRectangles.map(rectangle => ({
          ...rectangle,
          visible: false,
        }));
        updatedRectangles[0].visible = true;
        updatedRectangles[0].text = 'Download/Save';
        return updatedRectangles;
      });
    }, 5000);
  }, []);

  return (
    <div className="App" style={{ minHeight: '200vh' }}>
      <div className="WordArt">
        <img src="~/Downloads/butterfly.gif" alt="Flying Butterflies gif" className="Butterflies" />
         {/* <h1 className="WordArtText">Reminiscence</h1>  */}
         <h1 className="WordArtText">
  <span>R</span>
  <span>e</span>
  <span>m</span>
  <span>i</span>
  <span>n</span>
  <span>i</span>
  <span>s</span>
  <span>c</span>
  <span>e</span>
  <span>n</span>
  <span>c</span>
  <span>e</span>
</h1>
      </div>
      <audio controls autoplay>
    <source src="/Users/aparnamohan/Downloads/music.ogg" type="audio/ogg" />
  </audio>
      <h1>Hi:) Implemented all the effects in the given website and the react code in a creative way! Here's the pseudo website which focuses on the front-end non-trivial part rather than the content for evaluation. Loved implementing it, hope you enjoy evaluating it with River flows in you song and gif that's attached. </h1>
      <AnimatedOnScroll animationIn="flash" style={{ marginTop: '80px' }}>
        <p className={isScrolled ? 'scrolled' : ''}>
          This line will appear blue and bold when scrolled. Implemented the first component effect/concept.
        </p>
        <p className={isScrolled ? 'scrolled' : ''}>
          This line will also appear blue and bold when scrolled.
        </p>
        <p>
          This line will appear blue when scrolled, along with the other content.
        </p>
      </AnimatedOnScroll>

      <div className="Box">
        <div className="LineContainer">
          <div
            className={`Line LineTop ${linePosition[0] === 0 ? "Active" : ""}`}
          ></div>
          <div
            className={`Line LineRight ${linePosition[0] === 1 ? "Active" : ""}`}
          ></div>
          <div
            className={`Line LineBottom ${linePosition[0] === 2 ? "Active" : ""}`}
          ></div>
          <div
            className={`Line LineLeft ${linePosition[0] === 3 ? "Active" : ""}`}
          ></div>
        </div>
      </div>
      <div className="Box">
        <div className="LineContainer">
          <div
            className={`Line LineTop ${linePosition[1] === 0 ? "Active" : ""}`}
          ></div>
          <div
            className={`Line LineRight ${linePosition[1] === 1 ? "Active" : ""}`}
          ></div>
          <div
            className={`Line LineBottom ${linePosition[1] === 2 ? "Active" : ""}`}
          ></div>
          <div
            className={`Line LineLeft ${linePosition[1] === 3 ? "Active" : ""}`}
          ></div>
        </div>
      </div>

      {rectangles.map(rectangle => (
        <div
          key={rectangle.id}
          className={`rectangle ${rectangle.visible ? 'visible' : ''}`}
        >
          {rectangle.text}
        </div>
      ))}

      <div className="SquareBox">
        <div className="RectangularBox">
          <div className="BlinkingCursor"></div>
        </div>
        <div className="RectangularBox Highlighted"></div>
        <div className="RectangularBox"></div>
        <div className="RectangularBox"></div>
      </div>
    </div>
  );
};

export default App;
