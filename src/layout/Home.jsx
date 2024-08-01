import React from 'react'
import PreLoader from '../components/PreLoader';
import Header from '../components/Header';
import FirstFold from '../components/FirstFold';
import SecongFold from '../components/SecongFold';
import ThirdFold from '../components/ThirdFold';
import Prerequisites from '../components/Prerequisites';
import FourthFold from '../components/FourthFold';
import FifthFold from '../components/FifthFold';
import SixthFold from '../components/SixthFold';
import Certificate from '../components/Certificate';
import CourseCurriculum from '../components/CourseCurriculum';
import Faq from '../components/Faq';
import Sticky from '../components/Sticky';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import CourseFeature from '../components/CourseFeature';
import Star from '../components/star';

const Home = () => {
  return (
    <div>
        {/* <PreLoader /> */}
        <Header />
        <FirstFold />
      
   
        <section class="py-10 py-md-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-12">
                      <CourseFeature />
                        <SecongFold />
                        <ThirdFold />
                        <Prerequisites />
                        <FourthFold />
                        <FifthFold />
                        <SixthFold />
                        <CourseCurriculum />
                        <Certificate />
                        <Faq />
                    </div>
                    <Sticky />
                 </div>
            </div>  
                   
        </section>
        <Footer />
        <Whatsapp />
    </div>
  )
}

export default Home;