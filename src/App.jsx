import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import ToDoIncrement from "./components/ToDoIncrement";

function App() {
  return (
    <>
       <header>
        <h1>Aplikasi ToDo List</h1>
      </header>

      <section>
        <ToDoIncrement />
      </section>

      <section style={{ margin: '1em 0em' }}>
        <ToDoForm />
        <ToDoList />
      </section>

      <footer>
        <h3>Dibuat oleh orang tidak jelas &copy; 2024</h3>
      </footer>
    </>
  );
}

export default App;
