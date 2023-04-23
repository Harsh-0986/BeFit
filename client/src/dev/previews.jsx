import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import BodyPart from "../components/BodyPart";
import HorizontalScrollBar from "../components/HorizontalScrollBar";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/HeroBanner">
        <HeroBanner />
      </ComponentPreview>
      <ComponentPreview path="/SearchExercises">
        <SearchExercises />
      </ComponentPreview>
      <ComponentPreview path="/BodyPart">
        <BodyPart />
      </ComponentPreview>
      <ComponentPreview path="/HorizontalScrollBar">
        <HorizontalScrollBar />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
