import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import { Form, Button, Row, Col } from "react-bootstrap";
import './header.scss';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/moviesSlice';


const Header = () => {
    const [item, setItem] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(item);
        dispatch(fetchAsyncMovies(item));
        dispatch(fetchAsyncSeries(item));
        setItem("");
    }
    return (
        <div className="header">
            <Row>
                <Col sm>
                <Link to="/">
                    <div className="logo">
                        <h1>Nikunjflix</h1>
                    </div>    
            </Link>
                </Col>
                <Col sm>
                <div className="search-bar">
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicSearch">
                        <Form.Control
                        type="text"
                        placeholder="Enter to search movies/series"
                        onChange={(e) => setItem(e.target.value)}
                        />
                    </Form.Group>
                        <Button className="d-grid gap-2 search-button" variant="success" type="Submit">
                        <i className="material-icons">search</i>
                        </Button>
                    </Form>
                </div>
                </Col>
                <Col sm>
                    <Link to="/hoc">
                        <div className="user-list">
                            <span>User List</span>
                        </div>
                    </Link>
                </Col>
                <Col sm>
                <div className="user-image">
                    <img src={user} alt="Profile">

                    </img>
                </div>
                </Col>
            </Row>
            
                {/* <div className="search-bar">
                    <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-12" controlId="formBasicEmail">
                        <Form.Control
                        type="Submit"
                        placeholder="Enter to search movies/series"
                        onChange={(e) => setItem(e.target.value)}
                        />
                    </Form.Group>
                        <Button className="d-grid gap-2" variant="success" type="Submit">
                        <i className="material-icons">search</i>
                        </Button>
                    </Form>
                </div> */}
            
            {/* <Link to="/">
                    <div className="logo">
                        <h1>Nikunjflix</h1>
                    </div>    
            </Link> */}
            
                {/* <div className="user-image">
                    <img src={user} alt="User Image">

                    </img>
                </div> */}
        </div>
    );
};

export default Header;