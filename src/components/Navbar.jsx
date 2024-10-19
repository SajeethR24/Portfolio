
function Navbar(){

    const nav = ['about', 'education', 'experience', 'specialization', 'skills', 'projects'];

    return (
        <aside id="right">
            <div id="navbar">
                <ul>
                    {nav.map((navs) => (
                        <a key={navs} href={`#${navs}`}>
                            <li>{navs.charAt(0).toUpperCase() + navs.slice(1)}</li>
                        </a>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Navbar;