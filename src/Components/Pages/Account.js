const Account = () => {
  return (
    <div className="container pt-3">
      <div className="col-xl-8 mx-auto">
        <div id="totalSection" className="card p-4 mt-5" style={{backgroundImage: "linear-gradient(160deg,#424750,#202326)"}}>
          <span className="text-secondary">
            Total Earned
            <a href="#"><i id="totalShare" className="bi bi-share" data-toggle="modal" data-target="#jpModal"></i></a>
          </span>
          <h1 id="totalEarnedInUsd" className="text-primary fw-bold my-2">$0.000</h1>
          <span id="totalEarned" className="text-secondary">0.000 $WEB3 (+0.000%)</span>
        </div>

        <div >
          <div className="d-flex flex-sm-row flex-column justify-content-between">
            <div className="col-sm-5 card bg-light p-4 mt-5 custom1">
              <div className="p-4">
                <span className="text-secondary">Your Total Supply %:</span>
                <h4 className="fw-bold my-2" id="percentTotalSupply"></h4>
              </div>
            </div>
            <div className="col-sm-5 card bg-light p-4 mt-5 custom1">
              <div >
                <span className="text-secondary">Your Balance</span>
                <h4 id="balanceInUsd" className="fw-bold my-2">$0.000</h4>
                <span id="balance" className="text-secondary">0.000</span><span> $WEB3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="d-flex justify-content-between flex-sm-row flex-column">
            <div className="col-sm-5 card bg-light p-4 mt-5 custom1">
              <div>
                <span className="text-secondary">
                  Other Balances <br/>
                </span>
                <span id="wBalance" className="text-secondary">0.000</span><span> $wWEB3<br/></span>
                <span id="lockedAmount" className="text-secondary">0.000</span><span> $wWEB3 (</span>
                <span id="lockedDuration" className="text-secondary">0</span><span> days lock)<br/></span>
                <span id="pBalance" className="text-secondary">0.000</span><span> $pWEB3<br/></span>
                <span id="xBalance" className="text-secondary">0.000</span><span> $xWEB3<br/></span>
              </div>
            </div>

            <div id="dailySection" className="col-sm-5 card bg-light p-4 mt-5" style={{backgroundImage: "linear-gradient(160deg,#424750,#202326)"}}>
              <div >
                <span className="text-secondary">
                  Your Earnings / Daily 
                  <i className="bi bi-patch-question-fill" data-bs-toggle="tooltip" data-bs-html="true" title="
                  excluding wWEB3<br/>
                  "></i>
                  <a href="#"><i id="dailyShare" className="bi bi-share" data-toggle="modal" data-target="#jpModal"></i></a>
                </span>

                <h4 id="nextDailyRewardInUsd" className="fw-bold my-2">$0.000</h4>
                <span id="nextDailyReward" className="text-secondary">0.000 $WEB3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-light  p-3 p-sm-4 mt-5 custom1">
          <div className="row justify-centent-between">
            <div className="col">
              Current $WEB3 Price
            </div>

            <div id="price" className="col-auto text-primary">
              $0.000
            </div>
          </div>

          <div className="row justify-centent-between mt-4">
            <div className="mt-2 col">
              Next 1 hour Reward Amount
            </div>

            <div id="nexthourReward" className="mt-2 col-auto">
              0.000 $WEB3
            </div>
          </div>

          <div className="row justify-centent-between mt-4">
            <div className="mt-2 col">
              Next 1 hour Reward Amount USD
            </div>

            <div id="nexthourRewardInUsd" className="mt-2 col-auto text-primary">
              $0.000
            </div>
          </div>

          <div className="row justify-centent-between mt-4">
            <div className="mt-2 col">
              Next 1 hour Reward Yield
            </div>

            <div className="mt-2 col-auto">
              0.094844%
            </div>
          </div>

          <div className="row justify-centent-between mt-4">
            <div className="mt-2 col">
              ROI (30-Day Rate)
            </div>

            <div id="nextMonthReward" className="mt-2 col-auto text-primary">
              0.000 $WEB3
            </div>
          </div>

          <div className="row justify-centent-between mt-4">
            <div className="mt-2 col">
              ROI (30-Day Rate) USD
            </div>

            <div id="nextMonthRewardInUsd" className="mt-2 col-auto text-primary">
              $0.000
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account;