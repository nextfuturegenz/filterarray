// import { useRecoilValue } from 'recoil';
// import { authAtom } from '../../atoms';
//import { useNavigate } from 'react-router-dom';


const messageItemStyle = {
    display: 'flex',
    // alignItems: 'center',
    padding: '5px',
    borderBottom: '1px solid #ddd',
    //boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow
    borderRadius: '8px', // Rounded corners
    marginBottom:'5px',
};

const avatarStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
    marginLeft: '5px'
};

const messageInfoStyle = {
    flex: 1,
};

const nameStyle = {
    fontWeight: 'bold',
    marginBottom: '2px',
};

const lastMessageStyle = {
    color: '#666',
};


const ChatItem = ({ avatar, name, lastMessage }) => {



    return (
        <div style={messageItemStyle}>
            <img src={avatar} alt={`${name}'s avatar`} style={avatarStyle} />
            <div style={messageInfoStyle}>
                <h5 style={nameStyle}>{name}</h5>
                <p style={lastMessageStyle} className="text-muted">{lastMessage}</p>
            </div>
        </div>
        // <div key={chat} className="chatItem flex-row mb-1 rounded" style={{ backgroundColor: 'whitesmoke' }}>
        //     <div className="col-4">
        //         Image
        //     </div>
        //     <div className="col-8">
        //         Name
        //     </div>
        // </div>
    )
}

export default ChatItem