import { useState, useEffect } from 'react'

import './styles.css'

export const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            url: "https://hips.hearstapps.com/roa.h-cdn.co/assets/14/49/nrm_1417618112-1400443_car-ferrari-fxx.jpg",
            legend: "Ferrari FXX",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "Comprar agora"
        },
        {
            url: 'https://cdn.motor1.com/images/mgl/Y817q/s1/lamborghini-aventador-lp-780-4-ultimae.jpg',
            legend: "Lamborghini Aventador",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "Comprar agora"
        },
        {
            url: "https://wallpapercave.com/wp/wp5724123.jpg",
            legend: "Bugatti Chiron",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "Comprar agora"
        },
        {
            url: "https://www.hdcarwallpapers.com/walls/koenigsegg_gemera_2020_4k_2-HD.jpg",
            legend: "Koenigsegg Gemera",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "Comprar agora"
        },
        {
            url: "https://wallpaperaccess.com/full/225971.jpg",
            legend: "Pagani Huayra",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "Comprar agora"
        }, {
            url: "https://www.teahub.io/photos/full/55-557601_4k-mclaren-720s.jpg",
            legend: "McLaren 720",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "Comprar agora"
        },
        {
            url: "https://cdn-cfmok.nitrocdn.com/juJsjTwdTqWjkJBaBrLnvLeovPsDevAD/assets/static/optimized/rev-b5a7330/wp-content/uploads/1589578947_991_Porsche-918-Spyder-Wallpapers-2020.jpg",
            legend: "Porsche 918 Spyder",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            button: "Comprar agora"
        }
    ]

    useEffect(() => {

        setTimeout(() => {
            const newSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1
            setCurrentSlide(newSlide)
        }, 2000)

    }, [currentSlide])

    return (
        <section className="Slider">
            <img src={slides[currentSlide].url} />
            <div className="Slider__texts">
                <h1>{slides[currentSlide].legend}</h1>
                <p>{slides[currentSlide].description}</p>
                <button>
                    {slides[currentSlide].button}
                </button>
            </div>
        </section>
    )
}