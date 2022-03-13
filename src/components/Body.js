import Posts from './Posts';

export default function Body(){

    return(
        <main class="corpo">
            <div class="esquerda">
                <section class="stories">
                    
                </section>

                <article class="posts">
                    <Posts />
                </article>

            </div>

            <div class="sidebar">
              
            </div>
        </main>
    )
}