import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import './home.css';

export const HomePage = () => {
    const history = useHistory();

    const handleGoToGroupedBlocks = () => {
        history.push('/drag-and-drop-grouped-blocks');
    };

    const handleGoToTableColumns = () => {
        history.push('/drag-and-drop-grouped-columns');
    };

    return (
        <div className='pageContainer'>
            <div className={clsx('menuItem', 'grouped-blocks')} onClick={handleGoToGroupedBlocks}>
                Drag and drop grouped blocks
            </div>
            <div className={clsx('menuItem', 'tableColumns')} onClick={handleGoToTableColumns}>
                Drag and drop table columns
            </div>
        </div>
    );
};