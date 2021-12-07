import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import header from '../components/header';

const AppComponent =  ({ Component, pageProps, currentUser }) => {
    return (
        <div>
            <Header currentUser={currentUser}/>
            <Component currentUser={currentUser} {...pageProps} />
        </div>
    );
};

AppComponent.getInitialProps = async appContext => {
    const client = buildClient(appContext.ctx);
    const { data } = client.get('/api/users/currentUser');
    
    let pageProps = {};
    if (appContext.Component.getInitialProps){
        pageProps = await appContext.Component.getInitialProps(appContext.ctx, client);
    }
    
    return {
        pageProps,
        ...data
    }
};

export default AppComponent;