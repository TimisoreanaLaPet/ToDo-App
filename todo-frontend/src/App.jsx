import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Layout from "./features/layout/Layout.jsx";
import Notes from "./features/notes/Notes.jsx";
import ToDo from "./features/todo/ToDo.jsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme.js";

function App() {
  return (
      <div className="app">
          <ThemeProvider theme={theme}>
              <BrowserRouter>
                  <CssBaseline enableColorScheme/>
                  <Routes>
                      <Route element={<Layout/>}>
                          <Route path={"/"} element={<Navigate to={"todo"} replace/>} />

                          <Route path="todo" element={<ToDo/>} />
                          <Route path="notes" element={<Notes/>} />
                      </Route>
                  </Routes>
              </BrowserRouter>
          </ThemeProvider>
      </div>
  )
}

export default App
