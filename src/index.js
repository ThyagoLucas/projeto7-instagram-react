import ReactDOM from 'react-dom';
import Body from './components/Body';
import Top from './components/Top';

let posts = [
  {
  nameUser: 'meowed',
  pictureUser:'"./assets/img/meowed.svg"',
  picturePost: '"./assets/img/gato-telefone.svg"',
  likedByPic: '".assets/img/respondeai.svg"',
  likedByName: 'respondeai',
  likedOther: 'outras 101.523 pessoas'},
  {
  nameUser: 'meowed',
  pictureUser:'./assets/img/meowed.svg',
  picturePost: './assets/img/gato-telefone.svg',
  likedByPic: '.assets/img/respondeai.svg',
  likedByName: 'respondeai',
  likedOther: 'outras 101.523 pessoas'}
];
let infosSide = [
  { pictureUser: '"./assets/img/bad.vibes.memes.svg"',
    name:'bad.vibes.memes'},
  { pictureUser: '"./assets/img/chibirdart.svg"',
    name: 'chibirdart'},
  { pictureUser: '"./assets/img/razoesparaacreditar.svg"',
    name: 'razoesparaacreditar'},
  { pictureUser: '"./assets/img/adorable_animals.svg"',
    name: 'adorable_animals'},
  { pictureUser: '"./assets/img/smallcutecats.svg"',
    name: 'smallcutecats'}
];
let infoStories = [
  { name:'9gag',
    pic:'"./assets/img/9gag.svg"'},
  { name:'meowed',
    pic:'"./assets/img/meowed.svg"'},
  { name:'barked',
    pic:'"./assets/img/barked.svg"'},
  { name:'nathanwpylestrangeplanet',
    pic:'"./assets/img/nathanwpylestrangeplanet.svg"'},
  { name:'wawawicomics',
    pic:'"./assets/img/wawawicomics.svg"'},
  { name:'respondeai',
    pic:'"./assets/img/respondeai.svg"'},
  { name:'filomoderna',
    pic:'"./assets/img/filomoderna.svg"'},
  { name:'memeriagourmet',
    pic:'"./assets/img/memeriagourmet.svg"'}
]

function App(){

  return (
   
    <>
      <Top /> 
      <Body/>

    </>
        );
}



ReactDOM.render(App(), document.querySelector(".root"));






