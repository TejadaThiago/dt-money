import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Trasactions() {
  return ( 
    <div > 
      <Header />

      <Summary />
      
      <TransactionsContainer>

        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="40%">Desenvolvimento do site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 1.200,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width="40%">Hospedagem</td>
              <td>
                <PriceHighlight variant="outcome">
                  -R$ 800,00
                </PriceHighlight>
              </td>
              <td>Infraestrutura</td>
              <td>30/05/2024</td>
            </tr>
            <tr>
              <td width="40%">Comissão</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 200,00
                </PriceHighlight>
              </td>
              <td>Bonificação</td>
              <td>11/02/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}