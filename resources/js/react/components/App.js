import axios from 'axios';
import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';

function App() {


    useEffect(() => {
        // axios.get('/sanctum/csrf-cookie').then(response => {
        //     axios.post('/login',{
        //         email:'mizan@mail.com',
        //         password:'password'
        //     })
        //     .then(res=>{
        //         console.log({res})
        //     })
        //     .cathc(err=>{
        //         console.log({err})
        //     })
        // });

        axios.get('/user')
        .then(res=>{
            console.log({res})
        })
        .catch(err=>{
            console.log({err})
        })
    }, [])
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
