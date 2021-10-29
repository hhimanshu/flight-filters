import "./styles.css";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { TableFilters } from "./components/TableFilters";
export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <TableFilters />
      </div>
    </ChakraProvider>
  );
}
