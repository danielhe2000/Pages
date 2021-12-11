import { Router } from "@reach/router";

import Posts from './posts'

function App() {
  return (
    <Router>
      <Posts path="/" />
    </Router>
  );
}

export default App;