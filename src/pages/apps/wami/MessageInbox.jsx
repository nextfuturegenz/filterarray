import ChatList from "./components/chatList";
import ChatBox from "./components/chatBox";
import ChatProfile from "./components/chatProfile";
import ChatNotes from "./components/chatNotes";


const WhatsAppMessageInbox = () => {

    const currentUser = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        profileImage: 'https://placekitten.com/40/40', // Replace with the actual path or URL
    };

    return (
        <div className="d-flex row">
            <div className="col-md-3">
                <ChatList />
            </div>
            <div className="col-md-6">
                <ChatBox />
            </div>
            <div className="col-md-3 ">
                <ChatProfile user={currentUser} />
                <ChatNotes />
            </div>
        </div>
    )
}

export default WhatsAppMessageInbox