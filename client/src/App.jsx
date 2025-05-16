import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom"

import { Employee }from "./components/Employee"
import { Header } from "./components/Header";


function App() {
  return (
    <>
      <Header />
  
      <Container pt="6" maxW="container.md">
        <Routes>
          <Route path="employees/:id" element={<Employee/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
