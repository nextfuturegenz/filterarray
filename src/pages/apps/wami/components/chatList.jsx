// import { useRecoilValue } from 'recoil';
// import { authAtom } from '../../atoms';
//import { useNavigate } from 'react-router-dom';
import ChatItem from "./chatItem"
import { FaSearch } from "react-icons/fa"

const ChatList = () => {
    const sampleMessages = [
        { id: 1, name: 'John Doe', avatar: 'https://placekitten.com/40/40', lastMessage: 'Hello there!' },
        { id: 2, name: 'Jane Smith', avatar: 'https://placekitten.com/41/41', lastMessage: 'How are you?' },
        { id: 3, name: 'Alice Johnson', avatar: 'https://placekitten.com/42/42', lastMessage: 'Nice to meet you!' },
        { id: 4, name: 'Bob Anderson', avatar: 'https://placekitten.com/43/43', lastMessage: 'Good morning!' },
        { id: 5, name: 'Eva Brown', avatar: 'https://placekitten.com/44/44', lastMessage: 'What\'s up?' },
        { id: 6, name: 'Mike Wilson', avatar: 'https://placekitten.com/45/45', lastMessage: 'Howdy!' },
        { id: 7, name: 'Sophia Miller', avatar: 'https://placekitten.com/46/46', lastMessage: 'Long time no see!' },
        { id: 8, name: 'Daniel White', avatar: 'https://placekitten.com/47/47', lastMessage: 'Greetings!' },
        { id: 9, name: 'Olivia Harris', avatar: 'https://placekitten.com/48/48', lastMessage: 'Hey there!' },
        { id: 10, name: 'William Davis', avatar: 'https://placekitten.com/49/49', lastMessage: 'What\'s new?' },
        { id: 11, name: 'Emma Taylor', avatar: 'https://placekitten.com/50/50', lastMessage: 'Hi!' },
        { id: 12, name: 'Liam Martinez', avatar: 'https://placekitten.com/51/51', lastMessage: 'Nice day!' },
        { id: 13, name: 'Ava Johnson', avatar: 'https://placekitten.com/52/52', lastMessage: 'How\'s it going?' },
        { id: 14, name: 'Noah Thompson', avatar: 'https://placekitten.com/53/53', lastMessage: 'Good to see you!' },
        { id: 15, name: 'Isabella Harris', avatar: 'https://placekitten.com/54/54', lastMessage: 'Greetings!' },
        { id: 16, name: 'Mia White', avatar: 'https://placekitten.com/55/55', lastMessage: 'Hello!' },
        { id: 17, name: 'James Davis', avatar: 'https://placekitten.com/56/56', lastMessage: 'How\'s everything?' },
        { id: 18, name: 'Benjamin Wilson', avatar: 'https://placekitten.com/57/57', lastMessage: 'Hey!' },
        { id: 19, name: 'Amelia Martinez', avatar: 'https://placekitten.com/58/58', lastMessage: 'Nice weather!' },
        { id: 20, name: 'Elijah Taylor', avatar: 'https://placekitten.com/59/59', lastMessage: 'Hi there!' },
    ];

    return (
        <div className="d-flex flex-column shadow p-1 mb-4 rounded overflow-hidden" style={{ height: '90%', backgroundColor: 'whitesmoke', marginLeft:'5px', marginTop:'20px' }}>
            <div className="flex-row mb-2 mt-2 input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search messages..."
                    style={{
                        marginRight: '10px',
                        borderRadius: '5px'
                    }}
                />
                <button
                    className="btn btn-success btn-circle btn-sm"
                    type="button"
                    style={{ borderRadius: '5px' }}
                >
                    <FaSearch />
                </button>
            </div>
            <div className="chat-list flex-column" style={{ overflowY: 'scroll', height: '80vh', backgroundColor:'white' }}>
                {
                    sampleMessages.map(message => {
                        return <ChatItem
                            key={message.id}
                            avatar={message.avatar}
                            name={message.name}
                            lastMessage={message.lastMessage}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default ChatList