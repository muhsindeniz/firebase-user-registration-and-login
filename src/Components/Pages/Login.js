import React from 'react'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { MailOutlined, KeyOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

let Login = () => {
    return (
        <div className="container">
            <h1>Login</h1>
            <form>
                <Input size="large" placeholder="E-mail Adress" prefix={<MailOutlined />} />
                <Input size="large" className="login__pass" placeholder="Password" prefix={<KeyOutlined />} />
                <Link to='/password-reset'><label className="password__reset">Şifremi Unuttum <RightOutlined /></label></Link>
                <input type="submit" value="Login" className="login__btn" />
                <label className="news__users">Henüz bir hesabın yok mu? <Link to='/register'> <span className="news__users__link">Kayıt Ol</span></Link></label>
            </form>
        </div>
    )
}

export default Login;