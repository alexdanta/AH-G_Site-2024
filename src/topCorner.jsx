import ahgLogo from '/ah-gLogo.svg'

function topCorner() {
    return <header>
        <div className="headerLogo">
            <img src={ahgLogo} alt="AH-G logo" />
            <p>AH-G .</p>
        </div>
    </header>;
}

export default topCorner;