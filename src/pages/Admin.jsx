// src/pages/Admin.jsx
import React, { useState } from 'react';
import './Admin.css'; // This path is relative to src/pages/

const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [captchaText, setCaptchaText] = useState('le1GK9'); // Initial captcha from screenshot

    const generateCaptcha = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let newCaptcha = '';
        for (let i = 0; i < 6; i++) {
            newCaptcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setCaptchaText(newCaptcha);
        console.log("New Captcha:", newCaptcha); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (username === '' || password === '' || captcha === '') {
            alert('Please fill in all fields.');
            return;
        }
        if (captcha.toLowerCase() !== captchaText.toLowerCase()) {
            alert('Incorrect captcha. Please try again.');
            generateCaptcha(); 
            setCaptcha('');
            return;
        }
        //send credentials to a backend
        console.log('Login attempt:', { username, password, captcha });
        alert('Login functionality not implemented yet. Check console for details.');
        // Further actions like redirecting on successful login
    };

    return (
        <div className="admin-login-wrapper"> 
            <div className="login-card">
                <h2 className="card-title">Official Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="captcha-group">
                        <div className="captcha-display">
                            <span className="captcha-text">{captchaText}</span>
                            <button type="button" className="refresh-captcha" onClick={generateCaptcha}>
                                {/* Assuming you have refresh-icon.png in public/icons/ */}
                                <img src="/icons/refresh-icon.png" alt="Refresh" />
                                Refresh
                            </button>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Captcha Code"
                            value={captcha}
                            onChange={(e) => setCaptcha(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        LOGIN
                    </button>
                    <p className="forgot-password">
                        Forgot Password? <a href="#">Click Here to Reset</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Admin;