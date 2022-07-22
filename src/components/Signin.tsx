import React from 'react';	
import { Button, Col, Input, Row } from "antd";
import { useRef, useState } from "react";
import { LoginReqType } from "../types";
import styles from './Signin.module.css'

interface SigninProps {
    login: (reqData : LoginReqType) => void;
}

const Signin: React.FC<SigninProps> = ({login}) => {
    // const emailRef = useRef<any>(null);
    // const passwordRef = useRef<any>(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    return (
        <Row align="middle" className={styles.signin_row}>
            <Col span={24}>
                <Row className={styles.signin_contents}>
                    <Col span={12}>
                        <img src='/bg_signin.png' className={styles.signin_bg}/>
                    </Col>
                    <Col span={12}>
                        <div className={styles.signin_title}>My Books</div>
                        <div className={styles.signin_subtitle}>Please Note Your Opinion</div>
                        <div className={styles.signin_underline}/>
                        <div className={styles.email_title}>Email
                            <span className={styles.required}> *</span>
                        </div>
                        <div className={styles.input_area}>
                            <Input placeholder="Email" autoComplete="email" className={styles.input} value={email} onChange={handleEmailChange}/>
                        </div>

                        <div className={styles.password_title}>Password
                            <span className={styles.required}> *</span>
                        </div>
                        <div className={styles.input_area}>
                            <Input type="password" autoComplete="current-password" className={styles.input} value={password} onChange={handlePasswordChange}/>
                        </div>
                        <div className={styles.button_area}>
                            <Button size="large" className={styles.button}  onClick={click}>Sign In</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

    function click() {
        console.log(email, password)
        login({email,password})
    }
}

export default Signin