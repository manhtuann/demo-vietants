import React, { useEffect, useRef, useState } from 'react';
import './about.css';
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';
import Img from './Img';

function About() {
    const [width,setWidth] = useState(0);
    const conurousel = useRef();

    useEffect(()=>{
        setWidth(conurousel.current.scrollWidth - conurousel.current.offsetWidth)
    },[]) 
    return (
    <>
        <div className="container-about">
            <div className="wrap">
                <div className="row">
                    <div className="field-title">
                        <h2>Về VietAnts</h2>
                        <h3>Công ty tư vấn chuyển đổi số</h3>
                        <p>FPT Digital cung cấp dịch vụ tư vấn lộ trình chuyển đổi số, giúp doanh nghiệp từng bước xây dựng nguồn lực, ứng dụng công nghệ để Chuyển đổi số và giải quyết các bài toán doanh nghiệp cụ thể, gắn liền với định hướng phát triển doanh nghiệp, hướng tới sự tối ưu và cải tiến, tạo ra những giá trị mới.</p>
                    </div>
                </div>
            </div>
            <div className="about-desc">
                <img src="/img/about-top.png" alt="company" />
                <div className="wrap">
                    <div className="row">
                    <div className="field-title about-col">
                        <h2 className='about-title'>Các thành viên trong đội ngũ tư vấn của FPT Digital, ở mỗi vị trí, đều là những chuyên gia tư vấn cấp cao chuyên ngành, sở hữu nhiều năm kinh nghiệm chuyên sâu về công nghệ trong các ngành nghề.</h2>
                        <p>Các chuyên gia tư vấn Chuyển đổi số đã có bề dày kinh nghiệm thực tiễn thực hiện thành công nhiều dự án Chuyển đổi số cho các tập đoàn, doanh nghiệp hàng đầu trong và ngoài nước.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container-about--num">
                <div className="wrap">
                    <div className="row">
                        <div className="num">
                            <div className="num-item">
                            <div className='count'></div>
                                <p>Năm kinh nghiệm, kinh doanh trong các lĩnh vực Viễn thông, Truyền thông, Công nghệ thông tin, Bán lẻ, Giáo dục, Tài chính</p>
                            </div>
                            <div className="num-item">
                                
                                <div className='count'></div>
                                <p>Nhân viên làm việc trong lĩnh vực tư vấn và triển khai Công nghệ</p>
                            </div>
                            <div className="num-item">
                                <div className='count'></div>
                                <p>Năm kinh nghiệm trung bình tư vấn về công nghệ và chuyển đổi số của mỗi chuyên gia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animation">
                <h1>Các chuyên gia</h1>
                <motion.div ref={conurousel} className='img-moution'>
                    <motion.div drag='x' dragConstraints={{right:0 , left: -width}} className='img-moution--item'>
                        {Img.map((image,index) => {
                            return (
                                <motion.div className='img-item' key={index} >
                                    <img src={image.image} alt="" />
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>

        </div>
        <Footer />
        
    </>
  )
}

export default About