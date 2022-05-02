import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { 
  BsCollection, 
  BsPersonCircle, 
  BsCalculatorFill, 
  BsLightningCharge,
  BsBoxSeam,
  BsShop,
  BsMinecart,
  BsFillFilePdfFill
} from 'react-icons/bs'
import 'react-pro-sidebar/dist/css/styles.css';
import logo from '../../assets/logo_1.jpg'
import { Link } from 'react-router-dom';


const Sidebar = ({ toggled, handleToggleSidebar}) => {

  return (
    <ProSidebar
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '12px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <a href='#'>
            <img src={logo} alt='logo' style={{width: '70px'}} />
          </a>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<BsCollection />}>
            <Link to='/'>
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem icon={<BsPersonCircle />}>
            <Link to='/account'>
              Account
            </Link>
          </MenuItem>
          <MenuItem icon={<BsCalculatorFill />}>
            <Link to='/calculator'>
              Calculator
            </Link>
          </MenuItem>
          <MenuItem icon={<BsLightningCharge />}>
            <Link to='/swap'>
              Swap
            </Link>
          </MenuItem>
          <MenuItem icon={<BsBoxSeam />}>
            <Link to='/wrap'>
              Wrap
            </Link>
          </MenuItem>
          <MenuItem icon={<BsShop />}>
            <Link to='/shop'>
              Point Shop
            </Link>
            </MenuItem>
          <MenuItem icon={<BsMinecart />}>
            <Link to='/miner'>
              Miner
            </Link>
          </MenuItem>
          <MenuItem icon={<BsMinecart />}>
            <Link to='/dance'>
              Dance2Earn
            </Link>
          </MenuItem>
          <MenuItem icon={<BsMinecart />}>
            <Link to='/staking'>
              Staking Pool
            </Link>
            </MenuItem>
          <MenuItem icon={<BsMinecart />}>
            <Link to='/mint'>
              Mint NFT
            </Link>
            </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="#"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <BsFillFilePdfFill />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
             Docs
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
