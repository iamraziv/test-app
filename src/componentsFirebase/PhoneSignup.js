import React, {useState} from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const PhoneSignup = (props) => {
    const [number, setNumber] = useState('');
    const [error, setError] = useState("");
    const [otp, setOtp] = useState("");
    const [flag, setFlag] = useState(false);
    const [confirm, setConfirmObj] = useState("");

    const {setupRecaptcha} = useUserAuth();
    const navigate = useNavigate();

    const getOtp = async(e) =>{
        setError('');
        e.preventDefault();
        if(number === '' || number === undefined) return setError("Please enter the valid phone number");
        try{
                const response = await setupRecaptcha(number)
                console.log(response); 
                setConfirmObj(response)
                setFlag(true);
                console.log(number);
        }
        catch(err){
               setError(err.message)
        }

    }

    const verifyOtp = async(e) =>{
        e.preventDefault();
        if(otp === '' || otp === null) return;
        try{
            setError('');
            console.log(otp)
            await confirm.confirm(otp);
            navigate('/home')
        }
        catch(error){
            setError(error.message);
        }
    }
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Phone Auth</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={getOtp} style={{display: !flag ? 'block':'none'}}>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <PhoneInput
                            placeholder="Enter phone number"
                            defaultCountry="IN"
                            value={number}
                            onChange={setNumber}/>
                    </Form.Group>
                    <div id="recaptcha-container"></div>
                    <div className="button-right">
                        <Link to="/">
                            <Button variant="secondary">Cancel</Button> &nbsp; 
                        </Link>
                        <Button variant="primary" type="Submit">Send OTP</Button> 
                    </div>
                </Form>
                <Form onSubmit={verifyOtp} style={{display: flag ? 'block':'none'}}>
                    <Form.Group className="mb-3" controlId="formBasicOtp">
                    <Form.Control
                        type="text"
                        placeholder="Enter Valid Otp"
                        onChange={(e) => setOtp(e.target.value)}
                        />
                    </Form.Group>
                    <div id="recaptcha-container"></div>
                    <div className="button-right">
                        <Link to="/">
                            <Button variant="secondary">Cancel</Button> &nbsp; 
                        </Link>
                        <Button variant="primary" type="Submit">Verify OTP</Button> 
                    </div>
                </Form>
            </div>
        </>
    );
};

export default PhoneSignup;