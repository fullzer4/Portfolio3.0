import { useContext } from "react"
import { NavbarSelectContext } from "../contexts/navbarpageselect"

export default function AboutIcon(){
    const {navbarSobre} = useContext(NavbarSelectContext)
    return(
        <svg className={navbarSobre} width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_718_377)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 20C22.325 20 26.25 15.5143 26.25 10C26.25 4.48571 22.325 0 17.5 0C12.675 0 8.75 4.48571 8.75 10C8.75 15.5143 12.675 20 17.5 20ZM17.5 5.71429C19.575 5.71429 21.25 7.62857 21.25 10C21.25 12.3714 19.575 14.2857 17.5 14.2857C15.425 14.2857 13.75 12.3714 13.75 10C13.75 7.62857 15.425 5.71429 17.5 5.71429ZM17.5 25C11.65 25 0 28.3429 0 35V37.1429C0 38.7143 1.125 40 2.5 40H32.5C33.875 40 35 38.7143 35 37.1429V35C35 28.3429 23.35 25 17.5 25ZM5.85 34.2857C7.95 32.6286 13.025 30.7143 17.5 30.7143C21.975 30.7143 27.05 32.6286 29.15 34.2857H5.85ZM35.1 25.1714C38 27.5714 40 30.7714 40 35V40H47.5C48.875 40 50 38.7143 50 37.1429V35C50 29.2286 41.25 25.9429 35.1 25.1714ZM32.5 20C37.325 20 41.25 15.5143 41.25 10C41.25 4.48571 37.325 0 32.5 0C31.15 0 29.9 0.371428 28.75 1C30.325 3.54286 31.25 6.65714 31.25 10C31.25 13.3429 30.325 16.4571 28.75 19C29.9 19.6286 31.15 20 32.5 20Z"/>
            </g>
            <defs>
            <clipPath id="clip0_718_377">
            <rect width="50" height="40" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}