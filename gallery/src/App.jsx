import React, { useState } from "react";

import ReactDOM from "react-dom";


// const Comp = () => React.createElement("h1", {}, "Hej!");
// const Comp = () => <h1>Hej!</h1>
// ReactDOM.render(React.createElement(Comp), document.getElementById("root"));
// ReactDOM.render(<Comp />, document.getElementById("root"));


const Image = ({ url, setShowcaseUrl }) => {


    const handleOnClick = event => {
        setShowcaseUrl(url);
    }

    return <img
        height="100"
        width="125"
        src={url}
        onClick={handleOnClick}>
    </img>


};

const Showcase = ({ showcaseUrl }) => {



    return (

        <div>
            <img height="600" width="750" src={showcaseUrl} ></img>
        </div>

    )


}


const App = () => {

    const [showcaseUrl, setShowcaseUrl] = useState("");
    return (
        <>
            <Image
                url="https://via.placeholder.com/150"
                setShowcaseUrl={setShowcaseUrl} />
            <Image
                url="https://via.placeholder.com/150x200"
                setShowcaseUrl={setShowcaseUrl} />
            <Image
                url="https://via.placeholder.com/150x250"
                setShowcaseUrl={setShowcaseUrl} />
            <Image
                url="https://via.placeholder.com/150x300"
                setShowcaseUrl={setShowcaseUrl} />
            <Image
                url="https://via.placeholder.com/150x350"
                setShowcaseUrl={setShowcaseUrl} />
            <Showcase showcaseUrl={showcaseUrl} />

        </>

    );




};

ReactDOM.render(<App />, document.getElementById("root"));