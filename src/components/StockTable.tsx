"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Minus } from "lucide-react";

type Stock = {
  code: string;
  name: string;
  price: number;
  change: number;
  volume: string;
  min: number;
  max: number;
};

interface StockTableProps {
  title: string;
  stocks: Stock[];
  type?: "default" | "condensed";
}

export default function StockTable({ title, stocks, type = "default" }: StockTableProps) {
  const getChangeColor = (change: number) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-zinc-600";
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <ChevronUp className="h-4 w-4 inline text-green-600" />;
    if (change < 0) return <ChevronDown className="h-4 w-4 inline text-red-600" />;
    return <Minus className="h-3 w-3 inline text-zinc-600" />;
  };

  const formatChange = (change: number) => {
    const sign = change > 0 ? "+" : "";
    return `${sign}${change.toFixed(2)}%`;
  };

  return (
    <Card className="rounded-none border-none shadow-none">
      <CardHeader className="p-3 bg-gray-100 border-y border-gray-200">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="maiores-altas" className="w-full">
          <TabsList className="w-full h-auto bg-gray-50 rounded-none border-b border-gray-200">
            <TabsTrigger
              value="maiores-altas"
              className="text-xs py-2 flex-1 data-[state=active]:bg-white data-[state=active]:shadow-none"
            >
              Maiores Altas do Dia
            </TabsTrigger>
            <TabsTrigger
              value="maiores-baixas"
              className="text-xs py-2 flex-1 data-[state=active]:bg-white data-[state=active]:shadow-none"
            >
              Maiores Baixas do Dia
            </TabsTrigger>
          </TabsList>

          {["maiores-altas", "maiores-baixas"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-0">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                    <TableHead className="text-xs font-medium text-gray-600 py-2 pl-3">Código</TableHead>
                    <TableHead className="text-xs font-medium text-gray-600 py-2">Nome</TableHead>
                    <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">Cotação</TableHead>
                    <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">Var (%)</TableHead>
                    {type === "default" && (
                      <>
                        <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">Volume</TableHead>
                        <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">Mín</TableHead>
                        <TableHead className="text-xs font-medium text-gray-600 py-2 text-right pr-3">Máx</TableHead>
                      </>
                    )}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stocks.map((stock) => (
                    <TableRow key={stock.code} className="hover:bg-gray-50 border-b border-gray-200">
                      <TableCell className="text-xs font-medium py-2 pl-3">{stock.code}</TableCell>
                      <TableCell className="text-xs py-2">{stock.name}</TableCell>
                      <TableCell className="text-xs py-2 text-right">
                        R$ {stock.price.toFixed(2)}
                      </TableCell>
                      <TableCell className={`text-xs py-2 text-right ${getChangeColor(stock.change)}`}>
                        {getChangeIcon(stock.change)} {formatChange(stock.change)}
                      </TableCell>
                      {type === "default" && (
                        <>
                          <TableCell className="text-xs py-2 text-right">{stock.volume}</TableCell>
                          <TableCell className="text-xs py-2 text-right">
                            R$ {stock.min.toFixed(2)}
                          </TableCell>
                          <TableCell className="text-xs py-2 text-right pr-3">
                            R$ {stock.max.toFixed(2)}
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex justify-center items-center py-2 border-t border-gray-200 bg-gray-50">
                <span className="text-xs text-blue-600 hover:underline cursor-pointer">
                  Ver mais resultados
                </span>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
