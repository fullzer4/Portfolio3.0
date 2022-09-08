import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"

export default function SchoolIcon(){
    const {navbarAcademico} = useContext(NavbarSelectContext)
    return(
        <svg className={navbarAcademico} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_718_409)">
            <path d="M20 12V0M0 38.6667H40M4 38.6667V22.6667H9.33333M36 38.6667V22.6667H30.6667M17.3333 38.6667V30.6667H22.6667V38.6667M20 1.33333H28V6.66667H20M20 12L30.6667 17.3333V38.6667H9.33333V17.3333L20 12ZM20 25.3333C18.5273 25.3333 17.3333 24.1394 17.3333 22.6667C17.3333 21.1939 18.5273 20 20 20C21.4727 20 22.6667 21.1939 22.6667 22.6667C22.6667 24.1394 21.4727 25.3333 20 25.3333Z"/>
            </g>
            <defs>
            <clipPath id="clip0_718_409">
                <rect width="40" height="40" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}
