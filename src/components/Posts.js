let posts = [
    {
    nameUser: 'thyago',
    pictureUser:'./assets/img/thyago.jpg',
    infoPost: {type: 'video', src:'./assets/video/instav.mp4'},
    likedByPic: './assets/img/nathanwpylestrangeplanet.svg',
    likedByName: 'etebaldo',
    likedOther: 'outras 101.523 pessoas'},
    {
    nameUser: 'nasa',
    pictureUser:'./assets/img/logonasa.png',
    infoPost: {type: 'img', src:'./assets/img/nasa.png'},
    likedByPic:  './assets/img/respondeai.svg',
    likedByName: 'respondeai',
    likedOther: 'outras 91.503 pessoas'}
];
  
export default function Posts(){

    return (
        posts.map((post, index) => 
            <Post key={index} post={post} />
        ) 
    )
}

function Post(props){
    
    const {nameUser, pictureUser, infoPost, ...rest } = props.post;

    return(
    <article className="post">
        <TopPost nameUser={nameUser} picture={pictureUser}/>
        <ContentsPost data = {infoPost} />
        <BottomPost info = {rest}/>
    </article>

    );
}
function TopPost (props){
    return(
        <div className="topo">
            <div className="usuario">
                <img src= {props.picture}/>
                {props.nameUser}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}
function ContentsPost (props){
    const {type, src} = props.data;
    
    if(type == 'img'){
       return (
            <div className="conteudo">
                <img src={src} />
            </div>  
        );
    }else{
        return(
            <div className="conteudo">
                <video width="100%" autoPlay muted loop >
                    <source src={src} type="video/mp4"/>
                </video>
            </div>
        )
    }
}
function BottomPost (props){
    const {likedByPic, likedByName, likedOther } = props.info;
    return(

        <div className="fundo">
            <div className="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src={likedByPic} />
                <div className="texto">
                    Curtido por <strong>{likedByName}</strong> e <strong>{likedOther}</strong>
                </div>
            </div>
        </div>
    )

}