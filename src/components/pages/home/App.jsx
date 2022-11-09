import './App.css'; 

import promo1 from '../../../imagens/promo1.png';

import local from '../../../imagens/local.jpg';

import prod1 from '../../../imagens/temp/hamburger-bacon.jpg';
import prod2 from '../../../imagens/temp/hamburger-batata.jpg';
import prod3 from '../../../imagens/temp/lanche1.jpg';
import prod4 from '../../../imagens/temp/suco2.jpg';
import prod5 from '../../../imagens/temp/suco-laranja.jpg';
import prod6 from '../../../imagens/temp/sorvete.jpg';


function App() {
  return (
    <div className="App">

        <div className="slider">

            <div className="slides">

                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />

                <div className="slide primeira">
                    <img src={promo1} alt="Promoção 1" />
                </div>
                <div className="slide">
                    <img src="./imagens/promo2.png" alt="Promoção 2" />
                </div>
                <div className="slide">
                    <img src="./imagens/promo3.png" alt="Promoção 3" />
                </div>
                <div className="slide">
                    <img src="./imagens/promo4.png" alt="Promoção 4" />
                </div>

                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>

            </div>
            
            <div className="manual-navigation">
                <label for="radio1" className="manual-btn"></label>
                <label for="radio2" className="manual-btn"></label>
                <label for="radio3" className="manual-btn"></label>
                <label for="radio4" className="manual-btn"></label>                
            </div>

        </div>

        <main className="principal">
            {/* Info local */}
            <img className="imagemLocal" src={local} alt="Imagem do local" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas! Hic quasi consequuntur quas numquam ullam fuga voluptas...
            </p>
            
        </main>

        <div className="tipos">
            {/* Tipos de produto */}
            <span className="material-icons tipo">
                lunch_dining
            </span>
            <span className="material-icons tipo">
                local_bar
            </span>            
            <span className="material-icons tipo">
                kebab_dining
            </span>
            <span className="material-icons tipo">
                icecream
            </span>
            <span className="material-icons tipo">
                fastfood
            </span>
        </div>
        
        <div className="produtos">
            {/* Alguns produtos */}
            <div className="cardProd">
                <img src={prod1} alt="" />
                <span className="descricao">Lanche</span>
                <span>R$ 0,00</span>
            </div>
            <div className="cardProd">
                <img src={prod2} alt="" />
                <span className="descricao">Lanche</span>
                <span>R$ 0,00</span>
            </div>
            <div className="cardProd">
                <img src={prod3} alt="" />
                <span className="descricao">Lanche</span>
                <span>R$ 0,00</span>
            </div>
            <div className="cardProd">
                <img src={prod4} alt="" />
                <span className="descricao">Lanche</span>
                <span>R$ 0,00</span>
            </div>
            <div className="cardProd">
                <img src={prod5} alt="" />
                <span className="descricao">Lanche</span>
                <span>R$ 0,00</span>
            </div>
            <div className="cardProd">
                <img src={prod6} alt="" />
                <span className="descricao">Lanche</span>
                <span>R$ 0,00</span>
            </div>
        </div>

        <script src='scripts/nav.js'></script>
        <script src='scripts/home.js'></script>      
    </div>
  );
}

export default App;
