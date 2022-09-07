import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import NotFound from "./Components/pages/NotFound";
import Category from "./Components/pages/Category";
import { Recipe } from "./Components/Recipe";

function App() {
  return (
    <div>
      <Header />
      <main className="container content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
          <Route path="/category/:name" component={Category} />
          <Route path="/meal/:id" component={Recipe} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
