import React, { useEffect } from 'react';
import './HomeDetail.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

function HomeDetail() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className='home-overview'>
            <div className="wrap">
                <div className="row">
                    <div data-aos='fade-in' className="home-overviewCart">
                        Tổng Quan
                    </div>
                    <div data-aos='fade-in' className="home-overviewTitle">
                        <h2>Đẩy mạnh đổi mới</h2>
                        <h2>Tư vấn sáng tạo</h2>
                    </div>
                    <div className="home-overviewContent">
                        <div className="wrap">
                            <div className="row">
                                <div className="content">
                                    <div className="col-6 left">
                                        <div className="item-left item">
                                            <div data-aos='fade-up' className="sub-item">
                                                <div className="numb">01</div>
                                                <div className="desc">Kinh nghiệm thực tế trong lĩnh vực CNTT và chuyển đổi số</div>
                                            </div>
                                            <div data-aos='fade-up' className="sub-item">
                                                <div className="numb">02</div>
                                                <div className="desc">Phương pháp luận chuyển đổi số đã được kiểm chứng</div>
                                            </div>
                                            <div data-aos='fade-up' className="sub-item">
                                                <div className="numb">03</div>
                                                <div className="desc">Cách tiếp cận tổng thể để hiểu một cách toàn diện về doanh nghiệp</div>
                                            </div>
                                        </div>
                                        <div className="item-right item">
                                            <div data-aos='fade-up' className="sub-item">
                                                <div className="numb">04</div>
                                                <div className="desc">Các sáng kiến chuyển đổi số tập trung giải quyết các vấn đề cốt lõi và ưu tiên</div>
                                            </div>
                                            <div data-aos='fade-up' className="sub-item">
                                                <div className="numb">05</div>
                                                <div className="desc">Lộ trình chuyển đổi chi tiết với KPI và ngân sách</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 right">
                                        <div className="overviewBlog">
                                            <h3 className='title'>Về FPT Digital</h3>
                                            <div data-aos='fade-left' className="blog">
                                                <p className='blog-1'>FPT Digital mang tới những kết quả tiềm năng cho doanh nghiệp thông qua lộ trình chuyển đổi số phù hợp với các giải pháp hàng đầu.</p>
                                                <p className='blog-2'>
                                                    FPT Digital sử dụng mô hình hợp tác độc đáo khi làm việc với khách hàng, tại tất cả các cấp của tổ chức để cung cấp cho doanh nghiệp những giá trị kinh doanh thực tế và hữu hình.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="overviewBlog">
                                            <h3 className='title'>Nhiệm Vụ</h3>
                                            <div data-aos='fade-left' className="blog">
                                                <p className='blog-1'>FPT Digital chúng tôi đồng hành cùng khách hàng trong việc xác định các cơ hội số, khám phá các giá trị mới và tạo ra các mô hình kinh doanh mới, thông qua tận dụng những tiềm năng từ công nghệ.
                                                </p>
                                                <p className='blog-2'>
                                                    FPT Digital truyền động lực giúp doanh nghiệp khách hàng chủ động trong việc định hình tương lai và trở nên đột phá trên thị trường.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mores">
                                            <Link to='/about' className='more-1'>Tìm hiểu thêm
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

export default HomeDetail