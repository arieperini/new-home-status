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
import { type Fund } from "@/components/StockData";

interface FundTableProps {
  title: string;
  fundsHighest: Fund[];
  fundsLowest: Fund[];
}

export default function FundTable({ title, fundsHighest, fundsLowest }: FundTableProps) {
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

          <TabsContent value="maiores-altas" className="mt-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                  <TableHead className="text-xs font-medium text-gray-600 py-2 pl-3">Código</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2">Nome</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">Cotação</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">Var (%)</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">Dividend</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 text-right pr-3">P/VP</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fundsHighest.map((fund) => (
                  <TableRow key={fund.code} className="hover:bg-gray-50 border-b border-gray-200">
                    <TableCell className="text-xs font-medium py-2 pl-3">{fund.code}</TableCell>
                    <TableCell className="text-xs py-2">{fund.name}</TableCell>
                    <TableCell className="text-xs py-2 text-right">
                      R$ {fund.price.toFixed(2)}
                    </TableCell>
                    <TableCell className={`text-xs py-2 text-right ${getChangeColor(fund.change)}`}>
                      {getChangeIcon(fund.change)} {formatChange(fund.change)}
                    </TableCell>
                    <TableCell className="text-xs py-2 text-right">
                      {fund.dividend.toFixed(2)}%
                    </TableCell>
                    <TableCell className="text-xs py-2 text-right pr-3">
                      {fund.pvp.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="maiores-baixas" className="mt-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-gray-50 border-b border-gray-200">
                  <TableHead className="text-xs font-medium text-gray-600 py-2 pl-3">Código</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2">Nome</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">Cotação</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">Var (%)</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">Dividend</TableHead>
                  <TableHead className="text-xs font-medium text-gray-600 py-2 text-right pr-3">P/VP</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fundsLowest.map((fund) => (
                  <TableRow key={fund.code} className="hover:bg-gray-50 border-b border-gray-200">
                    <TableCell className="text-xs font-medium py-2 pl-3">{fund.code}</TableCell>
                    <TableCell className="text-xs py-2">{fund.name}</TableCell>
                    <TableCell className="text-xs py-2 text-right">
                      R$ {fund.price.toFixed(2)}
                    </TableCell>
                    <TableCell className={`text-xs py-2 text-right ${getChangeColor(fund.change)}`}>
                      {getChangeIcon(fund.change)} {formatChange(fund.change)}
                    </TableCell>
                    <TableCell className="text-xs py-2 text-right">
                      {fund.dividend.toFixed(2)}%
                    </TableCell>
                    <TableCell className="text-xs py-2 text-right pr-3">
                      {fund.pvp.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
        <div className="flex justify-center items-center py-2 border-t border-gray-200 bg-gray-50">
          <span className="text-xs text-blue-600 hover:underline cursor-pointer">
            Ver mais resultados
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
