const Header = () => {
  return (
    <div id="web3-header" className="w-100 position-fixed end-0 top-0" style={{height: "68px", zIndex: "100001"}}>
      <div className="d-flex pt-3 px-sm-3">
        <button type="button" id="showSidebar" className="d-lg-none btn fs-5"><i className="bi bi-list"></i></button>

        <div className="dropdown ms-auto">
          <button className="btn rounded-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false" data-bs-offset="0,14">
            <span className="fw-medium ms-1">WEB3</span> <span id="price" className="ms-1 small text-secondary">$282.948</span>
          </button>

          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">

            <li>
              <a className="dropdown-item" href="https://poocoin.app/tokens/0x333fd139caef6aa31056cc905987b77b1044d259">Chart</a>
            </li>
          </ul>
        </div>

        <button id="connect" type="button" className="btn rounded-1 ms-3">
          Connect Wallet
        </button>
      </div>
    </div>
  )
}

export default Header;