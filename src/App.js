// React Router
import { Heading } from "@chakra-ui/layout"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./screens/Home"
import About from "./screens/About"
import Resources from "./screens/Resources"
import Contact from "./screens/Contact"

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/contact" component={Contact} />
          <Route>
            <Heading color="red.600" display="grid" placeItems="center" width="100vw" height="80vh">The page was not found</Heading>
          </Route>
        </Switch>
      </Router>
  )
}

export default App
