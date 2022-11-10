import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Row from '../components/Row';

export default function Home({ data, data2 }) {
  const randomPic = Number([Math.floor(Math.random() * data.results.length)]);
  console.log(data);
  console.log(randomPic);
  //<RandomPic
  //src={`https://image.tmdb.org/t/p/original/${data[randomPic].poster_path}`}
  ///>
  console.log(data.results[randomPic]);

  return (
    <BoxContainer>
      <Head>
        <title>NetFlix</title>
      </Head>

      <BoxBanner>
        <RandomPic
          src={`https://image.tmdb.org/t/p/original/${data.results[randomPic].poster_path}`}
        />

        <BannerTag2>
          <BannerImg>Logo</BannerImg>
          <BannerTag1>TvShows</BannerTag1>
          <BannerTag1>Movies</BannerTag1>
          <BannerTag1>My List</BannerTag1>
        </BannerTag2>
      </BoxBanner>
      <BoxMid>
        <BannerTag1>+</BannerTag1>
        <BannerButton>PLAY</BannerButton>
        <BannerTag1>More Info</BannerTag1>
      </BoxMid>
      <BoxHeader>
        <body>
          <Row title="Preview" results={data.results} />
          <h2>Now_playing</h2>
          <Buttons>
            <LeftScroll>+</LeftScroll>
            <RightScroll>+</RightScroll>
          </Buttons>
          <RowTemplate>
            {data2.results?.map((movie) => (
              <div key={movie.id}>
                <MovieImg
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
              </div>
            ))}
          </RowTemplate>
        </body>
      </BoxHeader>
    </BoxContainer>
  );
}
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;
const RightScroll = styled.button`
  color: white;
  position: absolute;
  justify-content: center;
  margin-left: 380px;
  margin-top: 30px;
  //margin-bottom: 80px;
`;
const LeftScroll = styled.button`
  color: white;
  position: absolute;
  justify-content: center;
  margin-top: 30px;
`;
const BannerButton = styled.button``;
const BoxMid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const RandomPic = styled.img`
  width: 400px;
  justify-content: center;
  align-items: center;
`;

const MovieImg = styled.img`
  width: 80px;
  height: 90px;
  margin-left: 10px;
`;
const RowTemplate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
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

  return {
    props: {
      data,
      data2,
    },
  };
}

const RowName = styled.div``;

const BoxContainer = styled.div`
  //border: 3px solid;
  //padding: 30px;
  width: 380;
  height: 500;
  //border-color: red;
  background-color: black;
  width: 400px;
  height: 1400px;
  display: block;
  justify-content: center;
  align-items: center;
  margin-left: 500px;
`;

const BoxBanner = styled.nav`
  display: flex;
  text-align: center;
  flex-direction: row;
  color: white;
  // margin-left: 30px;

  margin-right: 40px;
  position: relative;
`;

const BoxHeader = styled.div``;
const BannerTag1 = styled.div`
  -webkit-box-pack: justify;
  justify-content: space-between;
  background: transparent;

  z-index: 2;
  padding-right: 20px;
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  position: relative;
`;
const BannerTag2 = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  display: flex;
  flex-direction: row;
`;
const BannerTag3 = styled.div`
  position: absolute;
`;
const BannerImg = styled.div`
  margin-left: 3px;
  margin-right: 80px;
`;
