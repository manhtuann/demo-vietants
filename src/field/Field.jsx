import React from 'react'
import Footer from '../footer/Footer'
import {Link} from 'react-router-dom'
import './field.css'

function Field() {
  return (
    <>
        <div className="main">
            <div className="wrap">
                <div className="row">
                    <div className="field-title">
                        <h3>Lĩnh vực</h3>
                        <p>Tìm hiểu cách thức khách hàng của chúng tôi số hóa thành công hoạt động kinh doanh và vận hành của doanh nghiệp khi đồng hành cùng FPT</p>
                    </div>
                    <div className="field-title-desc">
                        <ul className='branch'>
                            <li className="branch-item">
                                <i class='bx bxs-basket'></i>
                                <Link to='/' className='item-field'>    
                                    Bán lẻ & Tiêu dùng
                                </Link>
                            </li>
                            <li className="branch-item">
                                    <i class='bx bx-home-alt-2' ></i>
                                <Link to='/' className='item-field'>
                                    Bất động sản
                                </Link>
                            </li>
                            <li className="branch-item">
                                    <i class='bx bx-home-heart' ></i>
                                <Link to='/' className='item-field'>
                                    Chăm sóc sức khỏe
                                </Link>
                            </li>
                            <li className="branch-item">
                                <i class='bx bx-wifi' ></i>
                                <Link to='/' className='item-field'>
                                    Công nghệ thông tin
                                </Link>
                            </li>
                            <li className="branch-item">
                                <i class='bx bx-cog'></i>
                                <Link to='/' className='item-field'>
                                    công nghiệp sản xuất
                                </Link>
                            </li>
                            <li className="branch-item">
                                <i class='bx bxs-book-content' ></i>
                                <Link to='/' className='item-field'>
                                    Giáo dục & Đào tạo
                                </Link>
                            </li>
                            <li className="branch-item">
                                <i class='bx bx-navigation'></i>
                                <Link to='/' className='item-field'>
                                    Logistic & vận tải
                                </Link>
                            </li>
                            <li className="branch-item">
                                <i class='bx bx-water'></i>
                                <Link to='/' className='item-field'>
                                    Nông,lâm nghiệp, thủy sản
                                </Link>
                            </li>
                            <li className="branch-item">
                                <i class='bx bx-arch'></i>
                                <Link to='/' className='item-field'>
                                    Quy hoạch tỉnh & dịch vụ công
                                </Link>
                            </li>
                            <li className="branch-item">
                                <i class='bx bx-dollar-circle' ></i>
                                <Link to='/' className='item-field'>
                                    Tài chính & ngân hàng
                                </Link>
                            </li>
                        </ul>
                        <div className="title-blog">
                            <img src="/img/bog.jpg" alt="" />
                            <div className="title-blog-desc">
                                <div className="name">
                                    <h2>Didital Strategy</h2> 
                                </div>
                                <h3>eKYC, giải pháp thu hút khách hàng online trong ngành tài chính ngân hàng</h3>
                                <p>Giải pháp eKYC (electronic Know Your Customer) mở ra một thị trường vô cùng tiềm năng. Theo báo cáo của FnF Research, thị trường eKYC toàn cầu ước tính đạt…</p>
                                <div className="textmore">
                                    <Link href="/" className='textmore-1'>Chi tiết
                                    <i class='bx bxs-chevron-right-circle'></i>
                                    </Link>
                                </div>
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


export default Field