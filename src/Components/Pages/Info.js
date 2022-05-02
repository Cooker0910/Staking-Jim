import { MdContentCopy } from 'react-icons/md'
import Tooltip from "react-simple-tooltip"

import {BsPatchQuestionFill} from 'react-icons/bs'

const Info = () => {

  return (
    <div className="container pt-3">
      <div className="px-sm-3 my-5">
        <div className="card bg-light  text-center p-4 custom1">
          <span className="fw-medium ms-1">$WEB3 Contract:    
            <a href="https://bscscan.com/address/0x64c5F47e530841684a4EeF408e9a4366585B88F9" target='_blank' className='contract-addr'>
            0x64c5F47e530841684a4EeF408e9a4366585B88F9
            </a>
            <button className="copy-btn"> 
              <MdContentCopy style={{
                width: "16px", 
                height: "16px",
                marginLeft: "10px"}} src="images/copy-solid.svg" alt="" />
            </button>
          </span>
        </div>
      </div>

      <div className="px-sm-3 my-5">
        <div className="card text-center p-4 custom1">
          <div className="row row-cols-1 row-cols-sm-3">
            <div className="col my-3">
              <div className="text-secondary mb-1" tooltip='sdfasdf'> Market Cap 
                <Tooltip content='Based on our actual circulating supply. Other chart may display differently.'>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="mcap" className="fw-bold" >$12,526,381</h4>
            </div>

            <div className="col my-3">
              <div className="text-secondary mb-1">$WEB3 Price</div>
              <h4 id="price" className="fw-bold">$283.953</h4>
            </div>

            <div className="col my-3">
              <div className="text-secondary mb-1"> Next Rebase 
                <Tooltip content='Rebase may get delayed due to blockchain traffic'>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="nextRebase" className="fw-bold">Every 3 Seconds</h4>
            </div>

            <div className="col my-3">
              <div className="text-secondary mb-1">Circulating Supply 
                <Tooltip content='Excludes burned / locked tokens'>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="cirSupply" className="fw-bold">44,114.195</h4>
            </div>

            <div className="col my-3">
              <div className="text-secondary mb-1">Correlation 
                <Tooltip content='MCAP / Liquidity More % makes healthy stable project'>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="backedLiq" className="fw-bold">16%</h4>
            </div>

            <div className="col my-3">
              <div className="text-secondary mb-1">Burned Supply</div>
              <h4 id="burned" className="fw-bold">39,538.066</h4>
            </div>

            <div className="col my-3">
              <div className="text-secondary mb-1">Circuit Breaker
                <Tooltip content='If total of 1% price drop happens in 1h, buy tax 10% / sell tax 25% is applied'>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="cb" className="fw-bold">ON for 12m 45s</h4>
            </div>

            <div className="col my-3">
              <div className="text-secondary mb-1">Buy Tax
                <Tooltip content='after circuit breaker duration, buy tax 14% / sell tax 16% is applied'>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="buyTax" className="fw-bold">10%</h4>
            </div>

            <div className="col my-3">
              <div className="text-secondary mb-1">Sell Tax
                <Tooltip content='after circuit breaker duration, buy tax 14% / sell tax 16% is applied'>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="sellTax" className="fw-bold">25%</h4>
            </div>
            
            
          </div>
        </div>
      </div>

      <div className="px-sm-3 my-5">
        <div id="jpS" className="card text-center p-4 custom1">
          <a href="#"><i id="jpShare" className="bi bi-share" data-toggle="modal" data-target="#jpModal"></i></a>
          <div className="row row-cols-1 row-cols-sm-3">
            <div className="col my-3">
              <div className="text-secondary mb-1">Jackpot Timer
                <Tooltip content='If no buy for 10 min, last buyer will get jackpot(buy should not be less than 0.1 BNB)'>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="jpTimer" className="fw-bold">4m 6s</h4>
            </div>

            <div className="col my-3">
              <div className="text-secondary mb-1">Jackpot Prize
                <Tooltip content=' if exceeds $100,000, big buyback will happen '>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="jpPrize" className="fw-bold">$4,348</h4>
            </div>

            <div className="col my-3">
              <div className="text-secondary mb-1">Last Buyer
                <Tooltip content='If no buy for 10 min, last buyer will get jackpot (buy should not be less than 0.1 BNB) last buyer gets 50% of total prize'>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="lastBuyer" className="fw-bold">0xa785..a49c</h4>
            </div>

          </div>
          <div className="row row-cols-1 row-cols-sm-3">
            <div className="col my-3">
              <div className="text-secondary mb-1">Daily Prize Timer 
              <Tooltip content='Winner will be chosen every 00:00:01 PM UTC'>
                <BsPatchQuestionFill />
              </Tooltip>
              </div>
              <h4 id="biggestTimer" className="fw-bold">22h 15m 23s</h4>
            </div>
            
            <div className="col my-3">
              <div className="text-secondary mb-1">Top Buyer Bought
                <Tooltip content='Total buys during this day Biggest buyer will get 5% of jackpot'>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="bigbuyAmount" className="fw-bold">0.7 BNB</h4>
            </div>

            <div className="col my-3">
              <div className="text-secondary mb-1">Biggest Buyer
                <Tooltip content='buys above 0.1 BNB is added to get biggest buyer'>
                  <BsPatchQuestionFill />
                </Tooltip>
              </div>
              <h4 id="biggestBuyer" className="fw-bold">0x6AC0..603</h4>
            </div>

          </div>
        </div>
      </div>
      
      <div className="px-sm-3 my-5">
        <div className="row">
          <div className="col-sm-6 mt-5">
            <div className="card bg-light p-4 custom1">
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-secondary">TBH Market Value
                  <Tooltip content='TBH: The Black Hole'>
                    <BsPatchQuestionFill />
                  </Tooltip>
                </span>
              </div>

              <h3 id="theBlackHole">$11,226,973</h3>
            </div>
          </div>

          <div className="col-sm-6 mt-5">
            <div className="card bg-light p-4 custom1">
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-secondary">TWT Market Value
                  <Tooltip content='TWT: The $WEB3 Treasury'>
                    <BsPatchQuestionFill />
                  </Tooltip>
                </span>
              </div>

              <h3 id="treasury">$182,138.334</h3>
            </div>
          </div>

          <div className="col-sm-6 mt-5">
            <div className="card bg-light p-4 custom1">
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-secondary">BNB Liquidity Value
                  <Tooltip content='Correlation 16.6%'>
                    <BsPatchQuestionFill />
                  </Tooltip>
                </span>
              </div>

              <h3 id="liquidity">$2,009,386</h3>
            </div>
          </div>

          <div className="col-sm-6 my-5">
            <div className="card bg-light p-4 custom1">
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-secondary">WTF Market Value
                  <Tooltip content=' WTF: $WEB3 Trust Fund $200K for Node (+10%/ month)'>
                    <BsPatchQuestionFill />
                  </Tooltip>
                </span>
              </div>

              <h3 id="trustFund">$300,321.193</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Info;