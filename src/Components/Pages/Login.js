import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Input, Form } from 'antd';
import { MailOutlined, KeyOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import firebase from '../../Firebase/firebase';
import { auth, firestore } from 'firebase';

let Login = () => {

    //Components Style
    document.body.style.background = 'linear-gradient(135deg, rgba(36,225,227,1) 0%, rgba(181,136,247,1) 100%)';

    const [user, setuser] = useState({ "username": "", "password": "" });

    function control() {

        if (user.username == "" || user.password == "") {
            
        }
        else {
            const use = firebase.auth().signInWithEmailAndPassword(user.username, user.password)
                .then(res => {
                    swal("Hoş Geldiniz..", "", "success")
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <Form>
                <Input size="large" placeholder="E-mail Adress" type="email" required onChange={(e) => { setuser({ ...user, username: e.target.value }) }} prefix={<MailOutlined />} />
                <Input size="large" className="login__pass" type="password" required placeholder="Password" onChange={(e) => { setuser({ ...user, password: e.target.value }) }} prefix={<KeyOutlined />} />
                <Link to='/password-reset'><label className="password__reset">Şifremi Unuttum <RightOutlined /></label></Link>
                <input type="submit" value="Login" className="login__btn" onClick={() => control()} />
                <label className="news__users">Henüz bir hesabın yok mu? <Link to='/register'> <span className="news__users__link">Kayıt Ol</span></Link></label>
            </Form>
        </div>
    )
}

export default Login;