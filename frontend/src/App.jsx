import AuthProvider from "./context/AuthProvider";
import { ThemeProvider } from "./context/ThemeContext";
import AppRouter from "./routes/AppRouter";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Toaster
          position="top-center"
          gutter={16}
          toastOptions={{
            duration: 3000,
            style: {
              padding: 10,
              borderRadius: "12px",
              marginTop: "80px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              background: "transparent",
            },
            success: {
              style: {
                background: "#155DFC",
                color: "#fff",
                fontWeight: "bold",
                border: "2px solid #0F4ACB",
              },
            },
            error: {
              style: {
                background: "#E03131",
                color: "#fff",
                fontWeight: "bold",
                border: "2px solid #C92A2A",
              },
            },
          }}
        />

        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  );
}
