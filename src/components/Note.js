import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return (
        <div className="note">
            <span>Hello This the first note</span>
            <div className="note-footer">
                <small>12/1/21</small>
                <MdDeleteForever className="delete-icon" size="1.3em"/>
            </div>
        </div>
    );
};

export default Note;