import React from 'react'

class Titles extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title-container__title">Weather Finder</h1>
                <p className = "title-container__subtitle">Get current Weather forcast</p>
                <p className="title-container__subtitles"> Made By :  
                    <span className="title-container__name"> Deepak Singh</span>
                </p>
            </div>

        )
    }
    
}


export default Titles;