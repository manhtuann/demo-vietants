import React from 'react';
import './Workforce.css';

function Workforce() {
  return (
    <div className='home-force'>
        <div className="home-force-post">
            <div className="home-force-post--wrap">
                <div className="row">
                    <div className="home-force-post--title">
                        Tương lai doanh nghiệp
                    </div>
                    <h2 className='home-force-post--title title-1'>Tập trung vào kết quả kinh doanh số</h2>
                    <div className="home-force-post--desc">
                        Với phương pháp tiếp cận tập trung vào kết quả kinh doanh, FPT Digital hướng đến cung cấp những giá trị hữu hình cho  doanh nghiệp, không chỉ tập trung giải quyết các vấn đề ngắn hạn mà còn hướng tới sự bền vững dài hạn.
                    </div>
                    <div className="home-force-post--wrap col-sm-12">
                        <div className="home-force-post--wrapItem wrapItemLeft">
                            <div className="home-force-post--item item-1">
                                <div className="f-icon">
                                    <img src="/img/logo-1.svg" alt="" />
                                </div>
                                <h3 className='f-title'>
                                    <div>Vận hành </div>
                                    <div>xuất sắc</div>
                                </h3>
                                <div className="f-desc">Tối ưu và tự động hóa quy trình, tăng hiệu quả và giảm chi phí, gia tăng mức độ cạnh tranh</div>
                            </div>
                            <div className="home-force-post--item item-3">
                                <div className="f-icon">
                                    <img src="/img/logo-2.svg" alt="" />
                                </div>
                                <h3 className='f-title'>Mô hình kinh doanh đổi mới</h3>
                                <div className="f-desc">Tạo dựng hướng đi kinh doanh mới, xây dựng nền tảng số, thiết kế các sản phẩm số mới</div>
                            </div>
                        </div>
                        <div className="home-force-post--wrapItem wrapItemRight">
                        <div className="home-force-post--item item-2">
                                <div className="f-icon">
                                    <img src="/img/logo-3.svg" alt="" />
                                </div>
                                <h3 className='f-title'>Trải nghiệm khách hàng</h3>
                                <div className="f-desc">Tương tác và gắn kết mối quan hệ với khách hàng, xây dựng trải nghiệm tốt và xuyên suốt</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-force-img">
            <img src="/img/img-2.jpg" alt="tổng hợp đầu tư" />
        </div>
    </div>
  )
}

export default Workforce