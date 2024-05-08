import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInputs {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInputs) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  //os codigos comentados abaixos sao codigos para funcionar com back-end
  //json-server em ambiente de desenvolvimento
  //foi feito ajustes para funcionar localmente somente no front porem sem presistencia dos dados
  async function fetchTransactions(query?: string) {
    // const response = await api.get('transactions', {
    //   params: {
    //     _sort: 'createdAt',
    //     _order: 'desc',
    //     q: query,
    //   },
    // })

    // setTransactions(response.data)
    if(query)
      setTransactions(searchTransactions(query))
  }

  // Função para realizar a pesquisa de texto completo em qualquer campo
  function searchTransactions(searchTerm: string): Transaction[] {
    return transactions.filter(transaction =>
      Object.values(transaction).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  async function createTransaction(data: CreateTransactionInputs) {
    const { description, category, price, type } = data
    // const response = await api.post('transactions', {
    //   description,
    //   category,
    //   price,
    //   type,
    //   createdAt: new Date(),
    // })

    // setTransactions((state) => [response.data, ...state])

    const NewTransacrion:Transaction  = {

      description,
      category,
      price,
      type,
      createdAt: new Date().toString(),
      id: transactions.length + 1
    }
    

    setTransactions((state) => [NewTransacrion, ...state])
  }

  // useEffect(() => {
  //   fetchTransactions()
  // }, [])
  
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
