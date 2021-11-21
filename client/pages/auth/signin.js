import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';

export default  () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

 
    const onSubmit = async (e) => {
        e.preventDefault();
        try{
         const response = await axios.post('/api/users/signin', {
            email, password
        });
            Router.push('/');
        } catch (err){
            setErrors(err.response.data.errors);
        }

    };
    
    return (
    <form onSubmit={onSubmit}>
        <h1>로그인</h1>
        <div className="form-group">
            <label>E-mail</label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="form-control"/>
        </div>
        <div className="form-group">
            <label>비밀번호</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"/>
        </div>
        {errors.length > 0  && <div className="aler alert-danger">
        <ul className="my-0">
            {errors.map(err => <li>err.message</li>)}
        </ul>
        </div>}
        <button className="btn btn-primary">로그인</button>
    </form>
    );
};

