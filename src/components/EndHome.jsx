import React from 'react';
import './EndHome.css';


function EndHome() {
  return (
    <div className='wrap'>
        <div className="row">
            <div className="wrap-item">
                <div className="item-end">
                    <div className="img-end">
                        <img src="/img/end3.svg" alt="" />
                    </div>
                    <div className="title-end">
                        <h3>Nghĩ lớn</h3>
                        <p>Định hướng chiến lược & lập kế hoạch đột phá nhưng đủ khả thi trong 3-5 năm</p>
                    </div>
                </div>
                <div className="item-end">
                    <div className="img-end">
                        <img src="/img/end2.svg" alt="" />
                    </div>
                    <div className="title-end">
                        <h3>Khởi động thông minh</h3>
                        <p>Thành công ngắn hạn với các dự án có tính khả thi cao, giải quyết các vấn đề ưu tiên nhất</p>
                    </div>
                </div>
                <div className="item-end">
                    <div className="img-end">
                        <img src="/img/end1.svg" alt="" />
                    </div>
                    <div className="title-end">
                        <h3>Mở rộng nhanh chóng</h3>
                        <p>Mở rộng quy mô triển khai một cách nhanh chóng trong toàn bộ tổ chức</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EndHome