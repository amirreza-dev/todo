import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Fragment>
            <header>
                <Navbar bg='light' expand='md'>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />

                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/'>صفحه اصلی</Nav.Link>
                            <Nav.Link href='/about'>درباره سازنده</Nav.Link>
                        </Nav>
                        <Navbar.Brand
                            herf='https://www.amirreza.dev'
                            target='_blank'
                        >
                            Amirreza.dev
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </Fragment>
    );
};

export default Header;
