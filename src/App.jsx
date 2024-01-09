import { createContext,useState } from 'react'
//import { useState } from 'react'
import Quiz from "./components/Quiz"
import Score from "./components/Score"
import Menu from "./components/menu"
import "./App.css"
export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("Menu");
  const [score, setScore] = useState(0);
  return (
    <DataContext.Provider value={{ appState, setAppState, score, setScore }}>
      <div className="App">
        <h1>Web Development Quiz</h1>
        {appState === "Menu" && <Menu />}
        {appState === "Quiz" && <Quiz />}
        {appState === "Score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;