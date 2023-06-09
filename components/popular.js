export default function Popular({movies}) {
    return <div className="popular">
        <h2>Popüler Filmler</h2>
        <div className="popular-inner">
        {movies.results.map(movie =>(
            <div>
                <h3>{movie.title}</h3>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h300_face${movie.poster_path}`} alt=""/>
            </div>
        ))}
        <style jsx>{`
        .popular{
            display: flex;
            flex-wrap: wrap;
            padding:20px 0;
            h2{
                font-size:40px;
                margin-bottom:20px;
            }

           .popular-inner{
            width: 1200px;
            margin: 0 auto;
            gap: 10px;
         

            div{
                width:calc(25% - 10px);
                position:relative;

                h3{
                    font-size:20px;
                    position:absolute;
                    bottom: 0;
                    left: 0;
                    width:100%;
                    color: #fff;
                    background: linear-gradient(to top, #000, transparent);
                    padding: 50px 20px 20px 20px;
                }
                img{
                    width:100%
                }
            }
        }
        }`}</style>
    </div>
    </div>
}