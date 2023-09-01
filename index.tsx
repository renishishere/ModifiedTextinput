import * as React from "react";
import { TextInput, TextInputProps } from "react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

function ModifiedTextInput(props: TextInputProps & {bottomSheetTextInput: boolean}) {
  const editableRef: any = React.useRef();

  return (
    <>
      <TextInput
        {...props}
        style={{
          display: "none",
        }}
        value={props.value}
        ref={editableRef}
      />
      {
        props.bottomSheetTextInput?  <BottomSheetTextInput         {...props}
        value={props.value}
        editable
        onFocus={(e) => {
          editableRef.current.focus();
        }}
        onBlur={(e) => {
          e.preventDefault();
        }}/>:       <TextInput
        {...props}
        value={props.value}
        editable
        onFocus={(e) => {
          editableRef.current.focus();
        }}
        onBlur={(e) => {
          e.preventDefault();
        }}
      />
      }
    </>
  );
}

export default React.memo(ModifiedTextInput)