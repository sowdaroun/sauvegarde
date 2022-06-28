import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Tableau de bord',
        icon: <i className='bx bxs-dashboard'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Ajouter un admin',
        icon: <i className='bx bxs-user-plus'></i>,
        to: '/map2page',
        section: 'map2page'
    },
    {
        display: 'Medecins',
        icon: <i className='bx bxs-camera-plus'></i>,
        to: '/mapage',
        section: 'mapage'
    },
    {
        display: 'Patient',
        icon: <i className='bx bx-user'></i>,
        to: '/patient',
        section: 'patient'
    },
    {
        display: 'Hopitaux',
        icon: <i className='bx bx-heading'></i>,
        to: '/hopitaux',
        section: 'hopitaux'
    },

]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className='sidebar__men'>
            <img src="./logo192.png" alt="" />
        </div>
        <div className="sidebar__log">
            <h2>BONJOUR D Diallo <p>Heureux de vous revoir</p></h2>
        </div>

        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
        <div className='sidebar__connect'>
            <button>se deconnecter</button>
        </div>
    </div>;
};

export default Sidebar;
