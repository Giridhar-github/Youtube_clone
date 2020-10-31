import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
            image="https://images.unsplash.com/photo-1517042244917-7498ac155a51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            channel="Bachelor's Of India"
            verified
            subs="1.1M"
            noOfVideos={127}
            description="Lots of Videos"
            />

            <hr />

            <VideoRow
            views="43.1M"
            subs="121K"
            description="jhhaskdjksdhajksdhkjashdkjashdkjashdjkashdkjahsdjkahsdjkhsdjahdkjashdjashdjashdjhsadjhajshdh"
            timestamp="59 seconds ago"
            channel="Clever Idiot"
            title="Lorem Ponge"
            image="https://images.unsplash.com/photo-1584029595455-c3951fe1a3dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
        </div>
    )
}

export default SearchPage
