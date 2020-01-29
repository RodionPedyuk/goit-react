import React from 'react';

const Cast = ({ cast = [] }) => (
  <ul
    style={{
      display: 'flex',
      listStyle: 'none',
      width: '900',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }}
  >
    {console.log('cast===> :', cast)}
    {cast.map((e, index) => {
      if (index < 7) {
        return (
          <li key={e.cast_id} style={{}}>
            <img
              style={{
                width: '150px',
                padding: '10',
                border: 'black solid 2px',
              }}
              src={`https://image.tmdb.org/t/p/w300${e.profile_path}`}
              alt={e.name}
            />
            <h4>{e.name}</h4>
            <p>{e.character}</p>
          </li>
        );
      }
    })}
  </ul>
);

export default Cast;
