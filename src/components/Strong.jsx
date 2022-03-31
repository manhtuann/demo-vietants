import React from 'react';
import {Link} from 'react-router-dom';
import './Strong.css';

function Strong() {
  return (
    <div className='home-overview'>
        <div className="wrap">
            <div className="row">
                <div className="home-overviewCart">
                    Cung Cấp
                </div>
                <div data-aos='fade-in' className="home-overviewTitle">
                    <h2 className='home-title-1'>Dịch vụ tư vấn</h2>
                    <h2 className='home-title'>Chúng tôi cung cấp các dịch vụ tư vấn tùy chỉnh dựa trên chiến lược và định hướng phát triển, các đặc điểm và thế mạnh sẵn có của khách hàng, để phát triển và tăng trưởng, dưới dạng một lộ trình triển khai toàn diện và chi tiết.</h2>
                </div>
                <div className="home-overviewContent home-content">
                    <div className="wrap">
                    <div className="row">
                        <div className="content">
                        <div className="col-3 left">
                            <div className="item-left item">
                                <div className="sub-item sub-item-strong">
                                    <div className="numb">01</div>
                                    <div className="desc">Tư vấn chuyển đổi số doanh nghiệp</div>
                                </div>
                                <div className="sub-item">
                                    <div className="numb">02</div>
                                    <div className="desc">Tư vấn cho các tỉnh thành</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 right">
                            <div className="overviewBlog">
                                <ul className="detail-blog">
                                    <li data-aos='fade-in'><i class='bx bx-check'></i>
                                        Vận hành xuất sắc</li>
                                    <li data-aos='fade-left'> <i class='bx bx-check'></i>
                                        Trải nghiệm khách hàng vượt trội</li>
                                    <li data-aos='fade-right'> <i class='bx bx-check'></i>
                                        Mô hình kinh doanh đổi mới</li>
                                    <li data-aos='fade-in'> <i class='bx bx-check'></i>
                                        Kính hoạt năng lượng công nghệ</li>
                                    <li data-aos='fade-left'> <i class='bx bx-check'></i>
                                        Xây dựng đội ngũ nhân lực số</li>
                                    <li data-aos='fade-right'> <i class='bx bx-check'></i>
                                        Tư vấn chuyển đổi số tỉnh thành</li>
                                    <li data-aos='fade-in'> <i class='bx bx-check'></i>
                                        Tư vấn quy hoạch phát triển kinh tế xã hội</li>

                                </ul>
                            </div>
                            <div className="mores">
                                <Link href="/" className='more-1'>Liên Hệ Với Chúng Tôi
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Strong