import { useParams } from "react-router-dom";

const Employees = () => {
    const params = useParams();
    const { action } = params
    
    return (
        <div>
            This is Employees data in here {action}
        </div>
    )
}

export default Employees