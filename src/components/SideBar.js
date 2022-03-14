let infosSide = [
    { pictureUser: './assets/img/bad.vibes.memes.svg',
      name:'bad.vibes.memes'},
    { pictureUser: './assets/img/chibirdart.svg',
      name: 'chibirdart'},
    { pictureUser: './assets/img/razoesparaacreditar.svg',
      name: 'razoesparaacreditar'},
    { pictureUser: './assets/img/adorable_animals.svg',
      name: 'adorable_animals'},
    { pictureUser: './assets/img/smallcutecats.svg',
      name: 'smallcutecats'}
];
const datasUSerLogged = {
    profileName:'catanacomics', 
    userName:'Catana', 
    pictureUser:'assets/img/catanacomics.svg'
}

export default function SideBar(){
    return(
        <div className="sidebar">
            <TopSideBar />
            <Suggestions />
            <Copright />
        </div>
    )
}

function TopSideBar(){

    return(
        <div className="usuario">
            <img src={datasUSerLogged.pictureUser} alt="nomenome" />
            <div className="texto">
                <strong>{datasUSerLogged.profileName}</strong>
                {datasUSerLogged.userName}
            </div>
        </div>

    );
    
}
function Suggestions(){
  
    return (

        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
            <div>Ver tudo</div>

            </div>
            {infosSide.map((item, index) =>
            <Suggestion key={index} item ={item}  />
            )}  
        </div>
    ); 
}
function Suggestion(props){
    const {pictureUser, name} = props.item;

    return (
        <>
        <div className="sugestao">
            <div className="usuario">
                <img src={pictureUser} alt={`Foto de usuario ${name} `}/>
                <div className="texto">
                    <div className="nome">{name}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
        </> 
    )
}
function Copright(){

    return(
        <> 
        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
        </>
       
    );
}