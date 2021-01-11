import React from 'react';
import jumboData from '../fixtures/jumbo';
import { Jumbotron } from '../components';

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction} className={item.id}>
          <Jumbotron.Pane className='first-pane'>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane className='second-pane'>
            <Jumbotron.Image src={item.image} alt={item.alt} />
            <Jumbotron.Animation className='animation'>
              {item.animation.type === 'video/mp4' ? (
                <Jumbotron.Video autoPlay playsInline muted loop>
                  <source
                    src={item.animation.source}
                    type={item.animation.type}
                  />
                </Jumbotron.Video>
              ) : (
                <>
                  <div className='animation-img'>
                    <img
                      src={item.animation.source}
                      alt={item.animation.text0}
                    />
                  </div>
                  <div className='animation-text'>
                    <div className='text-0'>{item.animation.text0}</div>
                    <div className='text-1'>{item.animation.text1}</div>
                  </div>
                </>
              )}
            </Jumbotron.Animation>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
