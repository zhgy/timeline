import React from 'react'
import { ProfileCard } from '../../components'
import { Button } from '../../components/Button'


const Gallery = props => {
    const profileCardData = {
        tag: 'Top Artist',
        name: 'James Blunt',
        avatar: 'https://i.scdn.co/image/f87792caa6da101c22961f85effbb748a23ad3a1',
        action: {
            title: 'Play Now',
            link: '/'
        }
    }
    return (
        <React.Fragment>
            <h3>Gallery</h3>
            <div style={{ backgroundImage: 'linear-gradient(90deg, #2C5E92 0%, #552F6D 80%)', height: '360px', padding: '30px 0' }}>
                <ProfileCard {...profileCardData} />
            </div>

            <div>
                <Button title={'Button'} link={'/'} />
            </div>
        </React.Fragment>
    )
}

export default Gallery