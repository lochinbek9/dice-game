
import styled from "styled-components"

function TotalScore() {
  return (
    <div>
        <h1>0</h1>
        <p>Total score</p>
    </div>
  )
}

const ScoreContainer = styled.div`
     h1{
        font-size: 100px;
     }
     p{
        font-size: 24px;
        font-weight: 600;
     }

`
export default TotalScore

