import { Box } from "./components/styles/container.styled";
import "./App.css";
import Header from "./components/header";
import { content } from "./components/content";
import Card from './components/Cards';
import Footer from './components/footer';
import {ThemeProvider} from 'styled-components'
//import GlobalStyles from './components/styles/Global'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}
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
