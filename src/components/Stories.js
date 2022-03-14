let infoStories = [
    { name:'9gag',
      pic:'./assets/img/9gag.svg'},
    { name:'meowed',
      pic:'./assets/img/meowed.svg'},
    { name:'barked',
      pic:'./assets/img/barked.svg'},
    { name:'nathanwpylestrangeplanet',
      pic:'./assets/img/nathanwpylestrangeplanet.svg'},
    { name:'wawawicomics',
      pic:'./assets/img/wawawicomics.svg'},
    { name:'respondeai',
      pic:'./assets/img/respondeai.svg'},
    { name:'filomoderna',
      pic:'./assets/img/filomoderna.svg'},
    { name:'memeriagourmet',
      pic:'./assets/img/memeriagourmet.svg'}
  ]
export default function Stories(){

    return(
        <section className="stories">
            { infoStories.map((storie, index) => 
            <Storie key ={index} storie={storie} />)}
            <Icon />
        </section>
    );    
}

function Storie(props){
    const {name, pic} = props.storie;

    return(
    <div className="story">
        <div className="imagem">
            <img src={pic} />
        </div>
        <div className="usuario">{name}</div>
    </div>

    );
}
function Icon(){
    return(
        <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div> 
    );
}