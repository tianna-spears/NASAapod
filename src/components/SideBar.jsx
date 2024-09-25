/* eslint-disable react/prop-types */
export default function SideBar(props) {
    const { handleToggleModel } = props;

    return (
        <div className= "sidebar">
            <div onClick= {handleToggleModel}
            className="bgOverlay"> </div>
            <div className= "sidebarContents"> 
                <h2> The Brutal Martian Landscape</h2>
                <div>
                    <p> Description</p>
                    <p> Long text goes hereeeeeeee</p>
                </div>
                <button onClick= {handleToggleModel}> 
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}