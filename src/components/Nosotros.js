import React from "react";
import tw from "twin.macro";
import Main from "./features/TwoColWithButton";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";

class Nosotros extends React.Component {
  render() {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    return (
      <div>
        <center>
          <Main
            subheading={<Subheading>Trabajo de calidad</Subheading>}
            imageSrc={heroScreenshotImageSrc}
            imageBorder={true}
            imageDecoratorBlob={true}
          />
        </center>
      </div>
    );
  }
}

export default Nosotros;
