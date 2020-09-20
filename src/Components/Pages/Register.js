import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Form } from 'antd';
import { MailOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import firebase from '../../Firebase/firebase';
import { auth, firestore } from 'firebase';


let Register = () => {

    const [user, setuser] = useState({ "fullname": "", "username": "", "email": "", "password": "", "password__again": "" });

    function info__control() {

        if (user.fullname != "" && user.username != "", user.email != "", user.password != "", user.password__again != "") {

            if (user.password != user.password__again) {
                swal("Uyarı", "Şifreler Aynı Değil!!", "info");
            }
            else {
                if (user.password.length < 6) {
                    swal("Uyarı", "Şifre 6 karakterden küçük olamaz!!", "info");
                }
                else {
                    const use = firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                        .then(res => {
                            //console.log(res.user.uid)
                            firebase.database().ref("users/").child(res.user.uid).set({
                                fullname: user.username,
                                username: user.username,
                                email: user.email,
                                password: user.password
                            });
                        })
                        .catch(err => {
                            console.log(err)
                        });
                    swal("Tebrikler", "Kaydınız başarılı bir şekilde gerçekleştirildi..", "success");
                }
            }
        }
    }

    useEffect(() => {

    }, [])


    return (
        <div className="container">
            <h1>Register</h1>
            <Form>
                <Input size="large" type="text" placeholder="Full Name" prefix={<UserOutlined />} required onChange={(e) => { setuser({ ...user, fullname: e.target.value }) }} />
                <Input size="large" type="text" placeholder="Username" prefix={<UserOutlined />} required onChange={(e) => { setuser({ ...user, username: e.target.value }) }} />
                <Input size="large" type="email" placeholder="E-mail Adress" prefix={<MailOutlined />} required onChange={(e) => { setuser({ ...user, email: e.target.value }) }} />
                <Input size="large" type="password" placeholder="Password" prefix={<KeyOutlined />} required onChange={(e) => { setuser({ ...user, password: e.target.value }) }} />
                <Input size="large" type="password" placeholder="Password again" prefix={<KeyOutlined />} required onChange={(e) => { setuser({ ...user, password__again: e.target.value }) }} />
                <input type="submit" value="Register" className="login__btn" onClick={() => info__control()} />
                <label className="news__users">Kayıtlı mısınız? <Link to='/'> <span className="news__users__link">Giriş Yap</span></Link></label>

            </Form>
        </div>
    )
}

export default Register;