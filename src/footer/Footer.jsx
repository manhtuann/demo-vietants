import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='wrap'>
        <div className="row">
            <div className="footer-container">
                <div className="footer-title">FPT Digital</div>
                <div className="footer-contact">
                    <div className="place">
                        <h3>HÀ NỘI - TRỤ SỞ CHÍNH</h3>
                        <p>FPT Tower, 10 Phạm Văn Bạch, P. Dịch Vọng, Q. Cầu Giấy, Hà Nội, Việt Nam</p>
                    </div>
                    <div className="place-detail">
                        <h3>Dịch vụ</h3>
                        <h3>Phương Pháp</h3>
                    </div>
                    <div className="place-detail">
                        <h3>Về chúng tôi</h3>
                        <h3>Tuyển dụng</h3>
                    </div>
                    <div></div>
                </div>
                <div className="footer-contact">
                    <div className="place">
                        <h3>TP. HỒ CHÍ MINH</h3>
                        <p>VCB Tower, 5 Công Trường Mê Linh, P. Bến Nghé, Q.1, TP. Hồ Chí Minh, Việt Nam</p>
                        <h2>Tel: 0374 845 721</h2>
                        <h2>Email: phungtuann01@gmail.com</h2>
                    </div>
                    <div className="place-detail">
                        <h3>Lĩnh vực </h3>
                        <h3>Nghiên Cứu</h3>
                    </div>
                    <div className="place-detail">
                        <h3>Tin tức </h3>
                        <h3>Liên hệ</h3>
                    </div>
                    <div className='icon-contact'>
            
                    </div>
                </div>
            </div>
            <div className="footer-boot ">
                © 2021 FPT Digital. All Rights Reserved.
            </div>

        </div>
    </div>
  )
}

export default Footer