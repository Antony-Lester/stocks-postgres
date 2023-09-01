import {generateTickerNames} from '../../controllers/generate/generateTickerNames';
import populateTickerTimeFrameTableBase from '../../controllers/populate/populateTickerTimeFrameTableBase';
import connection from '../connection';

export default async function downloadTickerTimeFrame(
  tickerTimeFrameName: string,
  start: Date,
  end: Date
) {
  const validTimeframes = ['1Min', '5Min', '30Min', '2Hour', '1Day'];
  const validTickers = await generateTickerNames();
  const [, ticker, timeframe] = tickerTimeFrameName.split('_');

  if (!validTimeframes.includes(timeframe)) {
    console.warn('Invalid timeframe', tickerTimeFrameName);
    return undefined;
  }
  if (Array.isArray(validTickers) && !validTickers.includes(ticker)) {
    console.warn('Invalid ticker', tickerTimeFrameName);
    return undefined;
  }

  const options = {start, end, timeframe, limit: 10000};

  const data = connection.getBarsV2(ticker, options);
  for await (const bar of data) {
    const formattedBar = {
      timestamp: bar.Timestamp,
      open: bar.OpenPrice,
      high: bar.HighPrice,
      low: bar.LowPrice,
      close: bar.ClosePrice,
      vol: bar.Volume,
    };
    populateTickerTimeFrameTableBase(tickerTimeFrameName, formattedBar);
  }
  return true;
}
