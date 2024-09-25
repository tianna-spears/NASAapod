/* eslint-disable react/prop-types */
export default function Footer(props)  {
    const { showModel, handleToggleModel, data } = props;

    return (
    <footer>
        <div className="bgGradient"></div>
        <div>
            <h1> APOD PROJECT</h1>
            <h2> {data.title || 'Loading title...'}</h2>
        </div>
        <button onClick= {handleToggleModel}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
     </footer>
    )
}