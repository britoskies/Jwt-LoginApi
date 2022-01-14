import './content.css'  

function Content(props) {
    return (
        <div className='content'>
            {props.message}
        </div>
    )
}

export default Content;
