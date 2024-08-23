import { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Rules from "./Rules";
const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min,max) => {
        console.log(Math.floor(Math.random() * (max-min) + min))
        return  Math.floor(Math.random() * (max-min) + min);
    };

    const roleDice = () => {
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }
        setError("");
        const randomNumber = generateRandomNumber(1,7);

        setCurrentDice((prev) => randomNumber);


        if(selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    };

    const resetScore = () => {
         setScore(0);
    }


    return(
        <MainContainer>
            <div className="top_section">
            <TotalScore score={score}/>
            <NumberSelector 
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            error={error} setError={setError}/>
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice}/>
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button
                onClick={() => setShowRules((prev) =>!prev)}
                >
                    {showRules ?"Hide " : "Show "}
                    Rules</Button>
            </div>
            {showRules && <Rules />}
        </MainContainer>
    )
}
export default GamePlay;

const MainContainer = styled.div`
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 70px;
    }
    .btns {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`
const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 10px 18px;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;

    &:hover{

        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;

const OutlineButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    border: 1px solid black;
    padding: 10px 18px;
    background: white;
    border-radius: 5px;
    min-width: 220px;

    font-size: 16px;

    &:hover{

        background-color: black;
        border: 1px solid black;
        color: white;
        transition: 0.3s background ease-in;
    }
`;

