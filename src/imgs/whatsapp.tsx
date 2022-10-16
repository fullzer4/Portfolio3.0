import { useContext } from "react"
import { SwitchThemeContext } from "../contexts/switchtheme"
import "../scss/icons.scss"

export default function WhatsIcon(){
    const {iconsImages} = useContext(SwitchThemeContext)
    return(
        <div className={iconsImages}>
            <svg className={iconsImages} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4089 0.0254457C9.52444 0.578741 0.145935 10.2562 0.181988 21.8898C0.192966 25.433 1.06781 28.7774 2.6111 31.7325L0.24161 42.9786C0.113434 43.587 0.674568 44.1196 1.29263 43.9765L12.563 41.3657C15.4585 42.776 18.7108 43.5905 22.1529 43.6419C34.2999 43.8233 44.4284 34.3926 44.807 22.5199C45.2129 9.79313 34.4704 -0.582779 21.4089 0.0254457ZM34.8569 33.9045C31.5562 37.1318 27.1678 38.9091 22.5001 38.9091C19.7669 38.9091 17.1502 38.3095 14.7224 37.127L13.1529 36.3626L6.24297 37.9633L7.69747 31.0595L6.92421 29.579C5.66387 27.1655 5.02481 24.5557 5.02481 21.8222C5.02481 17.2581 6.84253 12.9673 10.1431 9.73989C13.4143 6.54145 17.8743 4.73519 22.5004 4.73519C27.1681 4.73529 31.5563 6.51261 34.857 9.73978C38.1576 12.9671 39.9753 17.2579 39.9754 21.8219C39.9753 26.3453 38.128 30.7062 34.8569 33.9045Z" className="color"/>
                <path d="M33.3315 26.5545L29.0085 25.3408C28.4402 25.1813 27.8281 25.3389 27.414 25.7515L26.3569 26.8046C25.9111 27.2487 25.2347 27.3914 24.6447 27.158C22.5997 26.3488 18.2979 22.6089 17.1993 20.7383C16.8824 20.1987 16.9348 19.524 17.3239 19.0317L18.2469 17.8641C18.6085 17.4067 18.6848 16.7924 18.4457 16.2636L16.6269 12.2414C16.1912 11.2781 14.9322 10.9976 14.1096 11.6778C12.9031 12.6756 11.4715 14.1919 11.2975 15.8716C10.9907 18.8332 12.2896 22.5665 17.2018 27.0493C22.8766 32.2281 27.421 32.9123 30.3798 32.2115C32.0581 31.8141 33.3992 30.2207 34.2457 28.916C34.8227 28.0265 34.3671 26.8452 33.3315 26.5545Z" className="color"/>
            </svg>
        </div>
    )
}