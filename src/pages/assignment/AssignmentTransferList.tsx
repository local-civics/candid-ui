import * as React        from 'react';
import {
    TransferList, TransferListData,
} from '@mantine/core'

const initialValues: TransferListData = [
    [
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'next', label: 'Next.js' },
        { value: 'blitz', label: 'Blitz.js' },
        { value: 'gatsby', label: 'Gatsby.js' },
        { value: 'vue', label: 'Vue' },
        { value: 'jq', label: 'jQuery' },
    ],
    [
        { value: 'sv', label: 'Svelte' },
        { value: 'rw', label: 'Redwood' },
        { value: 'np', label: 'NumPy' },
        { value: 'dj', label: 'Django' },
        { value: 'fl', label: 'Flask' },
    ],
];

/**
 * AssignmentTransferListProps
 */
export type AssignmentTransferListProps = {

}

/**
 * AssignmentTransferList
 * @param props
 * @constructor
 */
export function AssignmentTransferList(props: AssignmentTransferListProps){
    const [data, setData] = React.useState<TransferListData>(initialValues);
    return <div>
        <TransferList
            value={data}
            onChange={setData}
            searchPlaceholder="Search"
            titles={['Classes', 'Assignees']}
            listHeight={300}
            breakpoint="sm"
            filter={(query, item) =>
                item.label.toLowerCase().includes(query.toLowerCase().trim()) ||
                item.description.toLowerCase().includes(query.toLowerCase().trim())
            }
        />
    </div>
}