import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectHeader from '@/components/BuildingBlocks/ProjectHeader'
import ProjectText from '@/components/BuildingBlocks/ProjectText'
import ImageGrid from '@/components/BuildingBlocks/ImageGrid'

const page = () => {
  return (
    <div className='overflow-hidden scroll-smooth relative w-full flex flex-col items-center justify-center font-albert'>
      <Navbar />

      <div className='w-full max-w-[1440px] mx-auto items-center justify-center px-12 md:px-48 mt-32'>
        <ProjectHeader
          title="Banaag Diwa '25 Website"
          tags={['UI/UX', 'Web Design']}
          imageSrc="/banners/BanaagDiwa25.jpg"
          roles="UI/UX Designer"
          type="Web Design"
          date="2026"
          status="In Progress"
        />
      </div>

      <div className='w-full max-w-305 mx-auto items-center justify-center px-12 md:px-48 gap-12 mb-24'>
        <ProjectText subheader="Background">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend nulla sed urna gravida sodales. 
            Phasellus euismod pulvinar arcu, at eleifend massa tincidunt at. Curabitur leo augue, feugiat ac enim sit amet, vehicula ultrices orci. 
            Suspendisse accumsan rutrum eleifend. Phasellus id leo pulvinar augue mollis tempus vel vitae risus. Phasellus vehicula elit ut sem pretium, nec imperdiet sem blandit. 
            Duis vel massa vel tortor rhoncus blandit.
            
            <br/><br/>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend nulla sed urna gravida sodales. 
            Phasellus euismod pulvinar arcu, at eleifend massa tincidunt at. Curabitur leo augue, feugiat ac enim sit amet, vehicula ultrices orci. 
            Suspendisse accumsan rutrum eleifend. Phasellus id leo pulvinar augue mollis tempus vel vitae risus. Phasellus vehicula elit ut sem pretium, nec imperdiet sem blandit. 
            Duis vel massa vel tortor rhoncus blandit.
          </p>
        </ProjectText>

        <ProjectText subheader='Preview Images'></ProjectText>
        <ImageGrid 
          images={[
            "/banners/BanaagDiwa25.jpg",
            "/banners/BanaagDiwa25.jpg",
            "/banners/BanaagDiwa25.jpg",
          ]}
        />
      </div>

      <Footer />
    </div>
  )
}

export default page
