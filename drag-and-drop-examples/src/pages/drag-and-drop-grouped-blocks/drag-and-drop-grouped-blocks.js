import React, { useState } from 'react';
import { arrayMoveImmutable } from 'array-move';

import { DragAndDropGroupedBlocksList } from './drag-and-drop-grouped-blocks-list';

import { mockDataForGroupedBlocks } from './mock-data';

import './drag-and-drop-grouped-blocks.css';

export const DragAndDropGroupedBlocks = () => {
    const [list, setList] = useState(mockDataForGroupedBlocks);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setList(arrayMoveImmutable(list, oldIndex, newIndex),);
    };

    return <DragAndDropGroupedBlocksList
                axis='xy'    
                list={list} 
                useWindowAsScrollContainer
                helperClass='moveBlock'
                onSortEnd={onSortEnd}
            />;
};
