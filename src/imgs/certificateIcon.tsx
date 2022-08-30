import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"

export default function CertificadosIcon(){
    const {navbarCertificados} = useContext(NavbarSelectContext)
    return(
        <svg className={navbarCertificados} width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_718_395)">
            <path d="M30 30.4766C33.3137 30.4766 36 27.4445 36 23.7041C36 19.9638 33.3137 16.9316 30 16.9316C26.6863 16.9316 24 19.9638 24 23.7041C24 27.4445 26.6863 30.4766 30 30.4766Z" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M33.1579 29.7139V38.8567L29.8422 37.8409L26.5264 38.8567V29.7139" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.63159 8H32.0526" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.63159 13.7139H24.3158" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.63159 19.4287H18.7895" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.5 35.5558H1.5V1.69336H40.5V35.5558H34.5" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_718_395">
            <rect width="42" height="40" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}
