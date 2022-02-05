import "../styles/globals.css";
import { AddEntryProvider } from "../components/context/Add-entryContext";
const data = [
  {
    id: 1,
    value: 2000,
    message: "paye du mois",
  },
  {
    id: 2,
    value: 200,
    message: "Achat lecler",
  },
  {
    id: 3,
    value: -1000,
    message: "paye du mois",
  },
];
function MyApp({ Component, pageProps }) {
  return (
    <AddEntryProvider>
      <Component {...pageProps} data={data} />;
    </AddEntryProvider>
  );
}

export default MyApp;
