import React from 'react';
import './css/Meanings.css';
import { v4 as uuidv4 } from 'uuid';

const displayMeanings = (meanings) => {
  return (
    <div className='definitions'>
      <br />
      <span></span><p className='partOfSpeech'>{meanings.partOfSpeech}</p>

      {/* create a list of meanings for a particular partOfSpeech */}
      <ol className='listOfMeanings'>
        {meanings.definitions.map((val) => (

          <li className='list-item' key={uuidv4()}>

            {/* Show Definitions */}
            <p>{val.definition}</p>

            {/* Show Synonyms */}
            {val.synonyms && val.synonyms.length > 0 && (
              <p className='synonyms sub-items' >
                <strong>Synonyms: </strong>
                {val.synonyms.join(', ')}
              </p>
            )}

            {/* Show Antonyms */}
            {val.antonyms && val.antonyms.length > 0 && (
              <p className='antonyms sub-items' >
                <strong>Antonyms: </strong>
                {val.antonyms.join(', ')}
              </p>
            )}

            {/* Show Example */}
            {val.example && val.example.length > 0 && (
              <p className='examples sub-items' >
                <strong><em>Example: </em></strong>
                {val.example}
              </p>
            )}
            <br />

          </li>
        ))}
      </ol>

      {/* Check for additional synonyms and antonyms */}
      {meanings.synonyms && meanings.synonyms.length > 0 && (
        <p className='synonyms sub-items' >
          <strong>Synonyms: </strong>
          {meanings.synonyms.join(', ')}
        </p>
      )}

      {meanings.antonyms && meanings.antonyms.length > 0 && (
        <p className='antonyms sub-items' >
          <strong>Antonyms: </strong>
          {meanings.antonyms.join(', ')}
        </p>
      )}
      <br />

    </div>
  );
}

function Meanings({ meanings }) {
  return (
    <>
      {meanings.map((meaning) => (
        <div key={uuidv4()}>
          {displayMeanings(meaning)}
        </div>
      ))}
    </>
  );
}

export default Meanings;
