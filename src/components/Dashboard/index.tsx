import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashobard () {
  return(
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}