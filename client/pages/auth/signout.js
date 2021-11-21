import {useEffect} from 'react';
import Router from 'next/router';

export default () => {
   
    useEffect(() => {    
        try{
            const response = await axios.post('/api/users/signout', {});
            Router.push('/');
       } catch (err){
            setErrors(err.response.data.errors);
       }}, []);

    return <div>로그아웃 되었습니다...</div>
};