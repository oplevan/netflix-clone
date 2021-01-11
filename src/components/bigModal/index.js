import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './styles/bigModal.css';
import { MdClose, MdPlayArrow, MdAdd } from 'react-icons/md';
import { RiVolumeMuteLine } from 'react-icons/ri';
import { HiOutlineThumbUp, HiOutlineThumbDown } from 'react-icons/hi';

const BigModal = (props) => {
  const [open, setOpen] = useState(true);

  const closeIcon = (
    <div className='previewModal--close'>
      <MdClose />
    </div>
  );

  const handleOnClose = () => {
    setOpen(false);
    setTimeout(() => {
      props.onClose(false);
    }, 200);
  };

  const currentItem = props.item;
  const category = props.category;
  const {
    genre,
    maturity,
    slug,
    title,
    description,
    match,
    duration,
    tags,
  } = currentItem;

  const cast = ['Tamsin Greig', 'Simon Bird', 'Paul Ritter', 'Sean McGonovan'];

  return (
    <Modal
      open={open}
      onClose={() => handleOnClose()}
      classNames={{
        overlay: 'bigModalOverlay',
        modal: 'previewModal--wrap',
      }}
      closeIcon={closeIcon}
    >
      <div className='previewModal--container'>
        <div className='previewModal--player'>
          <img
            src={`/images/${category}/${genre}/${slug}/${slug}-large.jpg`}
            alt={title}
          />
          <div className='previewModal--logo'>
            <img
              src={`/images/${category}/${genre}/${slug}/${slug}-logo.webp`}
              alt={title}
            />
          </div>
          <div className='buttonControls bigModal'>
            <div className='buttonControls--left'>
              <div className='btn play'>
                <MdPlayArrow />
                <span>Play</span>
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
              <div className='btn volume'>
                <RiVolumeMuteLine />
              </div>
            </div>
          </div>
          <div className='gradient'></div>
        </div>
        <div className='previewModal--info'>
          <div className='detail-modal-container'>
            <div className='detailsMetadata-left'>
              <div className='video-metadata'>
                <div className='match'>{match}% Match</div>
                <div className={`maturity maturity-${maturity}`}>
                  <img src={`/images/icons/BBFC_${maturity}.svg`} alt={title} />
                </div>
                <div className='duration'>{duration}</div>
              </div>
              <p>{description}</p>
            </div>
            <div className='detailsMetadata-right'>
              <div className='previewModal--tags'>
                <span className='label'>Cast: </span>
                {cast.map((actor) => {
                  return (
                    <>
                      <span className='tag-item'>{actor}</span>
                      <span className='comma'>, </span>
                    </>
                  );
                })}
              </div>
              <div className='previewModal--tags'>
                <span className='label'>Genres: </span>
                <span className='tag-item'>{genre}</span>
              </div>
              <div className='previewModal--tags'>
                <span className='label'>This programme is: </span>
                {tags.map((item) => {
                  return (
                    <>
                      <span className='tag-item'>{item}</span>
                      <span className='comma'>, </span>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='moreLikeThis--wrapper'>
            <h3 className='moreLikeThis--header'>More Like This</h3>
            <div className='moreLikeThis--container'>
              {props.relatedItems.map((item) => {
                return (
                  <div className='moreLikeThis--card'>
                    <div className='imageWrapper'>
                      {item.genre === 'netflix-originals' ? (
                        <img
                          src={`/images/${category}/${item.genre}/${item.slug}/${item.slug}-small.jpg`}
                          alt={item.title}
                        />
                      ) : (
                        <img
                          src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                          alt={item.title}
                        />
                      )}
                      <div className='playIcon'>
                        <MdPlayArrow />
                      </div>
                      <span className='duration'>{item.duration}</span>
                    </div>
                    <div className='metadataWrapper'>
                      <div className='video-metadata'>
                        <div className='match'>{item.match}% Match</div>
                        <div className={`maturity maturity-${item.maturity}`}>
                          <img
                            src={`/images/icons/BBFC_${item.maturity}.svg`}
                            alt={item.title}
                          />
                        </div>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BigModal;
