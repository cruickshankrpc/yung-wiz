import HomePage from "./components/HomePage/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./context/ModalContext";

const queryClient = new QueryClient();

function App() {
  return (
    <ModalProvider>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ModalProvider>
  );
}

export default App;
