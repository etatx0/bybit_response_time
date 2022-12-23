"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const getPrice = (ticker) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)(`https://api.bybit.com/v2/public/tickers?symbol=${ticker}`);
    const data = (yield response.json());
    return {
        bid: Number(data.result[0].bid_price),
        ask: Number(data.result[0].ask_price),
        last: Number(data.result[0].last_price),
        time_now: data.time_now,
    };
});
const startTimer = () => {
    const time = process.hrtime();
    return time;
};
const endTimer = (time) => {
    const roundTo = (decimalPlaces, numberToRound) => +(Math.round(Number(numberToRound + `e+${decimalPlaces}`)) + `e-${decimalPlaces}`);
    const diff = process.hrtime(time);
    const NS_PER_SEC = 1e9;
    const result = diff[0] * NS_PER_SEC + diff[1]; // Result in Nanoseconds
    const elapsed = result * 0.000001;
    return roundTo(6, elapsed); // Result in milliseconds
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const start = startTimer();
    const response = yield getPrice("ETHUSDT");
    const bybit_time = Number(response.time_now) * 1000;
    // console.log(start);
    console.log(`duration: ${endTimer(start)} ms`);
});
main();
