import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

import footerCopy from '../../assets/images/copy.png'
import logo from '../../assets/images/Logo-01.png'
import mountain from '../../assets/images/Montanha.png' 

//import img from the payments methods
import payments1 from '../../assets/images/methodspayments/cards_01.png'
import payments2 from '../../assets/images/methodspayments/cards_02.png'
import payments3 from '../../assets/images/methodspayments/cards_03.png'
import payments4 from '../../assets/images/methodspayments/cards_04.png'
import payments5 from '../../assets/images/methodspayments/cards_05.png'
import payments6 from '../../assets/images/methodspayments/cards_06.png'
import payments7 from '../../assets/images/methodspayments/cards_07.png'

//import img from the sustentabilities
import sustentability1 from '../../assets/images/sustentability/image 1.png'
import sustentability2 from '../../assets/images/sustentability/image 2.png'
import sustentability3 from '../../assets/images/sustentability/image 3.png'
import sustentability4 from '../../assets/images/sustentability/image 4.png'
import sustentability5 from '../../assets/images/sustentability/image 5.png'
import sustentability6 from '../../assets/images/sustentability/image 6.png'


const Footer = () => {
  return(
    <div className="contentFooter">
      <div className="footerForms">
        <p><b>Quer receber receitas, dicas e<br/> promoções? Vem com a gente. ;)</b></p>
        <div className="divForms">
          <form>
            <div className="form-group">
              <label htmlFor="emailInput">E-MAIL</label>
              <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Seu e-mail"/>
            </div>
            <div className="form-group">
            <label htmlFor="nameImput">NOME</label>
              <input type="text" className="form-control" id="nameImput" aria-describedby="emailHelp" placeholder="Seu nome"/>
            </div>
            <button type="submit" className="btn btn-light">Receba novidades</button>
          </form>
        </div>
      </div>
      <img className="backgroundMontain" src={mountain} alt="background montain"/>
      <div className="mainFooter">
        <div className="about content-theme">
          <ul>
            <li><img src={logo} alt="logo for the company"/></li>
            <li><p>A Logo Ipsum está sempre preocupada com a boa qualidade de ingredientes nutritivos e com sabor agradável. Tudo para produzir e levar até você refeições naturalmente deliciosas, repletas de energia nutritiva e muito amor. Que tal energizar todos os momentos do seu dia com o que há de melhor? </p></li>
            <li><Link to="/"><u>Ajuda</u></Link></li>
            <li><Link to="/"><u>Nossos produtos</u></Link></li>
            <li><Link to="/"><u>Clube assinatura</u></Link></li>
            <li><Link to="/"><u>Onde encontrar</u></Link></li>
            <li><Link to="/"><u>Fique ligado</u></Link></li>
            <li><Link to="/"><u>Faça parte da familia</u></Link></li>
            <li><p className="cnpj">ALIMENTOS LOGO IPSUM LTDA - CNPJ: 00.000.000/0002-24 © Todos os direitos reservados</p></li>
          </ul>
        </div>

        <div className="contactUs content-theme">
          <h6>CONTATO:</h6>
          <div className="contacts">
            <div className="phones info-contact">
              <i className="fas fa-phone-alt"></i>
              <div>
                <p className='contactCellPhone'>(XX) 9 9999-9999</p>
                <p className='contactCellPhone'>(XX) 9 9999-9999</p>
              </div>
            </div>
            <div className="email info-contact">
              <i className="fas fa-envelope"></i>
              <p className="contactEmail">ecommerce@logoipsum.com.br</p>
            </div>
            <Link className="calledUs info-contact" to="/"><u>Fale conosco</u></Link>
          </div>
          <div className="beAReseller">
            <p><b>Produtos saudáveis com <br/> o melhor sabor: felicidade.</b></p>
            <p>Além de deixarem seus clientes felizes, os sabores da Logo Ipsum têm tudo para te ajudar a vender mais.</p>
            <button className="btn btn-info">SEJA UM REVENDEDOR</button>
          </div>
        </div>

        <div className="anotherThinks content-theme">
          <div className="follow">
            <h6>ACOMPANHE:</h6>
            <div className="socialMedia">
              <Link to="/"><i className="fab fa-facebook-square"></i></Link>
              <Link to="/"><i className="fab fa-instagram"></i></Link>
              <Link to="/"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>
          <div className="paymentsMethods">
            <h6>FORMAS DE PAGAMENTO:</h6>
            <div className="paymentsImages">
              <img src={payments1} alt="methodsPayment"/>
              <img src={payments2} alt="methodsPayment"/>
              <img src={payments3} alt="methodsPayment"/>
              <img src={payments4} alt="methodsPayment"/>
              <img src={payments5} alt="methodsPayment"/>
              <img src={payments6} alt="methodsPayment"/>
              <img src={payments7} alt="methodsPayment"/>
            </div>
          </div>
          <div className="sustentability">
            <h6>SUSTENTABILIDADE:</h6>
            <div className="sustentabilityImages">
              <img src={sustentability1} alt="partnerSustentabilites"/>
              <img src={sustentability2} alt="partnerSustentabilites"/>
              <img src={sustentability3} alt="partnerSustentabilites"/>
              <img src={sustentability4} alt="partnerSustentabilites"/>
              <img src={sustentability5} alt="partnerSustentabilites"/>
              <img src={sustentability6} alt="partnerSustentabilites"/>
            </div>
          </div>
        </div>
      </div>
      <div className="copyFooter">
        <img src={footerCopy} alt="to footer copy"/>
      </div>
    </div>
  )
}

export default Footer