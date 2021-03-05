//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container-fuild">
        <nav className="navbar navbar-expand-md navbar-light nav__bg fixed-top ">
            <a className="navbar-brand mx-auto" href="./index.html"><img src="img/logo/史萊姆logo.png" alt="" className="nav-logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div id="collapsibleNavbar" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto navbox">
                    <li className="nav-item CHO ">
                    <a className="nav-link lk01" href="./game.html"><h1 id="nw01"className="navword text-align">所有遊戲</h1><div id="ca" ></div></a>
                    </li>
                    <li className="nav-item CHO">
                    <a className="nav-link lk02" href="./about.html"><h1 id="nw02" className="navword">關於</h1><div id="cb" ></div></a>
                    </li>
                    <li className="nav-item CHO">
                    <a className="nav-link lk03" href="./cont.html"><h1 id="nw03" className="navword">聯絡我們</h1><div id="cc" ></div></a>
                    </li>
                </ul>  
            </div>
         </nav>
        <article >
            <div><img src="img/decoration/jelly-deco-left.png" alt="deco-left" className="deco-left"/></div>
            <div className="circle"></div>
            <div className="row justify-content-center box-all">
                <div className="col-md-5 order-md-1 col-12 order-2 row ">
                    <div className="text ">
                        <div className="title-deco text02 wow animate__animated animate__fadeInLeft">
                            <div className="title-C">
                                <h1 className=" title-h1">果凍爆破</h1>
                                
                            </div>
                            <div className="title-E">
                                <h2 className=" title-h2">Jelly Explosion </h2>
                            </div>
                            
                        </div>
    
                    </div>
                    <div className="text-box wow animate__animated animate__fadeInLeft " data-wow-delay="0.5s">
                        <p className="text-center  text-p">外星來的巨無霸果凍降臨，試圖掌控地球，你必須駕駛戰鬥機發射水溶性炸彈，爆破果凍，使其失去威脅性。</p>
                    </div>
                </div>
                <div className="col-md-5 order-md-2 col-11 order-1 img-box wow animate__animated animate__fadeInRight"><img src="img/game/jelly.png" alt="" className="img"/></div>
            </div>
            <div className="row icon-box">
                <div className="col-md-6 col-3 row justify-content-center">
                    <div className="col-md-2 jelly-ic"><a href="./jellyblastcanvas.html"><img src="img/icon/home-icon.png" alt="" className="home wow animate__animated animate__zoomIn"data-wow-delay="0.3s"/></a></div>
                </div>
                <div className="col-md-6 col-9 row justify-content-center no-gutters">
                    <div className="pc col-md-2 col-4 jelly-ic"><a href="###"><img src="img/icon/pc.png" alt="" className="icon-pc  wow animate__animated animate__zoomIn"data-wow-delay="0.3s"/></a></div>
                   <div className="apple col-md-2 col-4 jelly-ic"><a href="###"><img src="img/icon/apple.png" alt="" className="icon-ap  wow animate__animated animate__zoomIn"data-wow-delay="0.3s"/></a></div> 
                    <div className="andr col-md-2 col-4 jelly-ic "><a href="###"><img src="img/icon/android.png" alt="" className="icon-ad  wow animate__animated animate__zoomIn"data-wow-delay="0.3s"/></a></div>
                </div>

                

            </div>
            <div className=""><img src="img/decoration/jelly-deco-bot.png" alt="" className="jelly-deco-bot1"/></div>
            <div className=""><img src="img/decoration/jelly-568px-deco-bot.png" alt="" className="jelly-deco-bot2"/></div>

        </article>
        <footer>
            <div className="foot-social">
                
                <div className="row justify-content-center no-gutters ">
                    <div className="col-md-1 col-sm-2 col-4 icon-group "><a href="###" className="IC"><img src="img/icon/brandico_facebook-rect.png" alt="" className="icon wow animate__animated animate__zoomIn"/></a></div>
                    <div className=" col-md-1 col-sm-2 col-4  icon-group"><a href="###" className="IC"><img src="img/icon/simple-icons_discord.png" alt="" className="icon wow animate__animated animate__zoomIn"/></a></div>
                    <div className="col-md-1 col-sm-2 col-4 icon-group"><a href="###" className="IC"><img src="img/icon/ant-design_twitter-circle-filled.png" alt="" className="icon wow animate__animated animate__zoomIn"/></a></div>
                    <div className=" col-md-1 col-sm-2 col-4 icon-group"><a href="###" className="IC"><img src="img/icon/bx_bxl-instagram-alt.png" alt="" className="icon wow animate__animated animate__zoomIn"/></a></div>
                    <div className="d-sm-none col-4 icon-group "><a href="###" className="IC"><img src="img/icon/call.png" alt="" className="icon wow animate__animated animate__zoomIn"/></a></div>
                    <div className=" col-md-1 col-sm-2 col-4 icon-group"><a href="###" className="IC"><img src="img/icon/cib_youtube.png" alt="" className="icon wow animate__animated animate__zoomIn"/></a></div>
                    
                </div>
                <div className="row justify-content-center">
                    <a href="###" style={{'text-decoration':'none'}} className=" CONT social-contact wow animate__animated animate__zoomIn">
                       
                        <h1>聯絡我們</h1>
                    </a>
                </div>

            </div>
            <div className="foot-bottom">
                <div className="row justify-content-center">
                    <img className="bot-logo wow animate__animated animate__zoomIn"src="img/logo/資產 1.png" alt=""/>
                </div>
                <div className="row justify-content-end no-gutters bottom-text">
                    <p className=" bot-tex-v">&copy;2021 - 版權所有 抄襲必究.</p>
                    <p className=" bot-tex-lang">臺灣 TAIWAN/繁體中文</p>
                </div>

            </div>


        </footer>

    </div>
  );
}

export default App;
