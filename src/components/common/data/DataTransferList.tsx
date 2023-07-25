import * as React from "react";
import {
  Group,
  TransferList,
  Text,
  TransferListItemComponentProps,
  TransferListProps, Checkbox
} from "@mantine/core";

/**
 * DataTransferList
 * @param props
 * @constructor
 */
export function DataTransferList(props: TransferListProps) {
  return (
    <TransferList
      miw={200}
      searchPlaceholder="Search"
      titles={["Available", "Selected"]}
      listHeight={300}
      breakpoint="sm"
      filter={(query, item) => item.label.toLowerCase().includes(query.toLowerCase().trim())}
      itemComponent={ItemComponent}
      {...props}
    />
  );
}


function ItemComponent(props: TransferListItemComponentProps) {
  return <Group noWrap>
    <div style={{ flex: 1 }}>
      <Text size="sm" weight={500}>
        {props.data.label}
      </Text>
      <Text size="xs" color="dimmed" weight={400}>
        {props.data.description}
      </Text>
    </div>
    <Checkbox checked={props.selected} onChange={() => {}} tabIndex={-1} sx={{ pointerEvents: 'none' }} />
  </Group>
}