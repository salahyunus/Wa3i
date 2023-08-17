import { styled } from "styled-components";
import ImgSlider from "../../components/ImgSlider";
import Viewers from "../../components/Viewers";
import Recommended from "../../components/Recommended";
import NewMovies from "../../components/NewMovies";
import Originals from "../../components/Originals";
import Trending from "../../components/Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase/firebase.js";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  // Get Username
  const userName = useSelector(selectUserName);

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      const newRecommends = [];
      const newNewMovies = [];
      const newOriginals = [];
      const newTrending = [];

      snapshot.docs.forEach((doc) => {
        const movieData = { id: doc.id, ...doc.data() };

        switch (movieData.type) {
          case "recommend":
            newRecommends.push(movieData);
            break;

          case "new":
            newNewMovies.push(movieData);
            break;

          case "original":
            newOriginals.push(movieData);
            break;

          case "trending":
            newTrending.push(movieData);
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: newRecommends,
          newMovies: newNewMovies,
          original: newOriginals,
          trending: newTrending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommended />
      <NewMovies />
      <Originals />
      <Trending />
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 83px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
