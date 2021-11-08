import express from 'express';


const app = express();
app.use(express.json());

app.get('/api/users/currentuser', (req,res) => {
    res.send('who are you');
});


app.set('port',3000);
app.listen(app.get('port'), () => {
    console.log('Listening on port',app.get('port'));
});