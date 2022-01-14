import app from './app';

const port: string = app.get('port');

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})