import React from "react";
import PF from "./faqs/SingleCol";
import tw from "twin.macro";

class Ayuda extends React.Component {
  render() {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;
    return (
      <div>
        <center>
          <PF
            subheading={<Subheading>FAQS</Subheading>}
            heading={
              <>
                Preguntas <HighlightedText>Frecuentes ?</HighlightedText>
              </>
            }
            faqs={[
              {
                question: "¿Qué es Outsourcing de TI?",
                answer:
                  "Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
              {
                question: "¿Qué hace un consultor de TI?",
                answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
              {
                question: "¿Cómo funciona la consultoría de TI?",
                answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
              {
                question:
                  "¿Necesidades o desafíos que enfrentan estas empresas?",
                answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
              {
                question: "¿Cual es nuestra especialidad?",
                answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
              {
                question: "¿Como te vamos a ayudar a crecer?",
                answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
            ]}
          />
        </center>
      </div>
    );
  }
}

export default Ayuda;
