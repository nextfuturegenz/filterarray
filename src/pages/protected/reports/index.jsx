import { useParams } from "react-router-dom";

const Reports = () => {
    const params = useParams();
    const { type : reportType } = params
    
    return (
        <div>
            This is Reports data in here {reportType}
        </div>
    )
}

export default Reports