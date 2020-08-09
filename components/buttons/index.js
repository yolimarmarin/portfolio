import style from '../../styles/Buttons.module.css'


const RoutingButton = ({title}) =>{
    return(
        <a className={style.routingButton}>{title}</a>
    )
}

export {
    RoutingButton
}