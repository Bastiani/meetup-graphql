// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
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
  twitter: require("../assets/twitter.svg")
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
            Linguagem de consulta para a sua API
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
              - Apaixonado por desenvolvimento web
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
            Porque GraphQL?
          </Heading>
          <List margin="0 0 0 50px">
            <Appear>
              <ListItem>
                Peça o que você precisa, e tenha exatamente o que você pediu
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Tenha vários recursos em um unico request</ListItem>
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
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
