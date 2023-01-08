import styled from 'styled-components';
import Tbody from './Tbody.js';
import DogSinglePage from './DogSinglePage.js';

const DogListPage = () => {
    return (
        <main>
            <Header>Kutyák</Header>
            <Table>
                <Thead/>
                <Tbody/>
            </Table>
            <Footer>Szeszi 2022. Szeghalom</Footer>
        </main>
    );
}

const Header = styled.h1`
  text-align: center;
  font-size: 3rem;
`

const Footer = styled.footer`
  text-align: center;
  font-size: 2rem;
  background-color: rgb(126, 84, 21);
`

const Table = styled.table`
  width: 80%;
  margin: auto;
  border-collapse: collapse;
  font-size: 1.2rem;
`
const Thead = () => {
  return (
    <thead>
      <tr>
        <th>Fajta</th>
        <th>Leírás</th>
        <th>Kép</th>
      </tr>
    </thead>
  );
}

export default DogListPage;