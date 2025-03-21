import styled from "styled-components";

function StartGame({toggle}) {
  return (
    <Container>
      <img src="./img/dices.png" alt="" />
      <div className="content">
        <h1 className="title">Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh; `;

const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  gap: 10px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #383838;

  }
  
  `;
