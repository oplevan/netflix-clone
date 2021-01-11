import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './styles/carousel.css';
import { MiniModal } from '../';
import { BigModal } from '../';

const responsive = {
  XL: {
    breakpoint: { max: 3000, min: 1400 },
    items: 6,
    partialVisibilityGutter: 60,
    slidesToSlide: 2,
  },
  L: {
    breakpoint: { max: 1399, min: 1100 },
    items: 5,
    partialVisibilityGutter: 60,
    slidesToSlide: 2,
  },
  M: {
    breakpoint: { max: 1099, min: 800 },
    items: 4,
    partialVisibilityGutter: 50,
  },
  S: {
    breakpoint: { max: 799, min: 600 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  XS: {
    breakpoint: { max: 599, min: 0 },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const CategoryCarousel = ({ category, data, deviceType }) => {
  const [showModal, setShowModal] = useState(false);
  const [showBigModal, setShowBigModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [targetDOMRect, setTargetDOMRect] = useState({});

  const [hovered, setHovered] = useState(false);
  const [targetProps, setTargetProps] = useState({});

  const mouseEnterHandler = (props) => {
    setTargetProps(props);
    setHovered(true);
  };
  const mouseLeaveHandler = () => {
    setTargetProps({});
    setHovered(false);
  };

  const onTimeout = () => {
    showMiniModal(targetProps);
  };

  useEffect(() => {
    const timer = hovered && setTimeout(onTimeout, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [hovered]);

  const showMiniModal = (props) => {
    const targetRect = props.e.target.getBoundingClientRect();

    if (showModal === false) {
      setTargetDOMRect(targetRect);
      setCurrentItem(props.item);
      setShowModal(!showModal);
    } else {
      const newTargetRect = props.e.target.getBoundingClientRect();
      closeMiniModal(!showModal);
      setTimeout(() => {
        setTargetDOMRect(newTargetRect);
        setCurrentItem(props.item);
        setShowModal(true);
      }, 300);
    }
  };

  const closeMiniModal = (newState) => {
    //const miniModal = document.querySelector('.miniModal');
    //miniModal.classList.add('close-modal');
    setTimeout(() => {
      setShowModal(newState);
      setCurrentItem({});
      setTargetDOMRect({});
    }, 300);
  };

  const openBigModalHandler = (props) => {
    setCurrentItem(props.item);
    setShowBigModal(!showBigModal);
  };
  const closeBigModal = (newState) => {
    setShowBigModal(newState);
  };
  return (
    <>
      <div className='carousel-wrapper'>
        <Carousel
          ssr
          showDots
          renderDotsOutside
          infinite={false}
          deviceType={deviceType}
          containerClass='carousel-container'
          dotListClass='dot-list'
          itemClass='carousel-item'
          responsive={responsive}
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          {data.map((item) => {
            return (
              <div
                onMouseEnter={(e) => {
                  mouseEnterHandler({ e, item });
                }}
                onMouseLeave={(e) => mouseLeaveHandler()}
                onClick={() => {
                  openBigModalHandler({ item });
                }}
                key={item.id}
                className='boxart-container'
                id={item.id}
              >
                <img
                  draggable={false}
                  src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  alt={item.title}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      {showModal === true ? (
        <MiniModal
          item={currentItem}
          category={category}
          onClose={closeMiniModal}
          targetPosition={targetDOMRect}
        />
      ) : null}
      {showBigModal === true ? (
        <BigModal
          item={currentItem}
          category={category}
          onClose={closeBigModal}
          relatedItems={data}
        />
      ) : null}
    </>
  );
};

export default CategoryCarousel;
