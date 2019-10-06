import React, { Component } from 'react';
//import Split from './composition/Split';
import './App.css';
//import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Counter from './state/Counter'
import Messages from './Messages';
import Tabs from './state/Tabs';
import Bomb from './state-drills/Bomb';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun';
import Accordion from './state-drills/Accordion';

/* make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip color='hotpink' message = 'tooltip message'>
    ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message = 'another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <TheDate>
        <div></div>
      </TheDate>
      <Counter  count={123} />
      <Split className='left' flexBasis={2}>
        This is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
} */

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class App extends Component {
  render() {
    return (
      <main className="App">
        <nav className="nav-bar">
        <h1>REACT PLAYGROUND!</h1>
        <div className="Date">
        <TheDate>
        <div></div>
        </TheDate>
        </div>
        <div className='message'>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        </div>
        <div className='Bomb'>
          <h3>Time's running out...</h3>
          <Bomb />
        </div>
        </nav>
        <div className='Tabs'>
          <Tabs tabs={tabsProp} />
        </div>
        <div className='Counter'>
          <h3>How high can the counter go?</h3>
        <Counter  count={123} />
        </div>
        <div className='HelloWorld'>
          <h3>Say hello...</h3>
          <HelloWorld />
        </div>
        <div className='Gun'>
          <h4>Russian Roulette</h4>
          <RouletteGun bulletInChamber={6} />
        </div>
        <div>
          <h3>Accordion</h3>
          <Accordion sections={sections}/>
        </div>
      </main>
    );
  }
}


export default App;

