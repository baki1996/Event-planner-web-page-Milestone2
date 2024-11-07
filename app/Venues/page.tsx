import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Venues = () => {
  return (
    <section className='Venues'>
        <div className="Venues-text">
            <h5>Best Wedding Venues For Worth</h5>
            <h2></h2>
            <p> Welcome to your treasure trove of perfect phrases crafted to complement every snapshot taken at a wedding venue! Our carefully curated selection promises not only to encapsulate the emotion and elegance of your special day but also to elevate your Instagram posts to new heights. Delight your followers with captions that resonate with the beauty, love, and unforgettable moments experienced. So, dive in and find the words that speak volumes, making each post a memorable memento of your celebration.

</p>
            <div className='btn'>
                <Link className='btn-link' href={""}>Explore More</Link>
            </div>
        </div>

        <div className="Venues-img">
            <Image src={"/img/venue.png"} alt='Venues img' height={1000} width={1000}/>
        </div>
    </section>
  )
}

export default Venues