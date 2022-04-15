import React, { useState,useEffect  } from 'react'
import {Link } from 'react-router-dom';
import './Navbar.css';
import './Base.css'

function Navbar() {
  const [scoll,setScoll] = useState(false);
  const [click,setClick] = useState(false);

  //handle search
  const [search,setSearch] =useState('');

  const [searchParam] = useState(['capital','name']);

  const handleSearch = () => {
    console.log('ảo vch');
  }


  const handleClick = () =>{
    setClick(!click)
  }
  const onScoll = () => {
    if(window.scrollY >= 80) {
      setScoll(true)
    }
    else {
      setScoll(false)
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScoll);
    return () => {
      window.removeEventListener("scroll", onScoll);
    };
  }, []);
  
  return (
    <>
        <nav className={scoll ? 'navbar active':'navbar'}>
            <div className="navbar-container">
                <Link to='/'  className='navbar-logo'>
                  <i class='bx bxl-vimeo'></i>
                  VietAnts
                </Link>
                <ul className='navbar-menu'>
                  <li className='menu-item'>
                    <Link className='item service'>Dịch vụ</Link>
                    <i class='bx bx-chevron-down down'></i>
                    <ul className='sub-menu-lv2 '>
                      <div className='wrap-menu'>
                        <li className='menu-item-lever2'>
                          <Link to='/' className='desc-menu'>Tư vấn chuyển đổi số doanh nghiệp</Link>
                          <ul className="sub-menu">
                            <li className='menu-item-lever3'>
                              <Link to='/' className='item-3'>vận hành xuất sắc</Link>
                            </li>
                            <li className='menu-item-lever3'>
                              <Link to='/' className='item-3'>Trải nghiệm khách hàng vượt trội</Link>
                            </li>
                            <li className='menu-item-lever3'>
                              <Link to='/' className='item-3'>mô hình kinh doanh đổi mới</Link>
                            </li>
                            <li className='menu-item-lever3'>
                              <Link to='/' className='item-3'>xây dựng đội ngũ nhân lực số</Link>
                            </li>
                            <li className='menu-item-lever3'>
                              <Link to='/' className='item-3'>kích hoạt năng lực công nghệ</Link>
                            </li> 
                          </ul>
                      </li>
                      <li className='menu-item-lever2 item-lv2'>
                        <Link to='/' className='desc-menu'>Tư vấn cho các tỉnh thành</Link>
                        <ul className="sub-menu">
                          <li className='menu-item-lever3'>
                            <Link to='/' className='item-3'>Tư vấn chuyển đổi số tỉnh thành</Link>
                          </li>
                          <li className='menu-item-lever3'>
                            <Link to='/' className='item-3'>Tư vấn quy hoạch phát triển kinh tế xã hội</Link>
                          </li> 
                        </ul>
                      </li>
                      </div>
                      
                    </ul>
                  </li>
                  <li className='menu-item'>
                    <Link to='/linh-vuc' className='item'>Lĩnh Vực</Link>
                  </li>
                  <li className='menu-item'>
                    <Link to='/phuong-phap' className='item'>Phương Pháp</Link>
                  </li>
                  <li className='menu-item'>
                    <Link to='/nghien-cuu' className='item'>Nghiên Cứu</Link>
                  </li>
                  <li className='menu-item'>
                    <Link to='/about' className='item'>Về Chúng Tôi</Link>
                  </li>
                  <li className='menu-item'>
                    <Link to='/contact' className='item'>Liên Hệ</Link>
                  </li>
                </ul>
                <ul className="navbar-search">
                  <li className="menu-item-1">
                    <Link to='/' className='item'>
                      <i class='bx bx-globe globe'></i>VIE
                      <i class='bx bx-chevron-down down'></i>
                    </Link>
                  </li>
                  
                    <li className="menu-item-1" onClick={handleClick}>
                      <Link to='/' className='item'>
                        <i class='bx bx-search search'></i>
                      </Link>
                    </li>
                  
                    <li className="menu-item-1">
                      <Link to='/' className='item'>
                      <i class='bx bx-menu menu' ></i>
                    </Link>
                    </li>   
                </ul>
                <div className={click ? 'search-click actives' : 'search-click'}>
                  <div className="close" onClick={handleClick}></div>
                  <form className='searchform' method='get'>
                    <input 
                      type="text"
                      className='fn-search' 
                      value={search} 
                      placeholder='Tìm kiếm...'
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className='btn-search' type='submit' onClick={handleSearch}></button>
                  </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar