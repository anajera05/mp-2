import Jokes from "./Jokes.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Joke } from "../interfaces/Jokes.ts";

const ParentDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`;


export default function JokeContent() {
  const [data, setData] = useState<Joke[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const jokesArray = [];

      // used a for loop to make the Array because API fetched one at a time
      for (let i = 0; i < 6; i++) {
        const rawData = await fetch("https://official-joke-api.appspot.com/random_joke");
        const joke: Joke = await rawData.json();
        jokesArray.push(joke);
      }
      setData(jokesArray);
    }

    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("ERROR: " + e));
  }, []);

  return (
      <ParentDiv>
            <Jokes data={data} />
      </ParentDiv>
  );
}
