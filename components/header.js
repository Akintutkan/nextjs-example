import Link from "next/link"
export default function Header(){
    return <header className="header">
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        
                           <p>Anasayfa</p> 
                            
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        
                            <p>Hakkında</p>
                            
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                       
                            <p>Blog</p>
                            
                    </Link>
                </li>
            
            </ul>
        </nav>
        <style jsx>{`
        .header{
            height:60px;
            background:#fff;
            border-bottom: 1px solid #ccc;
            ul{
                display:flex;
                li{
                    p{
                        display:flex;
                        flex-decoration:none;
                        height:60px;
                        align-items:center;
                        padding:0 20px;
                    }
                }
            }
        }`}
        
        </style>
    </header>
}