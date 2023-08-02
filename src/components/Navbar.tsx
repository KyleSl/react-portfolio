interface Props {
    pageNames: string[];
    activePage: string;
    onSelectItem: ( item: string ) => void;
}

export default function Navbar ({ pageNames, activePage, onSelectItem }: Props) {
    return (
        <nav className="navbar navbar-expand-lg custom-bg-purple">
            <div className="container-fluid">
                <a className="navbar-brand">Kyle Slaughter</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {pageNames.map( (item, index ) => (<li key={index} 
                        className={ item === activePage ? 'nav-link active' : 'nav-link'}
                        onClick={() => { onSelectItem(item) }}
                        >{item}</li>))}
                    </div>
                </div>
            </div>
        </nav>
    )
}