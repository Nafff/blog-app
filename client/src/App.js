import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import "./screens/Home/Home.css";
import Posts from "./screens/Posts/Posts";
import PostCreate from "./screens/PostCreate/PostCreate";
import "./screens/PostCreate/PostCreate.css";
import PostDetails from "./screens/PostDetails/PostDetails";
import PostEdit from "./screens/PostEdit/PostEdit";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/add-posts" component={PostCreate} />
        <Route exact path="/posts/:id" component={PostDetails} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
      </Switch>
    </div>
  );
}

export default App;
