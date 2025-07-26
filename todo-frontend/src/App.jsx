import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Layout from "./features/layout/Layout.jsx";
import Notes from "./features/notes/Notes.jsx";
import ToDo from "./features/todo/ToDo.jsx";

function App() {

  return (
      <div className="app">
          <BrowserRouter>
              <Routes>
                  <Route element={<Layout/>}>
                      <Route path={"/"} element={<Navigate to={"todo"} replace/>} />

                      <Route path="todo" element={<ToDo/>} />
                      <Route path="notes" element={<Notes/>} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
