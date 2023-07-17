
const Nav = () => {
    return (
        <>
            <div className="navbar bg-info-content  ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-accent text-xl">Tic-Tac-Toe</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Link</a></li>
                        <li>
                            <details>
                                <summary>
                                    Parent
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav;