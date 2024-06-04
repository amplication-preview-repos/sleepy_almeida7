import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AiModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="modelName" source="modelName" />
        <TextInput label="version" source="version" />
      </SimpleForm>
    </Edit>
  );
};
