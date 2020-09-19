import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Form } from 'antd';
import { MailOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import firebase from '../../Firebase/firebase';

let Home = () => {

    
    function logout(){
        firebase.auth().signOut().catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            <Input type="submit" value="Çıkış yap" className="login__btn" onClick={() => logout()}  />
        </div>
    )
}

export default Home;