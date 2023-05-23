import * as React from "react";
import { TransferList, TransferListData } from "@mantine/core";

/**
 * ClassTransferListProps
 */
export type ClassTransferListProps = {
  data: TransferListData;
  onChange?: (next: TransferListData) => void;
};

/**
 * ClassTransferList
 * @param props
 * @constructor
 */
export function ClassTransferList(props: ClassTransferListProps) {
  const [data, setData] = React.useState<TransferListData>(props.data);
  const onChange = (next: TransferListData) => {
    setData(next);
    props.onChange && props.onChange(next);
  };
  return (
    <TransferList
      miw={200}
      value={data}
      onChange={onChange}
      searchPlaceholder="Search"
      titles={["Available", "Selected"]}
      listHeight={300}
      breakpoint="sm"
      filter={(query, item) => item.label.toLowerCase().includes(query.toLowerCase().trim())}
    />
  );
}
