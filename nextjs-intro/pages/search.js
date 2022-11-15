import MyHead from '../components/MyHead';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import Link from 'next/link';
import { useEffect, useState } from 'react';
//setSearchResults를 원래 Toprated로 하고 새로 받아오는 값을 set으로 해줘서 계속 바꿔주는 것으로 해보기?

export default function search({TopRated}) {
const {search,handleChange,resetChat ,searches} = useInput("");







const newData =searches.results;
console.log(newData);


//searchsms 한단어부터 시작 이걸 async로 넘겨줘서 query값으로 가져오기
const data =TopRated.results;
if (newData === undefined){
  return (
    <div>
      <MyHead title="Search" />
      <SearchForm >
      <SmallImg src='/searchglass.png'></SmallImg> 
      <Search value={search} onChange={handleChange} placeholder={"Search for movie"}></Search>
      <CloseBut onClick={resetChat}><img src='/close.png'></img></CloseBut>
      </SearchForm>
      <MainHead>Top Searches</MainHead>
      
      <Container>
        {data.filter((input)=>input.title.toLowerCase().includes(search.toLowerCase()))
        .map((movie)=>(
          <div key={movie.id}>
            <MovieCon>
            <MovieImg src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
              <MovieTitle>{movie.title}</MovieTitle>
              <PlayImg src='/play-button.png'></PlayImg>
            </MovieCon>
          </div>
        ))}
     
      </Container>
    </div>
  );
        }
  else
  {
    return (
      <div>
        <MyHead title="Search" />
        <SearchForm >
        <SmallImg src='/searchglass.png'></SmallImg> 
        <Search value={search} onChange={handleChange} placeholder={"Search for movie"}></Search>
        <CloseBut onClick={resetChat}><img src='/close.png'></img></CloseBut>
        </SearchForm>
        <MainHead>Top Searches</MainHead>
        
        <Container>
          {newData
          .map((movie)=>(
            <div key={movie.id}>
              <MovieCon>
              <MovieImg src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
                <MovieTitle>{movie.title}</MovieTitle>
                <PlayImg src='/play-button.png'></PlayImg>
              </MovieCon>
            </div>
          ))}
       
        </Container>
      </div>
    )};
 
}
const PlayImg=styled.img`
margin-left:26.3px;
`
const MovieTitle =styled.div`
overflow: hidden;
width:160px;
height:30px;
overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      margin-top: 15px;
`
const CloseBut=styled.div`
`
const SmallImg =styled.img`
width:15.63px;
height:15.63px;
margin-left: 22.19px;
margin-right: 18.19px;
`

const MainHead =styled.div`
font-size: 30px;
margin-bottom: 15px;
margin-top: 15px;
color: white;
font-weight: bold;
`
const API_KEY = process.env.API_KEY;

export async function getServerSideProps(){
  const TopRated = await(await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
  return{
  props:{
    TopRated,
  },
};
}


const Search=styled.input`
width:270px;
height:31px;
background-color: gray;
border:0;
::placeholder{
  color: lightgray;
}

`
const SearchForm=styled.form`
margin-top: 40px;
width:375px;
height:52px;
background-color: gray;
align-items: center;
display: flex;
flex-direction: row;
`

const Container = styled.div`
overflow: auto;
`

const MovieCon=styled.ul`
width:375px;
height:76px;
border-color: white;
display:flex;
flex-direction: row;
overflow: auto;
color:white;
background-color: gray;
margin-bottom: 5px;
align-items: center;
font-size:14px;
`
const MovieImg=styled.img`
width:146px;
height:76px;
margin-right: 10px;

display: block;

`