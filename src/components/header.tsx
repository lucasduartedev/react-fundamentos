import './header.css'

interface HeaderProps {
    title?: string;
}

export function Header({ title = 'Pratica de desenvolvimento com React!' }: HeaderProps) {
    return(
        <header className="header">
            <h1 className="main-title">{title}</h1>

            <hr/>
        </header>
    )
}
