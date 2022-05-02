import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { FaHeart, FaBars } from 'react-icons/fa';

const Dashboard = ({ handleToggleSidebar }) => {
  return (
    <>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <div id="web3-header" className="w-50 position-fixed end-0 top-0" style={{height: "68px", zIndex: "99", color: "white"}}>
          <div className="d-flex pt-3 px-sm-3">
            <Nav variant="pills" className='ms-auto'>
              <NavDropdown title="Web3" id="nav-dropdown">
                <NavDropdown.Item>Chart</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link eventKey="1" href="#">
                  Connect Wallet
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Dashboard;