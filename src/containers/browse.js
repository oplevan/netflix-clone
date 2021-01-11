import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import logo from '../Netflix_logo.svg';
import * as ROUTES from '../constants/routes';
import {
  Loading,
  Header,
  Billboard,
  Main,
  CategoryCarousel,
} from '../components';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre'],
    });

    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return profile.displayName ? (
    <div style={{ background: '#141414' }}>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      {/* ====================
          HEADER START 
      =====================*/}
      <Header bgr={false}>
        <Header.Sticky justify={'flex-start'}>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
          <Header.OpenMenu openMenu onClick={() => handleClick()}>
            <Header.Link>Browse</Header.Link>
          </Header.OpenMenu>
          <Header.PrimaryNav showMenu={showMenu}>
            <Header.NavTab>
              <Header.Link
                active={category === 'series' ? 'true' : 'false'}
                onClick={() => setCategory('series')}
              >
                Home
              </Header.Link>
            </Header.NavTab>
            <Header.NavTab>
              <Header.Link
                active={category === 'series' ? 'true' : 'false'}
                onClick={() => setCategory('series')}
              >
                Series
              </Header.Link>
            </Header.NavTab>
            <Header.NavTab>
              <Header.Link
                active={category === 'films' ? 'true' : 'false'}
                onClick={() => setCategory('films')}
              >
                Films
              </Header.Link>
            </Header.NavTab>
            <Header.NavTab>
              <Header.Link to={ROUTES.HOME}>New & Popular</Header.Link>
            </Header.NavTab>
            <Header.NavTab>
              <Header.Link to={ROUTES.HOME}>My List</Header.Link>
            </Header.NavTab>
          </Header.PrimaryNav>
          <Header.SecondaryNav>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Gifts></Header.Gifts>
            <Header.Notifications>
              <Header.Dropdown>
                <Header.Group>
                  <p>Hello</p>
                </Header.Group>
              </Header.Dropdown>
            </Header.Notifications>
            <Header.Profile>
              <Header.ProfileImg src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Link>
                    <Header.ProfileImg src={user.photoURL} />
                    {user.displayName}
                  </Header.Link>
                  <Header.Link>Manage Profiles</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link>Account</Header.Link>
                  <Header.Link>Help Centre</Header.Link>
                  <Header.Link onClick={() => firebase.auth().signOut()}>
                    Sign out of Netflix
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.SecondaryNav>
        </Header.Sticky>
      </Header>

      {/* ====================
          BILLBOARD START 
      =====================*/}
      <Billboard>
        <Billboard.Row>
          <Billboard.Trailer>
            <Billboard.Poster
              src={'/images/misc/billboard/how-to-get-away-with-murder.webp'}
            />
          </Billboard.Trailer>
          <Billboard.Info>
            <Billboard.Logo>
              <Billboard.LogoImg
                src={
                  '/images/misc/billboard/logo-how-to-get-away-with-murder.webp'
                }
              />
            </Billboard.Logo>
            <Billboard.Msg>Watch Season 6 now</Billboard.Msg>
            <Billboard.Description>
              A law professor gives her students a shot at some real-world
              cases. Too bad that includes embroiling them in murder.
            </Billboard.Description>
            <Billboard.Links>
              <Billboard.PlayBtn>Play</Billboard.PlayBtn>
              <Billboard.MoreInfoBtn>More Info</Billboard.MoreInfoBtn>
            </Billboard.Links>
          </Billboard.Info>
        </Billboard.Row>
      </Billboard>

      {/* ====================
          MAIN CONTENT START 
      =====================*/}
      <Main.MainView>
        {slideRows.map((slideItem) => (
          <Main key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Main.Title>{slideItem.title}</Main.Title>
            <CategoryCarousel category={category} data={slideItem.data} />
          </Main>
        ))}
      </Main.MainView>
      <FooterContainer />
    </div>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
