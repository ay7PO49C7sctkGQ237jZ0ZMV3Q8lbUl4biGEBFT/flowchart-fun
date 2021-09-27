import { useContext } from "react";
import { Box } from "../slang";
import { AppContext } from "./AppContext";

export default function MobileTabToggle() {
  const { toggleMobileEditorTab } = useContext(AppContext);
  return (
    <Box
      p={1}
      background="palette-purple-1"
      at={{ tablet: { display: "none" } }}
    >
      <Box
        as="button"
        background="palette-purple-0"
        color="palette-white-0"
        rad={3}
        p={2}
        onClick={toggleMobileEditorTab}
      >
        Text Editor / Graph
      </Box>
    </Box>
  );
}