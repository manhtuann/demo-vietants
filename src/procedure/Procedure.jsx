import React, {useState} from 'react';
import Footer from '../footer/Footer';
import './procedure.css'
import { imgData } from './imgData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

function Procedure({slides}) {
    const [current,setCurent] = useState(0);
    const lengths = slides.length;
    
    const nextSlide = () => {
        setCurent(current == lengths - 1 ? 0 : current+1)
    }
    const preSlide = () => {
        setCurent(current === 0 ? lengths-1 :current-1)
    }

    if(!Array.isArray(slides) || slides.length <=0){
        return null
    }
  return (
    <>
    <div className="main">
        <div className="wrap">
            <div className="row">
                <div className="field-title">
                    <p>FPT Digital Kaizen™ - Phương pháp luận chuyển đổi số</p>
                    <h3>Nắm bắt những cơ hội số </h3>
                    <h3>Kiến tạo những giá trị lớn</h3>
                </div> 
            </div>
        </div>
        <div className="procedure-main">
                    <div className="procedure-title">
                        FPT Digital Kaizen™ cùng doanh nghiệp định hình <p>tương lai</p>
                    </div>
                    <div className="procedure-title-img">
                        <div className="silder">
                        <FaArrowAltCircleLeft className='left-arrow' onClick={preSlide}/>
                        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
                            {imgData.map((slide,index) => {
                                return (
                                    <div className={index === current ? 'slider active' :'slider'} key={index}>
                                        {index === current && (<img src={slide.image} alt="work" />)}

                                    </div>
                                    )
                            })}
                            
                        </div>
                        <div className="wrap">
                            <div className="row">
                                <div className="img-desc">
                                    <div className='img-desc-1'>Phương pháp tiếp cận chắt lọc từ kinh nghiệm thực tế</div>
                                    <div className='img-desc-2'>Chúng tôi đã tận dụng những kinh nghiệm thực tiễn về chuyển đổi số để tạo ra phương pháp luận về chuyển đổi số FPT Digital Kaizen™. Với cách tiếp cận này, chúng tôi thấu hiểu nhu cầu, tầm nhìn và mục tiêu của doanh nghiệp để giúp doanh nghiệp từng bước chuyển đổi, xây dựng một lộ trình chuyển đổi số tổng thể và phù hợp nguồn lực.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
    <Footer />
    </>
  )
}

export default Procedure