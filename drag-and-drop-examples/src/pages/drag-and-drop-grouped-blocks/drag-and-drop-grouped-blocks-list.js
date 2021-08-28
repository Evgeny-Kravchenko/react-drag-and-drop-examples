import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import { DragAndDropGroupedBlocksItem } from './drag-and-drop-grouped-blocks-item';

import './drag-and-drop-grouped-blocks.css';

export const DragAndDropGroupedBlocksList = SortableContainer(
    ({ list }) => {
        return (
            <div className='drag-and-drop-grouped-blocks'>
                {list.map((item, index) => {
                    return <DragAndDropGroupedBlocksItem
                                index={index}
                                key={`item-${item.id}`}
                                value={item.value}
                                className={item.className}
                    />;
                })}
            </div>
        );
    }
);