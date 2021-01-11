import React from 'react';
import { createUseStyles } from 'react-jss';
import './styles/miniModal.css';
import {
  MdClose,
  MdPlayArrow,
  MdAdd,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import { HiOutlineThumbUp, HiOutlineThumbDown } from 'react-icons/hi';

const MiniModal = (props) => {
  const leftMargin = props.targetPosition.left;
  const viewPortWidth = document.querySelector('.card').offsetWidth;
  const rightMargin = viewPortWidth - props.targetPosition.right;

  const calcLeftMargin = (n) => {
    if (leftMargin < 100) {
      return leftMargin;
    } else if (rightMargin < 100) {
      const num = (viewPortWidth / 100) * n;
      return leftMargin - num;
    } else {
      const num = ((viewPortWidth / 100) * n) / 2;
      return leftMargin - num;
    }
  };

  const transformOrigin = () => {
    if (leftMargin < 100) {
      return 'left center';
    } else if (rightMargin < 100) {
      return 'right center';
    } else {
      return 'center center';
    }
  };
  const useStyles = createUseStyles({
    miniModal: {
      position: 'absolute',
      zIndex: '10',
      top: '-35%',
      width: `calc(${props.targetPosition.width}px + 7.6%)`,
      borderRadius: '5px 5px 0 0',
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.75)',
      background: '#181818',
      left: `${calcLeftMargin(7.6)}px`,
      transformOrigin: transformOrigin(),
      animationTimingFunction: 'ease-out',
      animationDuration: '0.3s',
      animationName: `$openMiniModal--XL`,
      zIndex: 1001,

      '@media screen and (max-width: 1399px)': {
        animationName: `$openMiniModal--L`,
      },
      '@media screen and (max-width: 1099px)': {
        animationName: `$openMiniModal--M`,
      },
      '@media screen and (max-width: 799px)': {
        animationName: `$openMiniModal--S`,
      },
    },

    // OPEN MINI MODAL ANIMATION
    '@keyframes openMiniModal--XL': {
      from: {
        top: '5%',
        transform: 'scale(0.677)',
      },
      to: {
        top: '-35%',
        transform: 'scale(1)',
      },
    },
    '@keyframes openMiniModal--L': {
      from: {
        top: '5%',
        transform: 'scale(0.715)',
      },
      to: {
        top: '-35%',
        transform: 'scale(1)',
      },
    },
    '@keyframes openMiniModal--M': {
      from: {
        top: '5%',
        transform: 'scale(0.76)',
      },
      to: {
        top: '-35%',
        transform: 'scale(1)',
      },
    },
    '@keyframes openMiniModal--S': {
      from: {
        top: '5%',
        transform: 'scale(0.81)',
      },
      to: {
        top: '-35%',
        transform: 'scale(1)',
      },
    },

    closeModal: {
      left: `${calcLeftMargin(7.6)}px`,
      top: '-35%',
      width: `calc(${props.targetPosition.width}px + 7.6%)`,
      animationTimingFunction: 'ease-in',
      animationDuration: '0.3s',
      animationName: `$closeMiniModal--XL`,

      '@media screen and (max-width: 1399px)': {
        animationName: `$closeMiniModal--L`,
      },
      '@media screen and (max-width: 1099px)': {
        animationName: `$closeMiniModal--M`,
      },
      '@media screen and (max-width: 1099px)': {
        animationName: `$closeMiniModal--S`,
      },
    },

    // CLOSE MINI MODAL ANIMATION
    '@keyframes closeMiniModal--XL': {
      from: {
        top: '-35%',
        transform: 'scale(1)',
      },
      to: {
        top: '5%',
        transform: 'scale(0.677)',
      },
    },
    '@keyframes closeMiniModal--L': {
      from: {
        top: '-35%',
        transform: 'scale(1)',
      },
      to: {
        top: '5%',
        transform: 'scale(0.715)',
      },
    },
    '@keyframes closeMiniModal--M': {
      from: {
        top: '-35%',
        transform: 'scale(1)',
      },
      to: {
        top: '5%',
        transform: 'scale(0.76)',
      },
    },
    '@keyframes closeMiniModal--S': {
      from: {
        top: '-35%',
        transform: 'scale(1)',
      },
      to: {
        top: '5%',
        transform: 'scale(0.81)',
      },
    },

    netflixOriginals: {
      top: 0,
      left: `${calcLeftMargin(2.4)}px`,
      width: `calc(${props.targetPosition.width}px + 2.4%)`,
      animationName: `$openMiniModalNflx--XL`,

      '@media screen and (max-width: 1399px)': {
        top: '-0.5%',
        left: `${calcLeftMargin(3.6)}px`,
        width: `calc(${props.targetPosition.width}px + 3.6%)`,
        animationName: `$openMiniModalNflx--L`,
      },
      '@media screen and (max-width: 1099px)': {
        top: '-9%',
        left: `${calcLeftMargin(7.6)}px`,
        width: `calc(${props.targetPosition.width}px + 7.6%)`,
        animationName: `$openMiniModalNflx--M`,
      },
      '@media screen and (max-width: 799px)': {
        top: '-7%',
        left: `${calcLeftMargin(7.6)}px`,
        width: `calc(${props.targetPosition.width}px + 7.6%)`,
        animationName: `$openMiniModalNflx--S`,
      },
    },
    '@keyframes openMiniModalNflx--XL': {
      from: {
        top: '1%',
        transform: 'scale(0.865)',
      },
      to: {
        top: 0,
        transform: 'scale(1)',
      },
    },
    '@keyframes openMiniModalNflx--L': {
      from: {
        transform: 'scale(0.833)',
      },
      to: {
        transform: 'scale(1)',
      },
    },
    '@keyframes openMiniModalNflx--M': {
      from: {
        transform: 'scale(0.753)',
      },
      to: {
        transform: 'scale(1)',
      },
    },
    '@keyframes openMiniModalNflx--S': {
      from: {
        transform: 'scale(0.82)',
      },
      to: {
        transform: 'scale(1)',
      },
    },

    closeMiniModalNflx: {
      left: `${calcLeftMargin(2.4)}px`,
      top: '0',
      width: `calc(${props.targetPosition.width}px + 2.4%)`,
      animationTimingFunction: 'linear',
      animationDuration: '0.3s',
      animationName: `$closeMiniModalNflx--XL`,

      '@media screen and (max-width: 1399px)': {
        top: '-0.5%',
        left: `${calcLeftMargin(3.6)}px`,
        width: `calc(${props.targetPosition.width}px + 3.6%)`,
        animationName: `$closeMiniModalNflx--L`,
      },
      '@media screen and (max-width: 1099px)': {
        top: '-9%',
        left: `${calcLeftMargin(7.6)}px`,
        width: `calc(${props.targetPosition.width}px + 7.6%)`,
        animationName: `$closeMiniModalNflx--M`,
      },
      '@media screen and (max-width: 799px)': {
        top: '-7%',
        left: `${calcLeftMargin(7.6)}px`,
        width: `calc(${props.targetPosition.width}px + 7.6%)`,
        animationName: `$closeMiniModalNflx--S`,
      },
    },
    '@keyframes closeMiniModalNflx--XL': {
      from: {
        top: 0,
        transform: 'scale(1)',
      },
      to: {
        top: '1%',
        transform: 'scale(0.865)',
      },
    },
    '@keyframes closeMiniModalNflx--L': {
      from: {
        transform: 'scale(1)',
      },
      to: {
        transform: 'scale(0.833)',
      },
    },
    '@keyframes closeMiniModalNflx--M': {
      from: {
        transform: 'scale(1)',
      },
      to: {
        transform: 'scale(0.753)',
      },
    },
    '@keyframes closeMiniModalNflx--S': {
      from: {
        transform: 'scale(1)',
      },
      to: {
        transform: 'scale(0.82)',
      },
    },
  });

  const classes = useStyles();

  const currentItem = props.item;
  const category = props.category;
  const { genre, maturity, slug, title, match, duration, tags } = currentItem;

  const handleCloseMiniModal = () => {
    const miniModal = document.querySelector('.miniModal');
    miniModal.classList.add(
      genre === 'netflix-originals'
        ? classes.closeMiniModalNflx
        : classes.closeModal
    );
    props.onClose(false);
  };
  return (
    <div
      onMouseLeave={() => handleCloseMiniModal()}
      className={`
          miniModal ${classes.miniModal} 
          ${genre === 'netflix-originals' ? classes.netflixOriginals : ''} ${
        genre === 'netflix-originals' ? 'netflix' : ''
      }
        `}
    >
      <div className='miniModal--container'>
        <div className='miniModal--player'>
          <img
            src={`/images/${category}/${genre}/${slug}/small.jpg`}
            alt={title}
          />
        </div>
        <div className='miniModal--info'>
          <div className='info-container'>
            <div className='buttonControls'>
              <div className='buttonControls--left'>
                <div className='btn play'>
                  <MdPlayArrow />
                </div>
                <div className='btn add'>
                  <div className='tooltip'>Add to My List</div>
                  <MdAdd />
                </div>
                <div className='btn thumb-up'>
                  <div className='tooltip'>I like this</div>
                  <HiOutlineThumbUp />
                </div>
                <div className='btn thumb-down'>
                  <div className='tooltip'>Not for me</div>
                  <HiOutlineThumbDown />
                </div>
              </div>
              <div className='buttonControls--right'>
                <div className='btn more'>
                  <div className='tooltip'>More info</div>
                  <MdKeyboardArrowDown />
                </div>
              </div>
            </div>
            <div className='video-metadata'>
              <div className='match'>{match}% Match</div>
              <div className={`maturity maturity-${maturity}`}>
                <img src={`/images/icons/BBFC_${maturity}.svg`} alt={title} />
              </div>
              <div className='duration'>{duration}</div>
            </div>
            <ul className='tags'>
              {tags.map((tag) => {
                return (
                  <li>
                    <span>{tag}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className='miniModal--close-btn'
          onClick={() => handleCloseMiniModal()}
        >
          <MdClose />
        </div>
      </div>
    </div>
  );
};

export default MiniModal;
