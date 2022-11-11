import MyHead from '../components/MyHead';
import styled from 'styled-components';

export async function getStaticProps() {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=aaf81bdfd64c8485a414ab01ef93d056`
    )
  ).json();
  const data2 = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=aaf81bdfd64c8485a414ab01ef93d056`
    )
  ).json();
  const data3 = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=aaf81bdfd64c8485a414ab01ef93d056`
    )
  ).json();

  return {
    props: {
      data,
      data2,
      data3,
    },
  };
}
export default function home({ data, data2, data3 }) {
  const randomPic = Number([Math.floor(Math.random() * data.results.length)]);
  console.log(randomPic);
  return (
    <div>
      <MyHead title="Home" />
      <HomeHeader>
        <BannerImg>Logo</BannerImg>
        <BannerTag>TvShows</BannerTag>
        <BannerTag>Movies</BannerTag>
        <BannerTag>My List</BannerTag>
      </HomeHeader>
      {/* <BoxContainer>
        <BoxBanner>
          <BannerImg>
            <RandomPic
              src={`https://image.tmdb.org/t/p/original/${data.results[randomPic].poster_path}`}
            />
          </BannerImg>
        </BoxBanner>
        <BoxMid>
          <BannerTag1>+</BannerTag1>
          <BannerButton>PLAY</BannerButton>
          <BannerTag1>More Info</BannerTag1>
        </BoxMid> 
      </BoxContainer> */}
    </div>
  );
}

const HomeHeader = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
`;

const BannerImg = styled.div``;

const BannerTag = styled.div``;

const BoxContainer = styled.div`
  width: 100vw;
`;

const BoxBanner = styled.nav`
  width: 100vw;

  position: sticky;
  top: 0;
`;

const RandomPic = styled.img`
  object-fit: cover;
`;

const BannerButton = styled.button``;

const BoxMid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

//BoxContainer부터해서 다 적용이 안된다 흑흑..일단 global-style에서 제외시킬 수 있으면 제외시키고 안되면 그냥 styled-components로 통일시켜야될것같당 화이튕!!
