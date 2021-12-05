import React, { useState } from "react";

import userService from "../Services/UserService";
import { toast } from 'react-toastify';

const OTPBox = (props) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const email=props.location.state;

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
            

        
        
            <div className="row">
                <div className="col text-center">
                    <br/>
                    <br/>
                    <h5>Enter the OTP sent to you to verify your identity</h5>
                    
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                style={{width:'60px',height:'60px',margin:'10px'}}
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}
                    {/* <p>{userService.getUser()._id}</p> */}
                    {/* <p>{email}</p> */}
                    {/* <p>OTP Entered - {otp.join("")}</p> */}
                    <br />
                    <p>
                        <button
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={(e)=>{
                                userService.verifyOtp(email,otp.join("")).then((data)=>{
                                  console.log(data);
                                  props.history.push("/signin");
                               
                                }).catch((err)=>{
                                  toast.error(err.response.data, {
                                    position: toast.POSITION.TOP_LEFT
                                  });
                                })
                              }}
                            >
                        
                            Verify OTP
                        </button>
                    </p>
                    <br/>
                    <br/>
                </div>
                
            </div>
        </>
    );
};

export default OTPBox;