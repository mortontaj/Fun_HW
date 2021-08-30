/// CHANGE TO YOUR KEY
/// lines 35 and 214

let find = document.getElementsByClassName("searchButton");
Array.from(find).forEach((search) =>
  search.addEventListener("click", tickerChoice)
);

/**
 * Sets the users chosen stock symbol
 */
function tickerChoice(event) {
  let stockSymbol = document.getElementById("stockId").value;
  if (stockSymbol == "") stockSymbol = "T";
  let security = event.target.innerHTML;
  document.getElementById("container1").innerText = "";
  document.getElementById("container2").innerText = "";
  //document.getElementsByClassName("InfoSee").innerText = "";
  //document.getElementById("Asset Profile").innerText = "";
  stockAnalysis(stockSymbol); //.then(stockInform);
  stockBackground(stockSymbol);
}

/**
 * Fetches information from tickerChoice
 * @param {String} stock attaches stocksymbol to the url
 * @returns data of tickerChoice
 */
async function stockAnalysis(stock) {
  const urlLink = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=`;
  const usStock = stock.toLocaleUpperCase();
  fetch(urlLink + usStock, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "x-rapidapi-key": "", /// <----- Change to your key
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const convert = data;
      //return convert;
      //if (convert !== null) {
      //console.log(convert);

      let container1 = document.getElementById("container1");
      let infoHolder = document.createElement("div");
      infoHolder.id = "infoHolder";

      let typeQuote = document.createElement("div");
      let quarterlyCash = document.createElement("div");
      let detailSummary = document.createElement("div");
      //   typeQuote.id = "typeQuote";
      //   quarterlyCash.id = "quarterlyCash";
      //   detailSummary.id = "detailSummary";

      // make HTML FILE container hold infoHolder
      // make infoHolder hold three boxes:
      // typeQuote, quarterlyCash, and detailSummary
      container1.appendChild(infoHolder);
      infoHolder.appendChild(typeQuote);
      infoHolder.appendChild(quarterlyCash);
      infoHolder.appendChild(detailSummary);
      console.log("test1");
      //Main title Company Overview
      //creates the inner texts from Quotetype:
      //shortName, longName, quoteType
      let equityInfo = document.createElement("div");
      //   equityInfo.id = "equityInfo";
      typeQuote.appendChild(equityInfo).innerHTML = `<h2>Company Overview</h2>`;
      const companyData =
        `<li> Short name: ` +
        data.quoteType.shortName +
        `</li>` +
        `<li> Long name: ` +
        data.quoteType.longName +
        `</li>` +
        `<li> Asset class: ` +
        data.quoteType.quoteType +
        `</li>` +
        `<li> Exchange: ` +
        data.quoteType.exchange +
        `</li>`;
      //Main title Quarterly Historical Net Income
      //creates the inner texts from CashStatementHistoryQuarterly:
      //forEach cashflowStament netIncome
      console.log("test1");
      let historicalcash = document.createElement("div");
      //   historicalcash.id = "historicalcash";
      quarterlyCash.appendChild(
        historicalcash
      ).innerHTML = `<h2>Quarterly Historical Net Income</h2>`;
      const cashData =
        `<li> Cashflow 1: ` +
        data.cashflowStatementHistoryQuarterly.cashflowStatements[0].netIncome
          .fmt +
        ` Most recent </li>` +
        `<li> Cashflow 2: ` +
        data.cashflowStatementHistoryQuarterly.cashflowStatements[1].netIncome
          .fmt +
        `</li>` +
        `<li> Cashflow 3: ` +
        data.cashflowStatementHistoryQuarterly.cashflowStatements[2].netIncome
          .fmt +
        `</li>` +
        `<li> Cashflow 4: ` +
        data.cashflowStatementHistoryQuarterly.cashflowStatements[3].netIncome
          .fmt +
        `</li>` +
        `<li> PayoutRatio: ` +
        data.summaryDetail.payoutRatio.fmt +
        `</li>` +
        `<li> ForwardPE: ` +
        data.summaryDetail.forwardPE.fmt +
        `</li>` +
        `<li> Current Quarter Estimate: ` +
        data.earnings.earningsChart.currentQuarterEstimate +
        `</li>`;

      //Main title Buy Sell
      //creates the inner texts from SummaryDetails:
      //ask.raw, bid.raw, dividendYield.fmt, dayHigh.raw, dayLow, bidSize.raw, askSize.raw\
      let buySell = document.createElement("div");
      buySell.id = "buySell";
      detailSummary.appendChild(buySell).innerHTML = `<h2>Market Info</h2>`;
      console.log("Test1");
      const marketData =
        `<li> Biding price: $` +
        data.summaryDetail.bid.raw +
        `</li>` +
        `<li> Asking price: $` +
        data.summaryDetail.ask.raw +
        `</li>` +
        `<li> Divdend yield: ` +
        data.summaryDetail.dividendYield.fmt +
        `</li>` +
        `<li> Day low: $` +
        data.summaryDetail.dayLow.raw +
        `</li>` +
        `<li> Day high: $` +
        data.summaryDetail.dayHigh.raw +
        `</li>` +
        `<li> Bid size (entering market): ` +
        data.summaryDetail.bidSize.raw +
        `</li>` +
        `<li> Ask size (exiting market): ` +
        data.summaryDetail.askSize.raw +
        `</li>` +
        `<li> Average Daily Volume: ` +
        data.summaryDetail.averageDailyVolume10Day.fmt +
        `</li>`;
      console.log("Test2");
      //assign buttons to display the company overview, quarterly historical net income, and market info data
      let equity_bttn = document.createElement("button");
      //   equity_bttn.className = "equity_button";
      equity_bttn.addEventListener("click", (event) =>
        explaination(event, companyData)
      );

      let cash_bttn = document.createElement("button");
      //   cash_bttn.className = "cash_bttn";
      cash_bttn.addEventListener("click", (event) =>
        explaination(event, cashData)
      );

      let market_bttn = document.createElement("button");
      //   market_bttn.className = "market_bttn";
      market_bttn.addEventListener("click", (event) =>
        explaination(event, marketData)
      );

      // make title buttons
      typeQuote.appendChild(
        equity_bttn
      ).innerHTML = `<a class="only">Click Here Only</a>`;
      quarterlyCash.appendChild(
        cash_bttn
      ).innerHTML = `<a class="only">Click Here Only</a>`;
      detailSummary.appendChild(
        market_bttn
      ).innerHTML = `<a class="only">Click Here Only</a>`;

      /**
       *
       * @param {Event} information the event of button click
       * @param {String} provide the info desired by  client
       */
      const explaination = (information, provide) => {
        let infoHolder = information.target.parentElement; //.parentElement;
        if (infoHolder.childElementCount == 1) {
          let infoSee = document.createElement("div");
          infoSee.id = "infosee";
          infoSee.innerHTML = provide;
          infoHolder.appendChild(infoSee);
        } else {
          infoHolder.removeChild(infoHolder.lastChild);
        }
      };
    })
    //}})
    .catch((error) => {
      console.error("err");
      //return 1;
    });
}

async function stockBackground(stock) {
  const urlLink2 = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=`;
  const usStock2 = stock.toLocaleUpperCase();
  fetch(urlLink2 + usStock2, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "x-rapidapi-key": "", /// <----- Change to your key
    },
  })
    .then((response) => response.json())
    .then((data2) => {
      console.log(data2);
      const convert2 = data2;
      //return convert2;
      //if (convert !== null) {
      console.log(convert2);

      const plot = document.getElementById("container2");
      plot.innerHTML = `<h2>Asset Profile</h2>`;
      const infoHolder2 = document.createElement("div");
      infoHolder2.innerHTML =
        `<b><li> Sector: ` +
        convert2.assetProfile.sector +
        `</li>` +
        `<li> Industy: ` +
        convert2.assetProfile.industry +
        `</li>` +
        `<li> Location: ` +
        convert2.assetProfile.city +
        `, ` +
        convert2.assetProfile.state +
        ` ` +
        convert2.assetProfile.zip +
        `</li>` +
        `<b><p id="company">` +
        convert2.assetProfile.longBusinessSummary +
        `</p></b>` +
        `<li>` +
        convert2.assetProfile.companyOfficers[0].title +
        `: ` +
        convert2.assetProfile.companyOfficers[0].name +
        `</li>` +
        `<li> Total Comp: $` +
        convert2.assetProfile.companyOfficers[0].totalPay.longFmt +
        `</li>` +
        `<li> MarketCap: $` +
        convert2.summaryDetail.marketCap.fmt +
        `</li>` +
        `<li> For more info: ` +
        convert2.assetProfile.website +
        `</li><b>`;
      plot.appendChild(infoHolder2);
    })
    .catch((error) => {
      console.error("err");
    });
}
