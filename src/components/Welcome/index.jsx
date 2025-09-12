import { useRecoilValue } from 'recoil';
import { authAtom } from '../../atoms';
//import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const auth = useRecoilValue(authAtom);

    return (
        <div className="container-narrow shadow p-3 mb-4 rounded" style={{ backgroundColor: 'white' }}>
            <div className="text-center mb-4">
                <h2 className="marker marker-center">Hello, {auth.details.username}</h2>
            </div>
            <div className="text-center">
                <p className="mx-auto mb-2" style={{ maxWidth: "800px" }}>Welcome to FilterArray: Where Possibilities Unfold and Connections Flourish!</p>
            </div>
            <div className="text-center">
                <h3 className="mx-auto mt-3 mb-2" style={{ maxWidth: "800px" }}>Your Account Balance: $145,768</h3>
            </div>
        </div>
    )
}

export default Welcome