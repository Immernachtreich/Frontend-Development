import './Popup.css'

const Popup = props => {

    const removePopup = e => {
        props.onEmpty(true);
    }

    return <div className={ props.className }>
        <div className='Popup-Div__Inner'>
            <h2> { props.title } </h2>
            <button onClick={ removePopup }> &#10005; </button>
            <p> { props.message } </p>
        </div>
    </div>
}

export default Popup;