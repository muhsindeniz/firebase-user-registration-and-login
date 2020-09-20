import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Form } from 'antd';
import { MailOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import firebase from '../../Firebase/firebase';

let Home = () => {
    
     //Components Style
     document.body.style.background = 'white';
    
    let history = useHistory();

    function logout() {
        firebase.auth().signOut()
            .then(resp => {
                history.push("/login");
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        
    }, [])


    return (
        <div>
            <h1>Home Page</h1>
            <input type="button" value="çıkıs" onClick={() => logout()} />
        </div>
    )
}

export default Home;