import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AiModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="modelName" source="modelName" />
        <TextInput label="version" source="version" />
      </SimpleForm>
    </Create>
  );
};
