import axios from 'axios';
import { useState } from 'react';

export default  ({url, method, body}) => {
    const [errors, setErrors] = useState(null);

    const doRequest = async () => {
        try{
            const response = await axios[method](url, body);
            return response.data;
        }catch (err){
            setErrors(
            <div className="aler alert-danger">
                <ul className="my-0">
                    {err.response.data.errors.map(er => (<li>er.message</li>))}
                </ul>
            </div>
            );
        }
    };

}