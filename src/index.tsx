import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"

import { store } from "./app/redux/store"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client"
import Navbar from "./app/components/Navbar"
const client = new ApolloClient({
  uri: "http://localhost:3333/graphql",
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
)
