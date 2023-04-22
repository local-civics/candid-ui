import * as React        from 'react';
import {
    TransferList, TransferListData,
} from '@mantine/core'

/**
 * AssignmentTransferListProps
 */
export type AssignmentTransferListProps = {
    data: TransferListData,
    onChange?: (next: TransferListData) => void;
}

/**
 * AssignmentTransferList
 * @param props
 * @constructor
 */
export function AssignmentTransferList(props: AssignmentTransferListProps){
    const [data, setData] = React.useState<TransferListData>(props.data);
    const onChange = (next: TransferListData) => {
        setData(next)
        props.onChange && props.onChange(next)
    }
    return <TransferList
        miw={200}
        value={data}
        onChange={onChange}
        searchPlaceholder="Search"
        titles={['Options', 'Assignees']}
        listHeight={300}
        breakpoint="sm"
        filter={(query, item) => item.label.toLowerCase().includes(query.toLowerCase().trim())}
    />
}