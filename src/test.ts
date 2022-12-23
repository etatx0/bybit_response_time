import { TickerSymbol } from "./TickerSymbol";
import fetch from "node-fetch";

const getPrice = async (ticker: string) => {
  const response = await fetch(`https://api.bybit.com/v2/public/tickers?symbol=${ticker}`);
  const data = (await response.json()) as TickerSymbol;
  return {
    bid: Number(data.result[0].bid_price),
    ask: Number(data.result[0].ask_price),
    last: Number(data.result[0].last_price),
    time_now: data.time_now,
  };
};

const startTimer = () => {
  const time = process.hrtime();
  return time;
};

const endTimer = (time: [number, number] | undefined) => {
  const roundTo = (decimalPlaces: number, numberToRound: number) =>
    +(Math.round(Number(numberToRound + `e+${decimalPlaces}`)) + `e-${decimalPlaces}`);
  const diff = process.hrtime(time);
  const NS_PER_SEC = 1e9;
  const result = diff[0] * NS_PER_SEC + diff[1]; // Result in Nanoseconds
  const elapsed = result * 0.000001;
  return roundTo(6, elapsed); // Result in milliseconds
};

const main = async () => {
  const start = startTimer();

  const response = await getPrice("ETHUSDT");
  const bybit_time = Number(response.time_now) * 1000;

  // console.log(start);
  console.log(`duration: ${endTimer(start)} ms`);
};

main();
