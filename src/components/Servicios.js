import React from "react";
import Features from "./features/ThreeColWithSideImage";
import tw from "twin.macro";

class Servicios extends React.Component {
  render() {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;
    return (
      <div>
        <center>
          <Features
            subheading={<Subheading>Servicios</Subheading>}
            heading={
              <>
                Tenemos Excelente <HighlightedText>Servicio.</HighlightedText>
              </>
            }
          />
        </center>
      </div>
    );
  }
}

export default Servicios;
