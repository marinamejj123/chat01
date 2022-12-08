import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { Link } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 
const steps = [
    {
        id: '0',
        message: 'Hola somos la empresa Nube Technologies',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Por favor! Escribe tu Nombre',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " Hola {previousValue}, encantado de conocerte",
        trigger: 4
    }, 
    {
      id: "4",
      message: "Necesitas algo de mi?",
      trigger: "5"
  },
  {
      id: "5",
      options: [
          {value: "y", label: "Si", trigger: "6A"},
          {value: "n", label: "No", trigger: "6B"},
      ]
  },
  {
      id: "6A",
      message: "Eres Nuevo por aqui...",
      trigger: "cliente"
  },
  {
      id: "cliente",
      options: [
          {value: "f", label: "Cliente Nuevo", trigger: "6B"},
          {value: "b", label: "Cliente Antiguo", trigger: "7B"},
      ]
  },
  {
      id: "6B",
      message: "Increible! Digame que tipo de proyecto esta buscando...",
      trigger: "seleccion"
  },
  {
      id: "6C",
      message: "Lo siento si no puedo serle de ayuda. Hasta Luego",
      end: true
  },
  {
      id: "seleccion",
      options: [
          {value: "f", label: "Pequeño", trigger: "7A"},
          {value: "b", label: "Mediano", trigger: "7A"},
          {value: "b", label: "Grande", trigger: "7A"},
      ]
  },
  {
      id: "7A",
      message: "Ya veo! Cual es la area de su proyecto?",
      trigger: "seleccionFront"
  },
  {
      id: "7B",
      message: "Tiene Fallas en su Producto, Cual es el Grado?",
      trigger: "seleccionBack"
  },
  {
      id: "seleccionFront",
      options: [
          {value: "Angular_(framework)", label: "Salud", trigger: "9"},
          {value: "React", label: "Politica", trigger: "10"},
          {value: "Vue.js", label: "Financiera", trigger: "11"},
      ]
  },
  {
      id: "seleccionBack",
      options: [
          {value: "Spring_Framework", label: "Moderado", trigger: "12"},
          {value: "Laravel", label: "Significativo", trigger: "12"},
          {value: ".NET_Core", label: "Esencial", trigger: "12"},
      ]
  },
  {
      id: "9",
      message: "Los proyectos del area de la salud tienen un rango de 500-2000$.Garantizamos estandares de calidad en cada uno de nuestros proyectos y tambien contamos con los mejores programadores del mundo",
      trigger: "preguntaVuelta"
  },
  {
      id: "10",
      message: "Los proyectos del area Politica tienen un rango de 700 - 5000$.Garantizamos estandares de calidad en cada uno de nuestros proyectos y tambien contamos con los mejores programadores del mundo",
      trigger: "preguntaVuelta"
  },
  {
      id: "11",
      message: "Los proyectos del area Financiera tienen un rango de 800-8000$.Garantizamos estandares de calidad en cada uno de nuestros proyectos y tambien contamos con los mejores programadores del mundo",
      trigger: "preguntaVuelta"
  },
  {
      id: "12",
      message: "Nos pondremos en contacto con su empresa en unos minutos...",
      trigger: "preguntaVuelta"
  },
  {
      id: "preguntaVuelta",
      message: "Necesitas algo mas?",
      trigger: "respuestaVuelta",
  }, 
  {
      id: "respuestaVuelta",
      options: [
          {value: "y", label: "Si", trigger: "6A"},
          {value: "n", label: "No", trigger: "6C"},
      ],
  }
];
 
// Creating our own theme
const theme = {
   /* background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',*/

    background: '#f5f8fb',
    headerBgColor: '#197B22',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#eb3449',
    botFontColor: '#fff',
    userBubbleColor: '#0cb3c9',
    userFontColor: '#fff',
};
 
// Set some properties of the bot
const config = {
    //botAvatar: "images/portfolio.jpg",
    floating: true,
};

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Empresa</Link>} scroll>
          <Navigation>
            <Link to="/Resume">Resumen</Link>
            <Link to="/Aboutme">Acerca de la Empresa</Link>
            <Link to="/Projects">Proyectos</Link>
            <Link to="/Contact">Contactenos</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Empresa</Link>}>
          <Navigation>
            <Link to="/Resume">Resumem</Link>
            <Link to="/Aboutme">Acerca de la Empresa</Link>
            <Link to="/Projects">Proyectos</Link>
            <Link to="/Contact">Contactenos</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"></div>
          <Main />
        </Content>
      </Layout>
      <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Nube Technologies"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
    </div>
  );
}

export default App;
