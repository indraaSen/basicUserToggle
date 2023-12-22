import ColorSchemesExample from "../../Module/Navbar/Navbar";


const Header = ({login, changing, text}) => {

    return(
        <div>
            <ColorSchemesExample bg_name = {login === 'user' ? 'success' : 'primary'} formChange = {changing} newText={text}/>
        </div>
    )
}

export default Header;