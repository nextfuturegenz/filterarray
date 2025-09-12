import { useRecoilValue, useRecoilState } from 'recoil';
import { appsAtom, selectedAppAtom } from '../../../atoms';
import { useNavigate } from 'react-router-dom';
import { TbArrowBackUpDouble } from "react-icons/tb";

const AddAppToAccount = () => {
    const apps = useRecoilValue(appsAtom);
    const navigate = useNavigate();
    const [selectedApp, setSelectedApp] = useRecoilState(selectedAppAtom)

    const handleOnClick = (e, path, appId) => {
        e.preventDefault();
        console.log("need some strategy for adding")
        // setSelectedApp(appId)
        // localStorage.setItem("selectedAppId", appId);
        // navigate(path)
    }


    return (
        <div >
            <div className="container shadow p-3 mb-4 rounded" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="d-flex justify-content-end" onClick={() => navigate('/home')}>
                        <TbArrowBackUpDouble size={40} />
                    </div>
                    <div className="text-center mb-4">
                        <h2 className="marker marker-center">All Apps</h2>
                    </div>
                </div>
                <div className="container-narrow row ">
                    {
                        apps.map((app, index) => {
                            const { imageUrl, title, path, uid, isActive } = app

                            return (<div key={index} className="col-md-4 text-center mb-3 disabled" style={{ cursor: "pointer" }} onClick={(e) => handleOnClick(e, path, uid)}>
                                <div className="bg-white border rounded p-2 h-60" >
                                    <div className="bg-white rounded-circle d-inline-block p-1">
                                        {imageUrl({ size: 64 })}
                                    </div>
                                    <div className="h5 mt-2">{title}</div>
                                </div>
                            </div>)

                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default AddAppToAccount