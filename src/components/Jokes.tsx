import styled from 'styled-components';
import { Joke } from "../interfaces/Jokes.ts";
import { useState } from "react";

const JokeContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const JokeDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    padding: 0 2% 1% 2%;
    border: #646cff solid;
    margin: 2%;
    border-radius: 10%;
`

const ButtonStyle = styled.button`
    border-radius: 10%;
    color: #646cff;

`

const HeadingStyle = styled.h1`
    font-size: calc(3px + 5vh);
`
const ParagraphStyle = styled.p`
    font-size: calc(2px + 2vh);
`

export default function Jokes(props: { data: Joke[] }) {
    const [revealedJokeId, setRevealedJokeId] = useState(-1);
    const [lastID, setLastID] = useState(-1);


    function ShowJoke(jokeId: number) {
        let eq = lastID === jokeId;
        setRevealedJokeId(eq ? -1 : jokeId);
        setLastID(eq ? -1 : jokeId);
    }

    return (
        <JokeContent>
            {
                props.data.map((joke: Joke) =>
                    <JokeDiv key={joke.id}>
                        <HeadingStyle>Type: {joke.type}</HeadingStyle>
                        <ParagraphStyle>{joke.setup}</ParagraphStyle>
                        <ParagraphStyle>
                            <span>
                                {revealedJokeId === joke.id ? joke.punchline : '********'}
                            </span>
                        </ParagraphStyle>
                        <ButtonStyle onClick={() => ShowJoke(joke.id)}>
                            {revealedJokeId === joke.id ? 'Hide punchline' : 'Show punchline'}
                        </ButtonStyle>
                    </JokeDiv>
                )
            }
        </JokeContent>
    );
}
