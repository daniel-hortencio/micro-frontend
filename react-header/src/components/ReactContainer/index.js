import ReactLogo from './Logo.svg'

import './styles.css'

export const ReactContainer = ({
    children
}) => {

    return (
        <section className="ReactContainer">

            <div className="ReactContainer__logo-container">
                <img src={ReactLogo} />
            </div>

            <div className="ReactContainer__content">
                {children}
            </div>

        </section>
    )
}