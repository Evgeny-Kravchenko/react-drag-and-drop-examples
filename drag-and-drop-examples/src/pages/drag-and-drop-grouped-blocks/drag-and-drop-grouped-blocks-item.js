import React from 'react';
import clsx from 'clsx';
import { SortableElement } from 'react-sortable-hoc';

import './drag-and-drop-grouped-blocks.css';

export const DragAndDropGroupedBlocksItem = SortableElement(
    ({ className, value }) => {
        return <div tabIndex={0} className={clsx('block', className)}>{value}</div>;
    }
);
