import { useEffect, useState } from 'react';
import TutorialService from '../services/TutorialService';
import ModalUdate from './ModalUdate';
import NavBar from './NavBar'
import { useDispatch, useSelector } from "react-redux";
import {
    retrieveTutorials, updateTutorial, deleteTutorial, findBytitle

} from "../actions/tutorials";

const initialState = {
    id: null,
    title: "",
    description: "",
    published: false
}
const TutorialsList = () => {
    const [tutorial, setTutorial] = useState(initialState);
    // const [tutorials, setTutorials] = useState([])
    const [searchTitle, setSearchTitle] = useState("");
    const [show, setShow] = useState(false);
    const [isDelete, setIsDelete] = useState(null);

    const handleClose = () => setShow(false);


    const dispatch = useDispatch();
    const hola = useDispatch(retrieveTutorials())
    console.log(hola)
    const tutorials = useSelector(state => state.tutorials);
    console.log(tutorials)

    useEffect(() => {
        dispatch(retrieveTutorials())

    }, [])


    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };


    const findByTitle = () => {
        dispatch(findBytitle(searchTitle))
    };

    const update = (t) => {
        setTutorial(t)
        setShow(true)
    }




    const handleUpdateTutorial = () => {
        dispatch(updateTutorial(tutorial.id, tutorial))
        handleClose()
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setTutorial({ ...tutorial, [name]: value })
    }



    const handleDelete = (id) => {
        dispatch(deleteTutorial(id))
    }

    return (
        <div>
            <NavBar />
            <div className='container-sm' >
                <h2>tutoriales</h2>
                <div>{show && <ModalUdate
                    handleClose={handleClose}
                    show={show}
                    handleInputChange={handleInputChange}
                    tutorial={tutorial}
                    updateTutorial={handleUpdateTutorial} />}
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByTitle}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">title</th>
                            <th scope="col">description</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div>{tutorials.length === 0 ? "no se encontraron resultado" : ""}</div>
                        {tutorials && tutorials.map(t =>
                            <tr key={t.id} >
                                <th scope="row">{t.id}</th>
                                <td>{t.title} </td>
                                <td>{t.description} </td>
                                <td><button className="m-1 btn btn-warning"
                                    onClick={() => { update(t) }}  >
                                    update</button><button className="btn btn-danger "
                                        onClick={() => handleDelete(t.id)}
                                    >Delete</button>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default TutorialsList;
