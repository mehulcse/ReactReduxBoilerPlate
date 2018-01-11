import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => (
    <nav className="navbar fixed-top navbar-light bg-faded no-offset box-shadow">
        <header className="col-lg-12 col-md-12 col-sm-12 app-header">
            <div className="row topbar-left">
                <div className="col-lg-4 col-md-4 col-sm-4 d-none d-lg-block">
                    <Link className="navbar-brand logo no-offset" to="/">
                        {/*<img src={require()} alt="" />*/}
                    </Link>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 d-md-block d-lg-none">
                    <Link className="navbar-brand logo logo-small no-offset" to="/">
                        {/*<img src={require('')} alt="" />*/}
                    </Link>
                </div>

                <div className="col-sm-4 col-md-5 col-lg-3 py-4">
                    <div className="position-relative">
                        <input
                            className="form-control border-width rounded-2 py-2 offset-left"
                            type="search"
                            placeholder="Search"
                            id="search-input"
                        />
                        <span className="icon icon-search input-search-icon" />
                    </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-5 topbar-right py-2">
                    <div className="row justify-content-end">
                        <div className="col-sm-2 col-md-1 col-lg-1 py-3 mx-md-2 content-center">
                            <div className="icon-wrapper icon-header icon-add-1 action-icon-lg tertiary-color" />
                        </div>
                        <div className="col-sm-2 col-md-1 col-lg-1 py-3 mx-md-2 content-center">
                            <div className="icon-wrapper icon-header icon-group " />
                        </div>
                        <div className="col-sm-2 col-md-1 col-lg-1 py-3 mx-md-2 content-center">
                            <div className="icon-wrapper icon-header icon-notification " />
                            <span className="notification-count">5</span>
                        </div>
                        <div className="avatar-wrapper col-auto">
                            {/*<img className="avatar" src={require('')} alt="Avatar" />*/}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </nav>
);

export default Header;
