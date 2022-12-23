export interface TickerSymbol {
  ret_code: number;
  ret_msg: string;
  result: [
    {
      symbol: string;
      bid_price: string;
      ask_price: string;
      last_price: string;
      last_tick_direction: string;
      prev_price_24h: string;
      price_24h_pcnt: string;
      high_price_24h: string;
      low_price_24h: string;
      prev_price_1h: string;
      mark_price: string;
      index_price: string;
      open_interest: Number;
      countdown_hour: Number;
      turnover_24h: string;
      volume_24h: Number;
      funding_rate: string;
      predicted_funding_rate: string;
      next_funding_time: string;
      predicted_delivery_price: string;
      total_turnover: string;
      total_volume: Number;
      delivery_fee_rate: string;
      delivery_time: string;
      price_1h_pcnt: string;
      open_value: string;
    },
  ];
  ext_code: string;
  ext_info: string;
  time_now: string;
}
