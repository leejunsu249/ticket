import buildClient from "../api/build-client";

const LandingPage =  ({ currentUser }) => {
    return currentUser ? 
    <h1>안녕하세요 {currentUser}님 </h1> : <h1>로그인 해주세요 </h1>
};

LandingPage.getInitialProps = async (context) => {
    const client = buildClient(context);
    const { data } = client.get('/api/users/currentUser');
    return data;
};

export default LandingPage;