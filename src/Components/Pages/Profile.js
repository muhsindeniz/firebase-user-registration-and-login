import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Input, Form } from 'antd';
import { MailOutlined, KeyOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import firebase from '../../Firebase/firebase';
import { auth, firestore } from 'firebase';

let Profile = () => {

   
    return (
        <div>
          <h1>Profile Page</h1>
        </div>
    )
}

export default Profile;