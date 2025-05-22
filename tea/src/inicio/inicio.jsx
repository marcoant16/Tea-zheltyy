
//css
import "../css/index.css";
import "../css/res.css";

//img
import logo from '../assets/imagens/lemon-small.png';
import kiana from '../assets/imagens/kiana.png';
import kratos from '../assets/imagens/kratos.png';
import zoro from '../assets/imagens/zoro.png';

//svg
import Lemon from "../svg/lemon"
import Leaf from "../svg/leaf";

function Inicio(){
    return(
        <>
        <header>
            <div className="logocont">
                <img id="logo" src={logo} alt="logo" />
            </div>
            <div className="othercont">
                <h1><span className="h1sp1">Balance</span>,<span className="h1sp2">Energy</span> and <span className="h1sp3">Satisfaction</span> in one sip</h1>
                <button className="compre">See more</button>
            </div>
       </header>

        <main>
            <section className="benef">
                <div className="benecont">
                    <h2>Benefits of our Tea</h2>

                    <ul>
                        <li><Lemon/>It will give you the energy to start the day.</li>
                        <li><Lemon/>100% Natural</li>
                        <li><Lemon/>A soft and fresh taste of Lemon</li>
                        <li><Lemon/>Help with Memory Loss</li>
                        <li><Lemon/>Help erectile dysfunction</li>
                    </ul>
                </div>

                <div className="imcont">
                   <div className="forecont">
                       <div className="leafref"></div>
                       <Leaf/>
                   </div>
                </div>
            </section>

            <section className="depoconti">
                <h2>Consumer Testimonials</h2>

                <div className="depocont">
                    <div className="depo">
                        <div className="texdecont">
                            <p className="texde">This tea is great and gives me energy to face the cold days</p>
                        </div>
                        <div className="depimgcont">
                            <p>~~~~ Cleiton</p>
                            <div className="depimgcont2"><img src={kratos} className="depimg" /></div>
                        </div>
                    </div>

                    <div className="depo">
                        <div className="texdecont">
                            <p className="texde">My friends and I drink this tea every day, it really brightens up my day in these gray lands.</p>
                        </div>
                        <div className="depimgcont">
                            <p>~~~~ Anaik</p>
                            <div className="depimgcont2"><img src={kiana} className="depimg" /></div>
                        </div>
                    </div>

                    <div className="depo">
                        <div className="texdecont">
                            <p className="texde">The taste of this tea makes me lose myself in its refreshing and invigorating taste</p>
                        </div>
                        <div className="depimgcont">
                            <p>~~~~ Oroz</p>
                            <div className="depimgcont2"><img src={zoro} className="depimg" /></div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        <footer>
             <div className="ondacont">
                <div className="onda" id="onda1"></div>
                <div className="onda" id="onda2"></div>
                <div className="onda" id="onda3"></div>
                <div className="onda" id="onda4"></div>
             </div>
            <h2>Made by @Marazule {new Date().getFullYear()}</h2>
        </footer>
        </>
    )
}

export default Inicio