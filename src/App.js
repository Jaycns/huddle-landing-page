import { Box } from "./components/styles/container.styled";
import "./App.css";
import Header from "./components/header";
import { content } from "./components/content";
import Card from './components/Cards';
import Footer from './components/footer';
import {ThemeProvider} from 'styled-components'
//import GlobalStyles from './components/styles/Global'

export const theme = {
  light: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  dark: {
    header: "#1E5128",
    body: "#191A19",
    footer: "#003333",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Box>
        <Header />
        {content.map((item) => {
          return <Card item={item} />;
        })}
      </Box>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
