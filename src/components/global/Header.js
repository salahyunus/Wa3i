import styled from "styled-components";
// import auth and google auth provider
import { auth, provider } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/user/userSlice";
import { useEffect } from "react";
import { mainPath } from "../../paths";
const Header = (props) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    /* if user logs in, wait to fetch user then redirect to 
    homepage only if user is fetched */

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        // redirect user
        history("/home");
      }
    });
  }, [userName]);

  // Handle Auth
  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider) // get provider (in my case google) and popup
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          // alert error message if anything goes wrong
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
        })
        .catch((err) => alert(err.message));
    }
  };
  const setUser = (user) => {
    // dispatch data to redux store
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <Nav>
      <a href={mainPath}>
        <Logo>
          <img src="/images/logo.svg" alt="FILMZ Logo" />
        </Logo>
      </a>
      {/* if username doesnt exist show only login button */}
      {/* else show navmenu, sign out button and picture */}
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown onClick={handleAuth}>
              <span>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  /* fixed pos so that it doesnt dissappear
   onScroll and it doesnt add height to the page */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  /* BGColor */
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  /* center items */
  align-items: center;
  padding: 0 36px;
  /* space between l e t t e r s */
  letter-spacing: 16px;
  /* layer on top of elements */
  z-index: 3;
`;

const Logo = styled.a`
  cursor: pointer;
  padding: 0;
  width: 120px;
  margin-top: 10px;
  max-height: 100px;
  font-size: 0;
  display: inline-block;
  transition: 0.5s;

  img {
    display: block;
    width: 100%;
  }
  &:hover {
    transform: rotateZ(5deg) scale(1.1);
  }
`;

const NavMenu = styled.div`
  user-select: none;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      cursor: pointer;
      margin-left: 5px;
      color: rgb(249, 249, 249);
      font-size: 15px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  /* hide for screens less than 830px */
  @media (max-width: 835px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 30px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  font-size: larger;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
  &:active {
    transform: scale(0.78);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
