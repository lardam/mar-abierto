import Link from "next/link"
import Logo from "../ui/main-logo"

export default function Header(){
    return(
        <>
        <header className="main-header">
            <div className="max-width">
                <Link href="/" className="logo-link">
                    <Logo />
                </Link>
                {/* burger */}
                <nav className="lg-nav">
                    <ul className="lg-navlist">
                        <li className="lg-navitem">
                            <Link href="/#programacion" className="lg-navlink">Programación</Link>
                        </li>
                        <li className="lg-navitem">
                            <Link href="/blog" className="lg-navlink">Blog</Link>
                        </li>
                        <li className="lg-navitem">
                            <Link href="/" className="lg-navlink">Museo</Link>
                        </li>
                        <li className="lg-navitem">
                            <Link href="/" className="lg-navlink">Cómo llegar</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        {/* mb-menu */}
        </>
    )
}