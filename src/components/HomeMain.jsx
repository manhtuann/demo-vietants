import React from 'react';
import { Link } from 'react-router-dom';
import './HomeMain.css';

function HomeMain() {
  return (
    <div className='home-menu'>
        <video src="/videos/video-2.mp4" autoPlay loop muted/>
        <div className="home-top">
            <div className="wrap">
                <div className="textsm">Nghiên Cứu Nổi Bật</div>
                <div className="textmd">
                    <Link href="/" title='quản lý đổi mới sáng tạo trong doanh nghiệp' className='textmd-1'>Quản lý đổi mới sáng tạo trong doanh nghiệp</Link>
                </div>
                <div className="textxs">
                    <p>
                        "Trong môi trường kinh doanh biến động nhanh, linh hoạt và tính cạnh tranh cao, đổi mới sáng tạo được coi là chiến lược khác biệt hóa quan trọng để có được lợi thế của doanh nghiệp"
                    </p>
                </div>
                <div className="textmore">
                    <Link href="/" className='textmore-1'>Tìm hiểu thêm 
                    <i class='bx bxs-chevron-right-circle'></i>
                    </Link>
                </div>
            </div>
            <div className="wrap">
                <div className="row">
                    <div className="home-boxitem">
                        <Link to='/' className='home-item'>
                            <div className="pull-left">
                                Kinh Doanh Số
                                <i class='bx bxs-chevron-right-circle'></i>
                            </div>
                        </Link>
                        <Link to='/' className='home-item'>
                            <div className="pull-left">
                                Nhân Lực Số
                                <i class='bx bxs-chevron-right-circle'></i>
                            </div>
                        </Link>
                        <Link to='/' className='home-item'>
                            <div className="pull-left">
                                Công Nghệ Số
                                <i class='bx bxs-chevron-right-circle'></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeMain;