import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import DataContext from './Context/createContext';
import Meanings from './Meanings';
import './css/Card.css';


function Card() {

    const { data } = useContext(DataContext);


    const pronounce = () => {
        var audioUrl = data[0].phonetics[0] ? data[0].phonetics[0].audio : '';
        if (audioUrl !== '') {
            const audio = new Audio(audioUrl);
            audio.play();
        }
        else {
            audioUrl = data[0].phonetics[1] ? data[0].phonetics[1].audio : '';
            if (audioUrl !== '') {
                const audio = new Audio(audioUrl);
                audio.play();
            }
        }
    }

    return (
        <div className='card_parent'>
            <div className="main_card">
                {data && data.length > 0 && (
                    <>
                        <div className="cardTitle">
                            <h1 className='word'>
                                {data[0].word}
                            </h1>

                            <p className='phonetic_component'>
                                <span className="phonetic" style={{ display: 'inline-block' }}> {data[0].phonetic ? (data[0].phonetic) : "Phonetic Not Available"}</span>
                                <span>
                                    <FontAwesomeIcon
                                        icon={faVolumeHigh}
                                        className='audio'
                                        style={{ color: "#5180d6" }}
                                        onClick={pronounce} />
                                </span>
                            </p>
                        </div>

                        <div className="meanings_div">

                            {data.map((val, index) => (
                                <Meanings key={index} meanings={val.meanings} />
                            ))}


                            <p>
                                <strong>
                                    Source: &nbsp;&nbsp;
                                </strong>

                                <a
                                    href={data[0].sourceUrls[0]}
                                    target='_blank'
                                    rel='noreferrer'>
                                    {data[0].sourceUrls[0]}
                                </a>
                            </p>

                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Card;
