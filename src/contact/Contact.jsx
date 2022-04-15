import React from 'react';
import './contact.css';
import Footer from '../footer/Footer'

function Contact() {
    const handleClick = () => {
        alert('chúng tôi đã nhận thông tin');
    }
  return (
    <div className='container-contact'>
                <div className="contact-title">
                    <div className="contact-wrap">
                        <div className="contact-title--left">
                            <div className="address">
                                <div className="address-desc">
                                    <h3>HÀ NỘI - TRỤ SỞ CHÍNH</h3>
                                    <p>FPT Tower, 10 Phạm Văn Bạch, P. Dịch Vọng, Q. Cầu Giấy, Hà Nội, Việt Nam</p>
                                </div>
                            </div>
                            <div className="address">
                                <div className="address-desc">
                                    <h3>TP. HỒ CHÍ MINH</h3>
                                    <p>VCB Tower, 5 Công Trường Mê Linh, P. Bến Nghé, Q.1, TP. Hồ Chí Minh, Việt Nam</p>
                                    <div className="tel">
                                    <a>Tel: 0374 845 721</a>
                                    </div>
                                    <div className="mail">
                                    <a>Email: phungtuann01@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-conect">
                                <h1>Kết nối với VietAns</h1>
                                <div className="contact-icon">
                                <i class='bx bxl-linkedin-square'></i>
                                <i class='bx bxl-facebook-square' ></i>
                                <i class='bx bxl-instagram-alt'></i>
                                <i class='bx bxl-youtube'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-title--right">
                        <div className="contact-title--desc">
                            Vui lòng điền vào mẫu đơn bên dưới để nhận thêm thông tin về các dịch vụ cung cấp của VietAns
                        </div>
                        <div className="contact-title--name">
                            <div className="form-name">
                                <label>Tên *</label>
                                <input type="text"/>
                            </div>
                            <div className="form-name">
                                <label>Họ *</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="contact-title--name">
                            <div className="form-name">
                                <label>Email doanh nghiệp *</label>
                                <input type="text"/>
                            </div>
                            <div className="form-name">
                                <label>Doanh nghiệp *</label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="form-checked">
                            <input type="checkbox" name="" id="" />
                            <span>
                            Nhấn đăng ký theo dõi để cập nhật các thông tin liên quan về các sản phẩm dịch vụ và sự kiện của FPT Digital, bạn có thể hủy đăng ký theo dõi bất cứ lúc nào.
                            </span>
                        </div>
                        <div className="contact-title--next">
                            <div className="form-name full">
                                <label>Câu hỏi/ Thắc mắc cần giải đáp</label>
                                <input type="text"/>
                            </div>  
                            <div className="form-name full">
                                <label>Chủ Đề *</label>
                                <input type="text"/>
                            </div> 
                            <div className="form-name full ">
                                <label>Chi tiết cụ thể về câu hỏi/thắc mắc cần giải đáp *</label>
                                <input className='height-big' type="text"/>
                            </div> 
                        </div>
                        <div className="btn">
                            <button className='btn-but' onClick={handleClick}>Gửi yêu cầu</button>
                        </div>
                    </div>
                    
                </div>      
        
        
        
        
    <Footer />
    </div>
  )
}

export default Contact