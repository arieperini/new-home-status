"use client";

// This component will provide stock data for our application
// In a real application, this would fetch data from an API

export type Stock = {
  code: string;
  name: string;
  price: number;
  change: number;
  volume: string;
  min: number;
  max: number;
};

export type Fund = {
  code: string;
  name: string;
  price: number;
  change: number;
  dividend: number;
  pvp: number;
};

export type BDR = {
  code: string;
  name: string;
  price: number;
  change: number;
  volume: string;
  min: number;
  max: number;
};

export type TreasuryBond = {
  name: string;
  investmentValue: number;
  redemptionValue: number;
  dueDate: string;
  annualReturn: number;
};

// Mock stock data
export const stocksHighest: Stock[] = [
  { code: "PETR4", name: "Petrobras", price: 38.42, change: 2.78, volume: "128.4M", min: 37.59, max: 38.92 },
  { code: "VALE3", name: "Vale", price: 65.90, change: 1.45, volume: "97.2M", min: 64.33, max: 66.12 },
  { code: "ITUB4", name: "Itaú Unibanco", price: 35.87, change: 1.22, volume: "89.5M", min: 35.21, max: 36.05 },
  { code: "BBDC4", name: "Bradesco", price: 18.12, change: 0.95, volume: "76.3M", min: 17.85, max: 18.27 },
  { code: "ABEV3", name: "Ambev", price: 14.35, change: 0.84, volume: "65.8M", min: 14.20, max: 14.50 },
];

export const stocksLowest: Stock[] = [
  { code: "MGLU3", name: "Magazine Luiza", price: 2.85, change: -5.95, volume: "105.2M", min: 2.79, max: 3.02 },
  { code: "VIIA3", name: "Via", price: 1.20, change: -3.23, volume: "87.6M", min: 1.18, max: 1.24 },
  { code: "CVCB3", name: "CVC", price: 5.75, change: -2.87, volume: "45.9M", min: 5.71, max: 5.92 },
  { code: "AZUL4", name: "Azul", price: 14.28, change: -2.53, volume: "38.7M", min: 14.15, max: 14.65 },
  { code: "GOLL4", name: "Gol", price: 3.37, change: -2.32, volume: "29.4M", min: 3.35, max: 3.45 },
];

// Mock fund data
export const fundsHighest: Fund[] = [
  { code: "HGLG11", name: "CSHG Logística", price: 178.90, change: 1.87, dividend: 0.82, pvp: 0.95 },
  { code: "KNRI11", name: "Kinea Renda", price: 135.45, change: 1.42, dividend: 0.71, pvp: 0.92 },
  { code: "XPLG11", name: "XP Log", price: 110.32, change: 1.15, dividend: 0.68, pvp: 0.88 },
  { code: "VISC11", name: "Vinci Shopping", price: 102.80, change: 0.95, dividend: 0.75, pvp: 0.91 },
  { code: "HSML11", name: "HSI Mall", price: 89.65, change: 0.80, dividend: 0.65, pvp: 0.87 },
];

export const fundsLowest: Fund[] = [
  { code: "HFOF11", name: "Hedge FOF", price: 87.40, change: -1.75, dividend: 0.62, pvp: 0.98 },
  { code: "RECT11", name: "REC Imob", price: 72.85, change: -1.42, dividend: 0.58, pvp: 0.97 },
  { code: "MXRF11", name: "Maxi Renda", price: 9.95, change: -1.15, dividend: 0.10, pvp: 1.02 },
  { code: "KNCR11", name: "Kinea Crédito", price: 99.12, change: -0.92, dividend: 0.67, pvp: 0.96 },
  { code: "BCFF11", name: "BTG FOF", price: 65.30, change: -0.85, dividend: 0.55, pvp: 0.95 },
];

// Mock BDR data
export const bdrsHighest: BDR[] = [
  { code: "AAPL34", name: "Apple", price: 95.72, change: 2.45, volume: "75.3M", min: 93.80, max: 96.12 },
  { code: "MSFT34", name: "Microsoft", price: 88.15, change: 1.95, volume: "62.1M", min: 86.50, max: 88.45 },
  { code: "AMZO34", name: "Amazon", price: 185.30, change: 1.78, volume: "58.7M", min: 182.25, max: 186.10 },
  { code: "GOGL34", name: "Google", price: 72.45, change: 1.35, volume: "47.2M", min: 71.20, max: 72.90 },
  { code: "NFLX34", name: "Netflix", price: 65.80, change: 1.20, volume: "42.8M", min: 64.95, max: 66.15 },
];

export const bdrsLowest: BDR[] = [
  { code: "TSLA34", name: "Tesla", price: 142.75, change: -3.15, volume: "68.4M", min: 141.90, max: 147.25 },
  { code: "META34", name: "Meta", price: 97.80, change: -2.42, volume: "55.6M", min: 97.15, max: 100.20 },
  { code: "DISB34", name: "Disney", price: 48.25, change: -1.95, volume: "39.2M", min: 47.85, max: 49.10 },
  { code: "INTC34", name: "Intel", price: 22.35, change: -1.65, volume: "32.7M", min: 22.10, max: 22.75 },
  { code: "PYPL34", name: "PayPal", price: 56.90, change: -1.25, volume: "28.3M", min: 56.50, max: 57.65 },
];

// Mock Treasury Bond data
export const treasuryBonds: TreasuryBond[] = [
  { name: "Tesouro Prefixado 2026", investmentValue: 788.41, redemptionValue: 1000.00, dueDate: "01/01/2026", annualReturn: 9.88 },
  { name: "Tesouro Selic 2027", investmentValue: 12540.32, redemptionValue: 12550.45, dueDate: "01/03/2027", annualReturn: 0.08 },
  { name: "Tesouro IPCA+ 2035", investmentValue: 2954.87, redemptionValue: 3010.22, dueDate: "15/05/2035", annualReturn: 5.35 },
  { name: "Tesouro Prefixado 2029", investmentValue: 698.25, redemptionValue: 1000.00, dueDate: "01/01/2029", annualReturn: 10.25 },
];
