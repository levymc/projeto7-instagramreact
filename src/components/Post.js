import ruivo from "../img/ruivo.png"
import chatbubble from "../img/chatbubble.svg"
import heart from "../img/heart.svg"
import aviao from "../img/aviao.svg"
import marcador from "../img/marcador.svg"
import pontinhos from "../img/pontinhos.svg"
import React, { useState } from 'react';


export default function Post() {
    const [icon, setIcon] = useState('heart-outline');
    const [color, setColor] = useState('');
    const handleClickButton = () => {
      color === 'red' ? setColor('') : setColor('red');
      color === 'red' ? setIcon('heart-outline') : setIcon('heart');
    };
  
    const [showIcon, setShowIcon] = useState(false);
  
    const handleDoubleClick = () => {
      setShowIcon(true);
      handleClickButton();
      setTimeout(() => {
        setShowIcon(false);
      }, 1000);
    };
  
    const dados = [
      {
        userImage: ruivo,
        userName: 'levymc',
        urlImage: ruivo,
        quemCurtiu: 'frederico',
        imgQuemCurtiu: ruivo,
        qntsPessoas: 199823,
      },
    ];
  
    return (
      <>
        {dados.map((dado) => (
          <div className="post" data-test="post">
            <div className="userName flex">
              <img src={dado.urlImage} className="miniImage" alt="" />
              <h3>{dado.userName}</h3>
              <img className="pontinhos pointer" src={pontinhos} alt="Pontinhos" />
            </div>
            <div className="container-postImage">
              <img
                className="postImage"
                onDoubleClick={handleDoubleClick}
                data-test="post-image"
                src={dado.userImage}
                alt={dado.userName}
              />
              {showIcon && (
                <div className="divIcon scale-up-bottom">
                  <ion-icon name="heart"></ion-icon>
                </div>
              )}
            </div>
            <div className="icones flex">
              <div className="coracao iconJump">
                <ion-icon
                  style={{ color: color }}
                  onClick={handleClickButton}
                  name={icon}
                  data-test="like-post"
                ></ion-icon>
              </div>
              <img className="iconJump" src={chatbubble} alt="Chatbubble" />
              <img className="iconJump" src={aviao} alt="Airplane" />
              <img className="iconJump marcador" data-test="save-post" src={marcador} alt="Marcador" />
            </div>
            <div className="legenda flex">
              <img src={dado.imgQuemCurtiu} className="imageQuemCurtiu" alt="" />{' '}
              <h3 data-test="likes-number">
                Curtido por {dado.quemCurtiu} e outras {dado.qntsPessoas} pessoas
              </h3>
            </div>
          </div>
        ))}
      </>
    );
  }