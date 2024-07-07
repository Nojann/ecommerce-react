import React from 'react';
import './index.css';
import logo from './assets/logo.svg'
import cart from './assets/cart.svg'
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );

}

const Navbar: React.FC = () => {
  return (
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f2f0] px-10 py-3">
        <div className="flex items-center gap-4 text-[#181411]">
          <div className="size-8">
          <img src={logo} alt="Logo" />
          </div>
          <h2 className="text-[#181411] text-lg font-bold leading-tight tracking-[-0.015em]">Click & Croc</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-[#181411] text-sm font-medium leading-normal" href="/home">Accueil</a>
            <a className="text-[#181411] text-sm font-medium leading-normal" href="/favorites">Favoris</a>
            <a className="text-[#181411] text-sm font-medium leading-normal" href="#">A propos</a>
            <a className="text-[#181411] text-sm font-medium leading-normal" href="#">Contact</a>
          </div>
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f4f2f0] text-[#181411] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          >
            <div className="text-[#181411]" data-icon="ShoppingCart" data-size="20px" data-weight="regular">
              <a className="text-[#181411] text-sm font-medium leading-normal" href="/orders">
                <img src={cart} alt="Cart" />
              </a>
            </div>
          </button>
        </div>

      </header>
  );
};

export default Layout;
