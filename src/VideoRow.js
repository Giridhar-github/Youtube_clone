import React from 'react'
import './VideoRow.css'

function VideoRow({title, subs, views, description, timestamp, channel, image}) {
    return (
        <div className="videoRow">
            <img src={image} />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">{channel}*<span className="videoRow__subscribers"><span className="videoRow__subsNo">{subs}</span> Subscribers</span>* {views} Views* {timestamp}</p>
                <p className="videoRow__descriptions">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
