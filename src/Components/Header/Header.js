const Header = () => {
  return (
    <div id="web3-header" class="w-100 position-fixed end-0 top-0" style="height: 68px; z-index: 100001;">
      <div class="d-flex pt-3 px-sm-3">
        <button type="button" id="showSidebar" class="d-lg-none btn fs-5"><i class="bi bi-list"></i></button>

        <div class="dropdown ms-auto">
          <button class="btn rounded-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false" data-bs-offset="0,14">
            <span class="fw-medium ms-1">WEB3</span> <span id="price" class="ms-1 small text-secondary">$282.948</span>
          </button>

          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">

            <li>
              <a class="dropdown-item" href="https://poocoin.app/tokens/0x333fd139caef6aa31056cc905987b77b1044d259">Chart</a>
            </li>
          </ul>
        </div>

        <button id="connect" type="button" class="btn rounded-1 ms-3">
          Connect Wallet
        </button>
      </div>
    </div>
  )
}

export default Header;