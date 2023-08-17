// Styled Components
import { styled } from "styled-components";
const Login = (props) => {
  window.onload = function () {
    alert(
      "Disclaimer! \n I'm not responsible for any info. or media on this website \n as it's all fetched from Disney's Database "
    );
  };
  return (
    // Container for centering
    <Container>
      {/* Content */}
      <Content>
        {/* Hero Section */}
        <HERO>
          {/* HERO Main Logo */}
          {/* Use an svg img for better quality */}
          <HEROLogoOne src="/images/hero-logo-one.svg" alt="" />
          {/* HERO Btn/Link */}
          <SignUp onClick={() => (window.location.href = "/home")}>
            GET ALL THERE
          </SignUp>
          {/* HERO Description */}
          <Description>
            Experience unparalleled adventure with Filmz! Unlock Premier Access
            to captivating stories, including 'Bolt and The Lion King,' for an
            extra fee. Enhance your entertainment with a Filmz+ subscription.
            Effective 16/08/23, the cost of Filmz+ and The Aflam Bundle will
            rise by $1. Dive into a world of excitement with Filmz!
          </Description>
          <HEROLogoTwo src="/images/hero-logo-two.png" alt="" />
        </HERO>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  /* Hide overflow for this page */
  overflow: hidden;
  /* Center Items */
  display: flex; //1
  flex-direction: column; //2
  text-align: center; //3 center text
  height: 100vh;
`;

const Content = styled.div`
  /* mb 10vw for responsiveness (viewport width) */
  margin-bottom: 10vw;
  /* take full page width */
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
const HERO = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HEROLogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  cursor: pointer;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  transition: 0.2s all;
  user-select: none;

  &:hover {
    background-color: #0483ee;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  -webkit-user-drag: none;
`;

const HEROLogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
