// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Link,
  Fill,
  Layout,
  Appear
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");
require("./styles.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE",
    bgColorOne: "#00171F",
    textColorOne: "#FFFFFF",
    textColorTwo: "#00A8E8"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  graphql: require("../assets/graphql.svg"),
  github: require("../assets/github.png"),
  twitter: require("../assets/twitter.svg"),
  twitterTwo: require("../assets/twitter.png"),
  facebook: require("../assets/facebook.png"),
  nyt: require("../assets/nyt.png"),
  pinterest: require("../assets/pinterest.png"),
  getninjas: require("../assets/getninjas.png"),
  githubOne: require("../assets/github1.png"),
  logos: require("../assets/logos.png"),
  query1: require("../assets/query1.png"),
  query2: require("../assets/query2.png"),
  mutation1: require("../assets/mutation1.png"),
  mutation2: require("../assets/mutation2.png"),
  screen2: require("../assets/screen2.png"),
  screen3: require("../assets/screen3.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="bgColorOne">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            <Image src={images.graphql} width="4%" margin="0px auto 30px" />
          </Heading>
          <Text margin="2px 0 0" textColor="textColorOne" textSize="90px" bold>
            GraphQL
          </Text>
          <Text margin="10px 0 0" textColor="textColorOne" textSize="40px" bold>
            Linguagem de consulta para API's
          </Text>
          <Layout
            style={{
              marginTop: 150,
              justifyContent: "space-between"
            }}
          >
            <Fill>
              <Link href="https://rafaelbastiani.com" target="_blank">
                <Text
                  textColor="textColorOne"
                  style={{ textAlign: "left", fontSize: 25 }}
                >
                  Rafael de Bastiani
                </Text>
              </Link>
            </Fill>
            <Fill>
              <Link href="https://github.com/Bastiani" target="_blank">
                <Text
                  textColor="textColorOne"
                  style={{ fontSize: 25 }}
                  lineHeight={10}
                >
                  GitHub: Bastiani
                </Text>
              </Link>
            </Fill>
            <Fill>
              <Link href="https://twitter.com/RBastiani" target="_blank">
                <Text
                  textColor="textColorOne"
                  style={{ textAlign: "right", fontSize: 25 }}
                >
                  Twitter: RBastiani
                </Text>
              </Link>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColorOne">
          <Heading size={1} textColor="textColorTwo">
            Quem sou eu?
          </Heading>
          <Appear>
            <Text textColor="textColorOne" margin="25px auto 25px">
              - Criador do RFDevCondomínios
            </Text>
          </Appear>
          <Appear>
            <Text textColor="textColorOne" margin="25px auto 25px">
              - Entusiasta do JavaScript
            </Text>
          </Appear>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="bgColorOne"
          textColor="textColorOne"
        >
          <Heading size={2} textColor="textColorTwo" margin="0 0 50px 0">
            Por que GraphQL?
          </Heading>
          <List margin="0 30px 0 30px" style={{ textAlign: "justify" }}>
            <Appear>
              <ListItem>
                Peça o que você precisa e tenha, exatamente, o que você pediu
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Tenha vários recursos em um único request</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Descreva o que é possível com o sistema de tipos
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Heading size={3} textColor="textColorTwo" margin="0 0 50px 0">
              Quem está usando?
            </Heading>
            <Image
              src={images.logos}
              style={{ width: 610, margin: "0 0 10 0" }}
            />
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="textColorTwo" margin="0 0 20px 0">
            Types
          </Heading>
          <div className="display-flex">
            <Image
              src={images.screen2}
              margin="0 0 0 30px"
              style={{ height: 400 }}
            />
            <List
              textColor="textColorOne"
              margin="50px 0 0 50px"
              style={{ fontWeight: "bold" }}
            >
              <Appear>
                <ListItem>"type Post" é um GraphQL Object Type</ListItem>
              </Appear>
              <Appear>
                <ListItem>Int</ListItem>
              </Appear>
              <Appear>
                <ListItem>Float</ListItem>
              </Appear>
              <Appear>
                <ListItem>String</ListItem>
              </Appear>
              <Appear>
                <ListItem>Boolean</ListItem>
              </Appear>
              <Appear>
                <ListItem>ID</ListItem>
              </Appear>
            </List>
          </div>
          <Text textColor="textColorOne" margin="25px auto 25px">
            GraphQL schema language.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="textColorTwo" margin="0 0 20px 0">
            Queries
          </Heading>
          <div className="display-flex">
            <Image src={images.query1} style={{ height: 274 }} />
            <Appear>
              <Image src={images.query2} style={{ height: 357 }} />
            </Appear>
          </div>
          <Text textColor="textColorOne" margin="25px auto 25px">
            Basicamente o GraphQL faz uma seleção de campos em objetos.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="textColorTwo" margin="0 0 20px 0">
            Mutations
          </Heading>
          <Image src={images.mutation1} />
          <Appear>
            <Image src={images.mutation2} />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="textColorOne" margin="25px auto 25px">
            Vamos para o código!
          </Text>
          <Text textColor="textColorOne" margin="25px auto 25px">
            Servidor do exemplo: http://rafaelbastiani.com:5000/graphql
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="textColorTwo" margin="0 0 20px 0">
            Obrigado!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
