import styled from 'styled-components';

export default function Row({ title, results }) {
  return (
    <div>
      <h2>{title}</h2>
      <RowTemplate>
        {results?.map((movie) => (
          <div key={movie.id}>
            <MovieImg
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          </div>
        ))}
      </RowTemplate>
    </div>
  );
}

const MovieImg = styled.img`
  width: 80px;
  height: 90px;
  border-radius: 50%;
  margin-left: 10px;
`;
const RowTemplate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
