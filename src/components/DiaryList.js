import React from 'react';
import Diary from './Diary';
import '../styles/DiaryList.css';

class DiaryList extends React.Component {
    render() {
        return (
            <div className="diaryListContainer">
                <Diary />
            </div>
        );
    }
}

export default DiaryList;