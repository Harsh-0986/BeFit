import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import HeroBanner from "../components/HeroBanner";

const ComponentPreviews = () => {
  return <Previews palette={<PaletteTree />}>
    <ComponentPreview path="/HeroBanner">
      <HeroBanner/>
    </ComponentPreview>
  </Previews>;
};

export default ComponentPreviews;
