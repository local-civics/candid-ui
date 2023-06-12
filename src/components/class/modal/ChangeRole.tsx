import { ClassMemberData } from "../data";
import * as React from "react";
import { modals } from "@mantine/modals";
import { Button, Select } from "@mantine/core";

/**
 * ChangeRoleProps
 */
export type ChangeRoleProps = {
  data: ClassMemberData
  onChangeRole?: (data: ClassMemberData, newRole: "student" | "educator") => void;
}

/**
 * ChangeRole
 * @param props
 * @constructor
 */
export function ChangeRole(props: ChangeRoleProps) {
  const [newRole, setNewRole] = React.useState("");
  const rename = (data: ClassMemberData, newRole: string) => {
    if(["student", "educator"].includes(newRole)){
      props.onChangeRole && props.onChangeRole(data, newRole as "student" || "educator");
    }

    setNewRole("");
    modals.closeAll();
  };
  return (
    <>
      <Select
        label="New role"
        defaultValue={props.data.role}
        placeholder="Pick one"
        dropdownPosition="bottom"
        data={[{
          value: "student",
          label: "Student",
        },{
          value: "educator",
          label: "Educator"
        }]}
        onChange={(e) => setNewRole(e || "")}
      />
      <Button type="submit" fullWidth mt="md" onClick={() => rename(props.data, newRole)}>
        Submit
      </Button>
    </>
  );
}