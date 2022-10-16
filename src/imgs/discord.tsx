import { useContext } from "react"
import { SwitchThemeContext } from "../contexts/switchtheme"
import "../scss/icons.scss"

export default function DiscordIcon(){
    const {iconsImages} = useContext(SwitchThemeContext)
    return(
        <div className={iconsImages}>
            <svg className={iconsImages} fill="none" xmlns="http://www.w3.org/2000/svg">

                <path d="M39.7859 2.99173C36.7752 1.6043 33.5764 0.595256 30.2145 0.0024446C30.1517 0.0024446 30.089 0.0024444 30.0639 0.0781225C29.65 0.822291 29.1858 1.78088 28.8722 2.53766C25.2343 1.9953 21.6592 1.9953 18.1216 2.53766C17.7955 1.75565 17.3313 0.809678 16.8672 0.0781225C16.8296 0.0276704 16.7794 -0.0101684 16.7167 0.0024446C13.8314 0.582643 10.1434 1.64214 7.1829 2.99173C7.15781 2.99173 7.13272 3.01695 7.12018 3.04218C0.973406 12.2497 -0.65737 21.0788 0.22074 29.9079C0.22074 29.9457 0.245829 29.9962 0.283462 30.034C4.29768 33.0107 8.18645 34.827 12.025 36C12.0878 36 12.1505 36 12.1881 35.9495C13.0913 34.7135 13.8942 33.4017 14.5967 32.0143C14.6343 31.9386 14.5967 31.8377 14.5088 31.8125C13.2544 31.308 12 30.7278 10.8333 30.0467C10.7455 29.9962 10.733 29.8575 10.8333 29.7944C11.0842 29.6052 11.3351 29.416 11.5609 29.2268C11.5985 29.189 11.6613 29.189 11.7114 29.2016C19.4137 32.7332 27.7683 32.7332 35.295 29.2016C35.3451 29.1764 35.4079 29.189 35.4455 29.2142C35.6838 29.416 35.9222 29.6052 36.1731 29.7944C36.2609 29.8575 36.2483 29.9962 36.1731 30.0467C35.0064 30.7404 33.7896 31.308 32.4976 31.8125C32.4097 31.8503 32.3721 31.9386 32.4223 32.0269C33.1248 33.4143 33.9402 34.7135 34.8057 35.9369C34.8434 35.9874 34.9061 36.0126 34.9688 35.9874C38.8074 34.7891 42.7087 32.9855 46.7355 30.0214C46.7731 29.9962 46.7982 29.9584 46.7982 29.8953C47.7767 19.6914 45.1549 10.8496 39.8486 3.02957C39.8486 3.00434 39.811 2.97912 39.7859 2.97912V2.99173ZM15.7006 24.56C13.3171 24.56 11.4355 22.4158 11.4355 19.767C11.4355 17.1183 13.3171 14.9741 15.7006 14.9741C18.084 14.9741 19.9657 17.1183 19.9657 19.767C19.9657 22.4158 18.084 24.56 15.7006 24.56ZM31.3811 24.56C28.9977 24.56 27.116 22.4158 27.116 19.767C27.116 17.1183 28.9977 14.9741 31.3811 14.9741C33.7645 14.9741 35.6462 17.1183 35.6462 19.767C35.6462 22.4158 33.7645 24.56 31.3811 24.56Z" className="color"/>
            
            </svg>
        </div>
    )
}