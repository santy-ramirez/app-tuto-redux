import { useState } from 'react';
import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { createTutorial } from '../actions/tutorials';


function FormTutorial() {
    const initialState = {
        id: null,
        title: "",
        description: "",
        published: false
    }
    const [tutorial, setTutorial] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTutorial({ ...tutorial, [name]: value })
        console.log(value)
    }

    const saveTutorial = () => {
        const { title, description, published } = tutorial;
        dispatch(createTutorial(title, description, published))
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setSubmitted(true)

    }

    const newTutorial = () => {
        setTutorial(initialState);
        setSubmitted(false);
    };


    return (
        <div>
            <NavBar />
            <div style={{ maxWidth: 600 }} className='mx-auto container-sm' >
                {submitted ? (
                    <div>
                        <button d-flex flex-row justify-content-center alig-items-center
                            onClick={newTutorial}
                        >Add other</button>
                    </div>

                ) : (
                    <div>
                        <h1>Add tutorial</h1>
                        <div className=' form-group'>
                            <label>title</label>
                            <input
                                onChange={handleInputChange}
                                className='form-control'
                                type="text"
                                name="title" />
                            <label>description</label>
                            <input
                                onChange={handleInputChange}

                                className='form-control'
                                type="text"
                                name="description" />
                            <button
                                onClick={saveTutorial}
                                className='m-2  btn btn-success' >save</button>
                        </div>
                    </div >
                )
                }
            </div>
        </div >
    );
}

export default FormTutorial;