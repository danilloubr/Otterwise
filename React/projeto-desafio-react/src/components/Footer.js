import React from "react"

import "../styles/footer.css"

const Footer = ({author}) => {
    return (
        <div className="footer">
            <p>{author}</p>
        </div>
    )
}

export default Footer