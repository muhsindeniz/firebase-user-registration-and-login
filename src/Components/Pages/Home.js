import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Menu, Button, Input } from 'antd';
import { HomeOutlined, UserOutlined, LogoutOutlined, PictureTwoTone } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import firebase from '../../Firebase/firebase';
import ImageUploading from 'react-images-uploading';
import moment from 'moment'
import 'moment/locale/tr' //For Turkey

import logo from '../../assets/img/logo.svg';
import profile from '../../assets/img/pp.png';

let Home = () => {

    //User id
    let userId = firebase.auth().currentUser.uid;

    //Components Style
    document.body.style.background = 'white';
    //Link
    let history = useHistory();

    const [collapsed, setcollapsed] = useState(false);
    const [images, setImages] = useState([]);
    const maxNumber = 2;
    const [textLimit, settextLimit] = useState(310);

    //POST DATA
    const [PostMessage, setPostMessage] = useState([]);
    const onChange = (imageList) => {
        setImages(imageList)
    };


    //LİMİT POST TEXT
    let postText = PostMessage.length;
    const limit = textLimit - postText;

    //Logout 
    function logout() {
        firebase.auth().signOut()
            .then(resp => {
                history.push("/login");
            })
            .catch(err => {
                console.log(err)
            })
        //swal("Başarıyla çıkış yapıldı..", "", "success");
    }

    //    firebase.auth().currentUser.uid -> Login olan kullanıcının id sini çağırır    \\

    function SendPost() {
        firebase.database().ref("users/").child(userId).child("posts/").push({
            postContent: PostMessage,
            postDate: moment().format('lll'),
            postLikes: 0
        })
        swal("Tebrikler..", "Haberiniz paşarıyla paylaşıldı..", "success")
    }

    useEffect(() => {
        //Menu Property
        const { SubMenu } = Menu;
        let toggleCollapsed = () => {
            setcollapsed(collapsed == false)
        }

    }, [])


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 pl-4">
                    <div className=" ml-0 mt-3 mb-3">
                        <img src={logo} width="42px" />
                    </div>

                    <div className="home__menu">
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="light"
                            inlineCollapsed={collapsed}
                        >
                            <Menu.Item key="1" icon={<HomeOutlined style={{ fontSize: 26 }} />}>
                                Anasayfa
                        </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined style={{ fontSize: 26 }} />}>
                                Profil
                        </Menu.Item>
                            <Menu.Item key="3" icon={<LogoutOutlined style={{ fontSize: 26 }} />}>
                                Çıkış
                        </Menu.Item>
                        </Menu>
                    </div>
                </div>

                <div className="col-md-6 pl-0 pr-0 pt-3 border-right border-left">
                    <div className="home__head pb-3 pl-3">Anasayfa</div>
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-md-1">
                                <img src={profile} className="profile__picture" />
                            </div>
                            <div className="col-sm-11 pl-3 pt-3 profile__post">
                                <textarea maxLength="310" id="note" onChange={(e) => setPostMessage(e.target.value)} placeholder="Neler oluyor?"></textarea>
                                <div className="post__image__upload mt-3">

                                    <ImageUploading
                                        multiple
                                        value={images}
                                        onChange={onChange}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url"
                                    >
                                        {({
                                            imageList,
                                            onImageUpload,
                                            onImageRemoveAll,
                                            onImageUpdate,
                                            onImageRemove,
                                            isDragging,
                                            dragProps,
                                        }) => (
                                                // write your building UI
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="post__gallery__icon mb-3">
                                                                <PictureTwoTone style={{ fontSize: 24 }} onClick={onImageUpload} {...dragProps} />
                                                            </div>
                                                            <div className={limit < 310 ? "post__line" : "d-none"}>
                                                                <div className={limit <= 15 ? "post__text__limit" : "post__line__border"}>{limit < 1 ? "0" : limit}</div>
                                                            </div>
                                                            <div className="post__button">
                                                                <input type="submit" disabled={PostMessage.length > 0 ? `` : `true`} onClick={() => SendPost()} className="postButton" name="post" value="Paylaş" />
                                                            </div>
                                                            {imageList.map((image, index) => (
                                                                <div key={index} className="image-item-container">
                                                                    <img className="image-item" src={image['data_url']} alt="" />
                                                                    <div className="image-item__btn-wrapper">
                                                                        <button onClick={() => onImageRemove(index)}>X</button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                    </ImageUploading>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12" className="home__between"></div>
                </div>

                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Home;