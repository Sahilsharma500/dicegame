import styled from "styled-components"
const Rules = () => {
    return (
        <RulesContainer>
         <div className="text">
         <h2>How to play this game?</h2>  
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on dice if selected number is equal to dice number you will get same point as dice{" "}</p>
            <p>if you get wrong guess then 2 point will be deducted</p>
            </div> 
        </RulesContainer>
    )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: auto;
    background-color: #fbf1f1;
    padding: 20px;
    margin-top: 40px;
    h2 {
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`