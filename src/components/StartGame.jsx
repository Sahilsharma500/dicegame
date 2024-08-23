import styled from "styled-components"

const StartGame = ({toggle}) => {
    return (
        <Container>
             <div className="img">
            <img  src="/images/dice.png"/>
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}
export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
    .img{
        img{
            width: 649px;
            height: 522px;
        }
    }
`;
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