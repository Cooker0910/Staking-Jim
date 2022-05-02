const Calculator = () => {

  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-xl-8 mx-auto">
          <div className="card bg-light p-3 p-sm-4 mt-5 custom1">
            <h5 className="fw-bold mb-0">Calculator</h5>
            <span className="small fw-semibold">Estimate your return</span>
            <span className="small fw-semibold">UNDER MAINTENANCE</span>

            <div className="row text-center row-cols-1 row-cols-sm-3">
              <div className="col mt-5">
                <h6 className="text-secondary mb-1">
                  WEB3 Price
                </h6>
                <h4 id="price" className="mb-0 fw-bold">
                  $0.000
                </h4>
              </div>
              <div className="col mt-5">
                <h6 className="text-secondary mb-1">
                  Your WEB3 Balance
                </h6>
                <h4 id="balance" className="mb-0 fw-bold">
                  0.000
                </h4>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-sm-6">
                <label for="amount" className="form-label fw-medium">WEB3 Amount</label>
                <div className="input-group  rounded-1 mb-5">
                  <input type="text" id="amount" className="form-control py-2 text-secondary custom2" aria-describedby="amount-addon" value="10" placeholder="Amount" />
                  <span id="setMaxToAmount" className="input-group-text custom2">MAX</span>
                </div>

                <label for="price" className="form-label fw-medium">WEB3 price at purchase ($)</label>
                <div className="input-group  rounded-1 mb-5">
                  <input type="text" id="curPrice" className="form-control py-2 text-secondary custom2" aria-describedby="price-addon" value="0" placeholder="Amount" />
                  <span id="setCurToCurPrice" className="input-group-text custom2">Current</span>
                </div>
              </div>

              <div className="col-sm-6">
                <label className="form-label fw-medium">Future WEB3 Amount <i className="bi bi-patch-question-fill" data-bs-toggle="tooltip" data-bs-html="true" title="
                  Total Supply increases 1440 per day<br/>
                  For event, currently 2880 per day<br/>
                  "></i>
                </label>
                <div className="input-group  rounded-1 mb-5">
                  <input type="text" id="futAmount" className="form-control py-2 text-secondary custom2" aria-describedby="apy-addon" value="10" placeholder="Amount" />
                </div>

                <label for="future-price" className="form-label fw-medium">Future WEB3 price ($) <i className="bi bi-patch-question-fill" data-bs-toggle="tooltip" data-bs-html="true" title="
                  This price happens automatically<br/>
                  when buy/sell amount is similar.<br/>
                  it may go up or down from that price depending on the buy/sell amount.
                  "></i>
                </label>
                <div className="input-group rounded-1 mb-5">
                  <input type="text" id="futPrice" className="form-control py-2  text-secondary custom2" aria-describedby="future-price-addon" value="0" placeholder="Amount" />
                  <span id="setCurToFutPrice" className="input-group-text custom2">Current</span>
                </div>
              </div>
            </div>

            <label for="days-slider" className="fw-medium"><span id="noOfDays">30</span> days</label>
            <input type="range" min="1" max="90" step="1" value="30" id="days-slider" className="mb-5" />

            <div className="row justify-centent-between text-secondary">
              <div className="col">
                Your initial investment
              </div>

              <div id="initInvest" className="col-auto">
                $0.00
              </div>
            </div>

            <div className="row justify-centent-between mt-4 text-secondary">
              <div className="mt-2 col">
                Future wealth
              </div>

              <div id="futWealth" className="mt-2 col-auto">
                $0.00
              </div>
            </div>

            <div className="row justify-centent-between mt-4 text-secondary">
              <div className="mt-2 col">
                WEB3 rewards
              </div>

              <div id="rewardsEsti" className="mt-2 col-auto">
                0.00 WEB3
              </div>
            </div>

            <div className="row justify-centent-between mt-4 text-secondary">
              <div className="mt-2 col">
                Potential return
              </div>

              <div id="potenReturn" className="mt-2 col-auto">
                $0.00
              </div>
            </div>

            <div className="row justify-centent-between mt-4 text-secondary">
              <div className="mt-2 col">
                Potential number of Lambos
              </div>

              <div id="spaceTravel" className="mt-2 col-auto">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator;