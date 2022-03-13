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
        <div class="sidebar">
            <TopSideBar />
            <Suggestions />
        </div>
    )
}


function TopSideBar(){

    return(
        <div class="usuario">
            <img src={datasUSerLogged.pictureUser} alt="nomenome" />
            <div class="texto">
                <strong>{datasUSerLogged.profileName}</strong>
                {datasUSerLogged.userName}
            </div>
        </div>

    );
    
}
function Suggestions(){

      
    return (

        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
            <div>Ver tudo</div>

            
            </div>
            {infosSide.map( (item) =>
            <Suggestion item ={item}  />
            )}
            
        </div>
    )
    
}
function Suggestion(props){
    const {pictureUser, name} = props.item;

    return (
        <>
        
        <div class="sugestao">
            <div class="usuario">
                <img src={pictureUser} alt={`Foto de usuario ${name} `}/>
                <div class="texto">
                    <div class="nome">{name}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>

        </>
        
    )


}