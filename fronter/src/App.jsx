import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";

import Eliminar from "./pages/Eliminar";
import Modificar from "./pages/Modificar";
import Listar from "./pages/Listar";
import Obtener from "./pages/Obtener";
import Registro from "./pages/Registro";
import Home from "./pages/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="Eliminar" element={<Eliminar />} /> 
            <Route path="Modificar" element={<Modificar />} />
            <Route path="Listar" element={<Listar />} />
            <Route path="Obtener" element={<Obtener/>} />
            <Route path="Registro" element={<Registro />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
