import { NavLink } from "react-router-dom"

<div className="nav-item">
    <a href="#" className='nav-link'>home</a>
</div>

{/* pages  */ }
<div className="nav-item">
    <div className='nav-link'>page</div>
    <div className="nav-sub-item">
        {/* 1 */}
        <div className="nav-sub-menu">
            <div className="link">
                <span>sale page</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                </svg>
            </div>
            <div className="nav-sub-item-menu">
                <div className="nav-sub-item-list">
                    <a href="#">Version 1</a>
                    <a href="#">Version 2</a>
                </div>
            </div>
        </div>
        {/* 2 */}
        <div className="nav-sub-menu">
            <div className="link">
                <span>Vendor</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                </svg>
            </div>
            <div className="nav-sub-item-menu">
                <div className="nav-sub-item-list">
                    <a href="#">All Vendor</a>
                    <a href="#">Vendor store</a>
                </div>
            </div>
        </div>
        {/* 3 */}
        <div className="nav-sub-menu">
            <div className="link">
                <span>shop</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                </svg>
            </div>
            <div className="nav-sub-item-menu">
                <div className="nav-sub-item-list">
                    <a href="#">Search Prodect</a>
                    <a href="#">single Prodect</a>
                    <a href="#">Cart</a>
                    <a href="#">chackout</a>
                    <a href="#">alternative chackout</a>
                </div>
            </div>
        </div>
    </div>
</div>

{/* user Account */ }
<div className="nav-item">
    <div className='nav-link'>user account</div>
    <div className="nav-sub-item">

        {/* 1 */}
        <div className="nav-sub-menu">
            <div className="link">
                <span>Order</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                </svg>
            </div>
            <div className="nav-sub-item-menu">
                <div className="nav-sub-item-list">
                    <a href="#">Order list</a>
                    <a href="#">Order detaile</a>
                </div>
            </div>
        </div>

        {/* 2 */}
        <div className="nav-sub-menu">
            <div className="link">
                <span>profile</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                </svg>
            </div>
            <div className="nav-sub-item-menu">
                <div className="nav-sub-item-list">
                    <a href="#">view Profile</a>
                    <a href="#">edit Profile</a>
                </div>
            </div>
        </div>

        {/* 3 */}
        <div className="nav-sub-menu">
            <div className="link">
                <span>address</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                </svg>
            </div>
            <div className="nav-sub-item-menu">
                <div className="nav-sub-item-list">
                    <a href="#">Address list</a>
                    <a href="#">add Address </a>
                </div>
            </div>
        </div>

        {/* 4 */}
        <div className="nav-sub-menu">
            <div className="link">
                <span>Support tickets</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                </svg>
            </div>
            <div className="nav-sub-item-menu">
                <div className="nav-sub-item-list">
                    <a href="#">all tickets</a>
                    <a href="#">tickets detaile</a>
                </div>
            </div>
        </div>

        {/* 5 */}
        <div className="nav-sub-menu">
            <div className="link">
                <NavLink to='/Cart'>wishlist</NavLink>
            </div>
        </div>
    </div>
</div>

{/* user Account */ }

<div className="nav-item">
    <div className='nav-link'>Vendor Account</div>
    <div className="nav-sub-item">

        {/* 1 */}
        <div className="nav-sub-menu">
            <div className="link">
                <a href='#'>Dashbord</a>
            </div>
        </div>

        {/* 2 */}
        <div className="nav-sub-menu">
            <div className="link">
                <span>Prodect</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z" />
                </svg>
            </div>
            <div className="nav-sub-item-menu">
                <div className="nav-sub-item-list">
                    <a href="#">All Prodect</a>
                    <a href="#">add Prodect</a>
                    <a href="#">edit Prodect</a>
                </div>
            </div>
        </div>
    </div>
</div>

{/* Blog */ }
<div className="nav-item">
    <div className='nav-link'>Order</div>
    <div className="nav-sub-item">

        {/* 1 */}
        <div className="nav-sub-menu">
            <div className="link">
                <a href='#'>Order list</a>
            </div>
        </div>
        {/* 2 */}
        <div className="nav-sub-menu">
            <div className="link">
                <a href='#'>Order Detaile</a>
            </div>
        </div>
    </div>
</div>

{/* Track My Orders */ }
<div className="nav-item">
    <a href="#" className='nav-link'>Track My Orders</a>
</div>