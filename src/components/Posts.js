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
  
export default function Posts(){

    return (
        posts.map((post, index) => {
            <Post key={index} post={post} />
        })
        
    
    )
 
}

function Post({ post }){
    
    const {nameUser, pictureUser, picturePost, likedByPic, likedByName, likedOther } = post;

    return(
    <div class="post">
        <div class="topo">
            <div class="usuario">
                <img src= {pictureUser}/>
                {nameUser}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
        <div class="conteudo">
            <img src={picturePost} />
        </div>

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
    </div>

    );
}