import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en': {
    color: "Color",
    equity: 'Equity',
    balance: "Balance",
    strategy: "Strategy",
    strategies: "Strategies",
    symbol: "Symbol",
    symbols: "Symbols",
    direction: "Direction",
    volume: "Volume",
    opening_time: "Opening Time",
    shooting_time: "Shooting Time",
    opening_price: "Opening Price",
    final_price: "Final Price",
    take_profit: "Take Profit",
    stop_loss: "Stop Loss",
    gross_profit: "Gross Profit",
    netProfit: "Net Profit",
    commission: "Commission",
    swap: "Swap",
    yearly: "Yearly",
    monthly: "Monthly",
    daily: "Dailly",
    summery_upper: "SUMMERY",
    p_status: "Performance Status",
    trades: "Trades",
    total_trades: "Total Trades",
    win_trades: "Winning Trades",
    win_netProfit: "Winning Net Profit",
    largest_win_trades: "Largest Winning Trades",
    lose_trades: "Losing Trades",
    lose_netProfit: "Losing Net Profit",
    largest_lose_trades: "Largest Losing Trades",
    avg_trades: "Average Trades",
    avg_trade_dur: "Average Trade Duration",
    vol_trades: "USD Volume Trades",
    long: "Long",
    short: "Short",
    performance: "Performance",
    volume_breakdown: "Volume Breakdown",
    avg_trade_size: "Avg. Trade Size",
    winning: "Winning",
    losing: "Losing",
    summery: "Summery",
    all_trades: "All Trades",
    long_trades: "Long Trades",
    short_trades: "Short Trades",
    current_month: "Current Month",
    period: "Period",
    sel_period: "Select Period",
    pips: "Pips",
    trade_history: "Trade History",
    position: "Position",
    history: "History",
    year: "Year",
    month: "Month",
    percent_profitable: "Percent Profitable",
    max_balance_drawdown: "Max Balance Drawdown",
    starting_balance: "Starting Balance",
    current_balance: "Current Balance",
    deposits: "Deposits",
    margin_used: "Margin Used",
    active_since: "Active Since",
    withdrawals: "Withdrawals",
    profit_factor: "Profit Factor",
  },
  'ge': {
    color: "Farbe",
    equity: 'Eigenkapital',
    balance: "Balance",
    strategy: "Strategie",
    strategies: "Strategien",
    symbol: "Symbol",
    symbols: "Symbole",
    direction: "Richtung",
    volume: "Volumen",
    opening_time: "Öffnungszeit",
    shooting_time: "Schießungszeit",
    opening_price: "Öffnungspreis",
    final_price: "Schlusspreis",
    take_profit: "Take Profit",
    stop_loss: "Stop-Loss",
    gross_profit: "Bruttoertrag",
    netProfit: "Reingewinn",
    commission: "Kommission",
    swap: "Tauschen",
    yearly: "Jährlich",
    monthly: "Monatlich",
    daily: "Täglich",
    summery_upper: "SOMMERLICH",
    p_status: "Performanz Status",
    trades: "Handel",
    total_trades: "Gesamtzahl der Trades",
    win_trades: "Gewinnende Trades",
    win_netProfit: "Gewinnen des Nettogewinns",
    largest_win_trades: "Größte Gewinnbringende Trades",
    lose_trades: "Verlust von Trades",
    lose_netProfit: "Verlust des Nettogewinns",
    largest_lose_trades: "Größte Verlusttrades",
    avg_trades: "Durchschnittliche Trades",
    avg_trade_dur: "Durchschnittliche Handelsdauer",
    vol_trades: "USD Volumen Trades",
    long: "Lang",
    short: "Kurz",
    performance: "Leistung",
    volume_breakdown: "Volumenaufschlüsselung",
    avg_trade_size: "Durchschnitt. Handelsgröße",
    winning: "Gewinnen",
    losing: "Verlieren",
    summery: "Sommerlich",
    all_trades: "Alle Trades",
    long_trades: "Lange Trades",
    short_trades: "Short-Trades",
    current_month: "Aktueller Monat",
    period: "Period",
    sel_period: "Zeitraum Auswählen",
    pips: "Pips",
    trade_history: "Handelsgeschichte",
    position: "Position",
    history: "Geschichte",
    year: "Year",
    month: "Month",
    percent_profitable: "Prozent profitabel",
    max_balance_drawdown: "Max Kontostand Drawdown",
    starting_balance: "Startguthaben",
    current_balance: "Aktueller Saldo",
    deposits: "Einlagen",
    margin_used: "Benutzte Marge",
    active_since: "Aktiv Seit",
    withdrawals: "Abhebungen",
    profit_factor: "Gewinnfaktor",
  }
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'ge', // set fallback locale
  messages, // set locale messages
});

export default i18n;