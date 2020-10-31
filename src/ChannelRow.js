import React from 'react'
import './ChannelRow.css'
import {Avatar} from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/CheckCircleOutlineOutlined'

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={image}/>
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedUserIcon className="verifiedIcon"/>}</h4>
                <p>{subs} Subscribers * {noOfVideos} Videos </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
