import './sidebar.css';

const Sidebar = () => {
  return (
    <div id="sidebarContainer" className="col-auto" style={{zIndex: "1000002"}}>
      <div id="sidebar" className="d-flex flex-column align-items-center pe-2 py-4">
        <a id="logo" href="#" className="text-decoration-none mb-5 w-100 d-flex align-items-center ps-3 pe-2">
          <img src="https://uploads-ssl.webflow.com/61f079fe9c0e84c389f618a4/61f51681bbd0e1be3f0538bd_cube.svg" alt="logo-icon" className="col-2" />
          <img src="https://raw.githubusercontent.com/TheWeb3Project/TheWeb3ProjectAssets/main/imgs/logotext.png" alt="TheWeb3Project" className="col ms-4" style={{width: "100%"}} />
        </a>

        <ul id="sidebar-nav" className="list-unstyled p-0 py-5">
          <li className="mb-4 py-2 px-5 rounded-1 active-neumorphism">
            <a href="index.html" className="text-decoration-none text-reset d-flex align-items-center neontext">
              <span className="fs-5"><i className="bi bi-collection"></i></span>
              <span className="ms-3">Dashboard</span>
            </a>
          </li>

          <li className="mb-4 py-2 px-5 rounded-1">
            <a href="account.html" className="text-decoration-none text-reset d-flex align-items-center neontext">
              <span className="fs-5"><i className="bi bi-person-circle"></i></span>
              <span className="ms-3">Account</span>
            </a>
          </li>

          <li className="mb-4 py-2 px-5 rounded-1">
            <a href="calculator.html" className="text-decoration-none text-reset d-flex align-items-center neontext">
              <span className="fs-5"><i className="bi bi-calculator-fill"></i></span>
              <span className="ms-3">Calculator</span>
            </a>
          </li>

          <li className="mb-4 py-2 px-5 rounded-1">
            <a href="swap.html" className="text-decoration-none text-reset d-flex align-items-center neontext">
              <span className="fs-5"><i className="bi bi-lightning-charge"></i></span>
              <span className="ms-3">Swap</span>
            </a>
          </li>

          <li className="mb-4 py-2 px-5 rounded-1">
            <a href="wrap.html" className="text-decoration-none text-reset d-flex align-items-center neontext">
              <span className="fs-5"><i className="bi bi-box-seam"></i></span>
              <span className="ms-3">Wrap</span>
            </a>
          </li>

          <li className="mb-4 py-2 px-5 rounded-1">
            <a href="web-pointshop.html" className="text-decoration-none text-reset d-flex align-items-center neontext">
              <span className="fs-5"><i className="bi bi-shop"></i></span>
              <span className="ms-3">Point Shop</span>
            </a>
          </li>

          <li className="mb-4 py-2 px-5 rounded-1">
            <a href="miner.html" className="text-decoration-none text-reset d-flex align-items-center neontext">
              <span className="fs-5"><i className="bi bi-minecart-loaded"></i></span>
              <span className="ms-3">Miner</span>
            </a>
          </li>
          <li className="mb-4 py-2 px-5 rounded-1">
            <a href="miner.html" className="text-decoration-none text-reset d-flex align-items-center neontext">
              <span className="fs-5"><i className="bi bi-minecart-loaded"></i></span>
              <span className="ms-3">Dance2Earn</span>
            </a>
          </li>
          <li className="mb-4 py-2 px-5 rounded-1">
            <a href="miner.html" className="text-decoration-none text-reset d-flex align-items-center neontext">
              <span className="fs-5"><i className="bi bi-minecart-loaded"></i></span>
              <span className="ms-3">Staking Pool</span>
            </a>
          </li>
          <li className="mb-4 py-2 px-5 rounded-1">
            <a href="miner.html" className="text-decoration-none text-reset d-flex align-items-center neontext">
              <span className="fs-5"><i className="bi bi-minecart-loaded"></i></span>
              <span className="ms-3">Mint NFT</span>
            </a>
          </li>

          <li className="mb-4 py-2 px-5 rounded-1">
            <a href="https://docs.theweb3project.com" className="text-decoration-none text-reset d-flex align-items-center neontext">
              <span className="fs-5"><i className="bi bi-journal-text"></i></span>
              <span className="ms-3">Docs</span>
            </a>
          </li>
        </ul>

        <div className="d-flex justify-content-around w-100 px-4">
          <a href="https://t.me/TheWeb3Project" className="text-decoration-none text-reset fs-5 social-icon-hover">
            <i className="bi bi-send-fill"></i>
          </a>

          <a href="https://twitter.com/TheWeb3Project" className="text-decoration-none text-reset fs-5 social-icon-hover">
            <i className="bi bi-twitter"></i>
          </a>

          <a href="https://discord.gg/crQkCE7Mn6" className="text-decoration-none text-reset fs-5 social-icon-hover">
            <i className="bi bi-discord"></i>
          </a>

          <a href="https://www.youtube.com/c/TheWeb3Project" className="text-decoration-none text-reset fs-5 social-icon-hover">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;