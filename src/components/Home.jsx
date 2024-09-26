/* eslint-disable react/prop-types */
export default function Home(props) {
    const { data } = props;
    return (
        <div className="imgContainer">
            <img src={ data.hdurl } alt= { data.title || 'bg-img'} 
            className="bgImage"/>
        </div>
    )
}