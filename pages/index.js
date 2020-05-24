import Link from 'next/link';

const Index = ({ posts }) => (
    <div>
        {posts.articles.map((post) => (
            <div>
                <img src={post.urlToImage} alt="" title="" />
                <Link href="/somos"><h2>{post.title}</h2></Link>
            </div>

        ))}
    </div>
)

export async function getStaticProps() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=mx&apiKey=d6e94ae6348c44ab9b20c475613aae01')
    const posts = await res.json()
    return {
        props: {
            posts,
        },
    }
}


export default Index;