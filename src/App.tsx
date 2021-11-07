import styled from 'styled-components';

const Title = styled.h1`
  font-size: 64px;
  color: #8257e6;
`

export function App() {
  const teste = () => {
    console.log("teste")
  }
  return (
    <div className="App">
      <Title>Hello World</Title>
      <button onClick={teste}>Clicar</button>
    </div>
  );
}
