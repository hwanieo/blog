import { useCreateBlockNote } from "@blocknote/react";
// Or, you can use ariakit, shadcn, etc.
import {
  BlockNoteView,
  darkDefaultTheme,
  lightDefaultTheme,
  type Theme,
} from "@blocknote/mantine";
// Default styles for the mantine editor
import "@blocknote/mantine/style.css";
// Include the included Inter font
import "@blocknote/core/fonts/inter.css";
import { ko } from "@blocknote/core/locales";

function Editor() {
  // Create a new editor instance
  const editor = useCreateBlockNote({
    dictionary: { ...ko },
  });

  // Render the editor
  return <BlockNoteView editor={editor} />;
}

export { Editor };
