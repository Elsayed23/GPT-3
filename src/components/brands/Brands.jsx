import React from 'react'

const Brands = () => {

    const brandsData = [
        {
            id: 1,
            url: require('../../assets/google.png'),
            title: 'google'
        },
        {
            id: 2,
            url: require('../../assets/slack.png'),
            title: 'slack'
        },
        {
            id: 3,
            url: require('../../assets/atlassian.png'),
            title: 'atlassian'
        },
        {
            id: 4,
            url: require('../../assets/dropbox.png'),
            title: 'dropbox'
        },
        {
            id: 5,
            url: require('../../assets/shopify.png'),
            title: 'shopify'

        },]

    const brands = brandsData.map(brand => {
        return <img key={brand.id} src={brand.url} alt={brand.title} />
    })

    return (
        <div className='my-32'>
            <div className="flex justify-center items-center flex-wrap gap-9">
                {brands}
            </div>
        </div>
    )
}

export default Brands