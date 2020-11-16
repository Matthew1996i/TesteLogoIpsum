import React from 'react'

import Carousel from '../Carousel/Carousel'

import './Main.css'

import imgL from '../../assets/images/imgL.jpg'
import imgC from '../../assets/images/imgC.jpg'
import imgR from '../../assets/images/imgR.jpg'
import compL from '../../assets/images/compL.png'
import compC from '../../assets/images/compC.png'
import compR from '../../assets/images/compR.png'
import triathlon from '../../assets/images/atletas.jpg'
import logoAboveImage from '../../assets/images/logoSobreImage.png'
import plusFiber from '../../assets/images/soumaisfibra.png'
import ourPartner from '../../assets/images/facoparte.png'

const Main = () => {
  return(
    <div className="bodyHome">
      <div className="highlightsHome">
        <h1>Nascemos de um sonho, <br/>para fazer a diferença no <br/>mundo</h1>
        <p>Descubra como tudo começou e <br/>entenda por que a Logo Ipsum <br/>faz a diferença no mundo. Há <br/>muitos sabores para se deliciar.</p>
        <button className="btn">
          <i className="fas fa-angle-right"></i>
          Conheça a <br/>Logo Ipsum
        </button>
      </div>

      <div className="imagesFeatures mb-3">
        <div className="featured featuredL">
          <img className="primaryImages" src={imgL} alt=""/>
          <div>  
            <img className="componentAbove" src={compL} alt="component check-list"/>
            <p>Logo Ipsum Transforma: <br/>projetos que fazem bem, bem <br/>mais feliz.</p>
          </div>
        </div>
        <div className="featured featuredC">
          <img className="primaryImages" src={imgC} alt=""/>
          <div>  
            <img className="componentAbove" src={compC} alt="component Heart"/>
            <p>Matéria-prima direto do pequeno <br/>produtor com todo o carinho que <br/>você merece.</p>
          </div>
        </div>
        <div className="featured featuredR">
          <img className="primaryImages" src={imgR} alt=""/>
          <div>  
            <img className="componentAbove" src={compR} alt="component recicle"/>
            <p>Reciclar as embalagens Logo <br/>Ipsum é um dos ingredientes <br/>da nossa receita de sucesso.</p>
          </div>
        </div>
      </div>

      <div className="contentEnergy">
        <div className="leftAsideContent">
          <h4>Energia que<br/> nutre o esporte.</h4>
          <p>Quando você coloca suas granolas e alimentos favoritos<br/> na sacola, tenha certeza de que o seu pedido está <br/>ajudando a fazer acontecer algum projeto no esporte. <br/><br/>

          Nos nossos mais de 20 anos de história, apoiamos grupos <br/>esportivos e atletas de várias modalidades: triathlon, <br/>mountain bike, ciclismo, corrida, jiu-jitsu, canoagem, stand <br/>up paddle, judô e corrida de aventura, por exemplo.<br/><br/>

          É assim que a Logo Ipsum nutre o esporte com toda a <br/>energia que ele merece. Fazemos questão de estar <br/>presentes sempre. E lembre-se: você é parte importante <br/>dessa saudável relação.</p>
          <button className="btn"> SAIBA MAIS</button>
        </div>
        <div className="triathlon">
          <i className="fas fa-play"></i>
          <img className="imageAboveImage" src={logoAboveImage} alt="logo"/>
          <img className="triatlhonImg" src={triathlon} alt="triathlon"/>
        </div>
      </div>

      <div className="plusFiber mb-5">
        <img src={plusFiber} alt="the product plus fiber"/>
        <div className="aboutProduct">
          <h1>Precisa do sabor de <br/>alimentos naturais feitos<br/> com amor?</h1>
          <p>Alimentos naturais feitos com carinho, sabor e qualidade. Tudo para <br/>dar a energia que você precisa para o seu dia.</p>
          <button className="btn btnBuyNow">COMPRAR AGORA</button>
        </div>
      </div>

      <Carousel />

      <div className="beOurPartner pb-4">
        <div className="contentOurPartner">
          <h1>Seja nosso parceiro</h1>
          <p>Produtos saudáveis com o melhor sabor: Felicidade.<br/> Além de deixarem seus clientes felizes os sabores da <br/>Logo Ipsum têm tudo para te ajudar a vender mais.</p>
          <button className="btn btnPartner">QUERO REVENDER</button>
        </div>
        <img src={ourPartner} alt="the product plus fiber"/>
      </div>


    </div>
    
  )
}

export default Main