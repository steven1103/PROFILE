import React, {useState} from 'react';
import './App.css';
function App() {
  const JSimage = require('./image/js.png')
  const PYimage = require('./image/python.png')
  const Reactimage = require('./image/react.png') 
  const NodeImage = require('./image/node.png') 
  const NestImage = require('./image/nest.png') 
  const ExcelImage = require('./image/excel.png')
  const DiscordImage = require('./image/discord.png')
  const MinecraftImage = require('./image/minecraft.png')
  const GraphqlImage = require('./image/graphql.png')
  const PrismaImage = require('./image/prisma.png')
  const FirebaseImage = require('./image/firebase.png')
  const HtmlImage = require('./image/Html.png')
  const CSSimage = require('./image/CSS.png')
  const [JSmouseEnter, SetJSmouseEnter] = useState(false)
  // eslint-disable-next-line
  const JSskills = [<img src={Reactimage} style={{height:100, marginTop:10}}></img>, <img src={NestImage} style={{height:100, marginTop:10, marginLeft:-30}}></img>,<img src={NodeImage} style={{height:100, marginTop:10}}></img>]
  // eslint-disable-next-line
  const PYskills = [<img src={ExcelImage} style={{height:100, marginTop:-5}}></img>, <img src={DiscordImage} style={{height:110, marginTop:40}}></img>,<img src={MinecraftImage} style={{height:100, marginTop:10}}></img>]
  // eslint-disable-next-line
  const Backendskills = [<img src={GraphqlImage} style={{height:300, marginTop:-5}} className="Skillimage"></img>,<img src={FirebaseImage} className="Skillimage" style={{height:300, marginTop:-5}}></img>,<img src={PrismaImage} style={{height:300, marginTop:-5}} className="Skillimage" ></img>,]
  // eslint-disable-next-line
  const FrontEndskills = [<img src={HtmlImage} style={{height:300, marginTop:-5}} className="Skillimage"></img>,<img src={CSSimage} style={{height:300, marginTop:-5}} className="Skillimage"></img>,]
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1 Name">
          STEVEN1103
        </h1>
        <div onClick={()=> document.getElementById('history').scrollIntoView({behavior:'smooth'})} className="btn from-top">GO</div>
      </header>
      <div id="history"  >
      <h1 className="h1 2header" style={{fontWeight:400}} >
          LANGUAGAE THAT I CAN DO
        </h1>
        <header className="history">
          <img style={{height:100}} alt="JS" src={JSimage}></img>
          <div className="h1" style={{letterSpacing:3, fontSize:20, marginLeft:-10}} >[ JS ]</div>
          <div className="javascript" style={{fontSize:20, letterSpacing:3, marginLeft:-10, fontWeight:400}} onClick={()=> JSmouseEnter === true ? SetJSmouseEnter(false): SetJSmouseEnter(true)} >Learn More (CLICK)</div>
          <div>{JSmouseEnter === true &&JSskills}</div>
      </header>
      </div>
      <div id="history"  >
        <header className="pythonScreen">
          <img style={{height:100}} alt="JS" src={PYimage}></img>
          <div className="h1" style={{letterSpacing:3, fontSize:20, marginLeft:-10, color:"white"}} >[ PYTHON ]</div>
          <div className="python" style={{fontSize:20, letterSpacing:3, marginLeft:-10, fontWeight:400}} onClick={()=> JSmouseEnter === true ? SetJSmouseEnter(false): SetJSmouseEnter(true)} >Learn More (CLICK)</div>
          <div>{JSmouseEnter === true &&PYskills}</div>
      </header>
      </div>
      <div id="history"  >
      <h1 className="h1 2header" style={{fontWeight:400}} >
          FRONTEND & BACKEND
        </h1>
        <header className="history">
          <div>{Backendskills}</div>
      </header>
      </div>
      <div id="history"  >
        <header className="pythonScreen">
          <div>{FrontEndskills}</div>
      </header>
      </div>
      <div style={{fontSize:40}} className="h1">
        개발자 연락처 : steven1103@naver.com
      </div>
    </div>
  );
}

export default App;
