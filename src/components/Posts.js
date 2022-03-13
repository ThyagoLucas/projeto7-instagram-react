let posts = [
    {
    nameUser: 'nasa',
    pictureUser:'./assets/img/logonasa.png',
    infoPost: {type: 'img', src:'./assets/img/nasa.png'},
    likedByPic:  './assets/img/respondeai.svg',
    likedByName: 'respondeai',
    likedOther: 'outras 101.523 pessoas'},
    {
    nameUser: 'thyago',
    pictureUser:'./assets/img/thyago.jpg',
    infoPost: {type: 'video', src:'./assets/video/instav.mp4'},
    likedByPic: './assets/img/respondeai.svg',
    likedByName: 'respondeai',
    likedOther: 'outras 101.523 pessoas'}
  ];
  
export default function Posts(){

    return (
        posts.map(post => 
            <Post post={post} />
        )
        
    )
 
}

function Post(props){
    
    const {nameUser, pictureUser, infoPost, ...rest } = props.post;

    return(
    <article class="post">
        <TopPost nameUser={nameUser} picture={pictureUser}/>
        <ContentsPost data = {infoPost} />
        <BottomPost info = {rest}/>
    </article>

    );
}
function TopPost (props){
    return(
        <div class="topo">
            <div class="usuario">
                <img src= {props.picture}/>
                {props.nameUser}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
   
}
function ContentsPost (props){
    const {type, src} = props.data;
    
    if(type == 'img'){
       return (
            <div class="conteudo">
                <img src={src} />
            </div>
            
        )
    }else{
        return(
            <div class="conteudo">
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

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={likedByPic} />
                <div class="texto">
                    Curtido por <strong>{likedByName}</strong> e <strong>{likedOther}</strong>
                </div>
            </div>
        </div>
    )

}