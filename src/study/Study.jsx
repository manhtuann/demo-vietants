import React from 'react'
import './study.css'
import {Link} from 'react-router-dom'
import Footer from '../footer/Footer';

function Study() {
  return (
    <>
        <div className="container-study">
            <div className="wrap">
                <div className="row">
                    <div className="field-title">
                        <h3>Nghiên cứu nổi bật</h3>
                        <p>Những dữ liệu chủ chốt, những xu hướng mới 
                        và những phân tích từ chuyên gia trong thời đại số</p>
                    </div>
                </div>
            </div>
            <div className="study-new">
                <div className="wrap">
                    <div className="row">
                        <div className="main-study">
                        <div className="study-new-title">
                            <div className='study-new-title_desc'>Nghiên Cứu Mới Nhất - Digital Strategy</div>
                            <h2>Sản xuất xanh qua công nghệ số</h2>
                            <p>Trước khi đề cập đến “Sản xuất xanh”, chúng ta có thể sẽ quen thuộc hơn với “sản xuất tinh gọn”, một phương pháp hiệu quả để loại bỏ lãng phí khỏi hoạt động sản xuất và cải thiện tài chính của công ty.</p>
                            <div className="mores">
                                <Link href="/"  className='more-1'>Chi tiết
                                </Link>
                            </div>
                        </div>
                        <div className="study-new-img">
                            <img src="/img/study.jpg" alt="nghiên cứu" />
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

export default Study