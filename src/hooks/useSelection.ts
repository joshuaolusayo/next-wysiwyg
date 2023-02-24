import areEqual from "deep-equal";
import { useCallback, useState } from "react";
import { BaseEditor, BaseRange, BaseSelection } from "slate";
import { ReactEditor } from "slate-react";

type UseSelectionReturnType = [
  BaseSelection | null,
  (selection: BaseSelection) => void
];

export default function useSelection(
  editor: BaseEditor & ReactEditor
): UseSelectionReturnType {
  const [selection, setSelection] = useState<BaseSelection | null>(
    editor.selection
  );
  const setSelectionOptimized = useCallback(
    (newSelection: BaseSelection) => {
      // don't update the component state if selection hasn't changed.
      if (areEqual(selection, newSelection)) {
        return;
      }
      setSelection(newSelection);
    },
    [setSelection, selection]
  );

  return [selection, setSelectionOptimized];
}
