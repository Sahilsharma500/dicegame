import { useState } from "react";
import styled from "styled-components";
const RoleDice =({roleDice, currentDice}) => {

    return (
        <DiceContainer>
            <div className="dice"
            onClick={(roleDice)}>
                <img src = {`/images/dices/dice_${currentDice}.png`} alt="dice 1" />
            </div>
        <p>Click on the dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`