import React from 'react'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { MailOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

let Register = () => {
    return (
        <div className="container">
            <h1>Register</h1>
            <form>
                <Input size="large" type="text" placeholder="Full Name" prefix={<UserOutlined />} />
                <Input size="large" type="text" placeholder="Username" prefix={<UserOutlined />} />
                <Input size="large" type="email" placeholder="E-mail Adress" prefix={<MailOutlined />} />
                <Input size="large" type="password" placeholder="Password" prefix={<KeyOutlined />} />
                <Input size="large" type="password" placeholder="Password again" prefix={<KeyOutlined />} />
                <input type="submit" value="Register" className="login__btn" />
                <label className="news__users">Kayıtlı mısınız? <Link to='/'> <span className="news__users__link">Giriş Yap</span></Link></label>
            </form>
        </div>
    )
}

export default Register;