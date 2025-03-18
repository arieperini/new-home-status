"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type TreasuryBond } from "@/components/StockData";

interface TreasuryTableProps {
  title: string;
  bonds: TreasuryBond[];
}

export default function TreasuryTable({ title, bonds }: TreasuryTableProps) {
  return (
    <Card className="rounded-none border-none shadow-none">
      <CardHeader className="p-3 bg-gray-100 border-y border-gray-200">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-gray-50 border-b border-gray-200">
              <TableHead className="text-xs font-medium text-gray-600 py-2 pl-3">Título</TableHead>
              <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">
                Valor Investido
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">
                Valor de Resgate
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 py-2 text-right">
                Vencimento
              </TableHead>
              <TableHead className="text-xs font-medium text-gray-600 py-2 text-right pr-3">
                Rentabilidade
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bonds.map((bond, index) => (
              <TableRow key={index} className="hover:bg-gray-50 border-b border-gray-200">
                <TableCell className="text-xs font-medium py-2 pl-3">{bond.name}</TableCell>
                <TableCell className="text-xs py-2 text-right">
                  R$ {bond.investmentValue.toFixed(2)}
                </TableCell>
                <TableCell className="text-xs py-2 text-right">
                  R$ {bond.redemptionValue.toFixed(2)}
                </TableCell>
                <TableCell className="text-xs py-2 text-right">
                  {bond.dueDate}
                </TableCell>
                <TableCell className="text-xs py-2 text-right pr-3">
                  {bond.annualReturn.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-center items-center py-2 border-t border-gray-200 bg-gray-50">
          <span className="text-xs text-blue-600 hover:underline cursor-pointer">
            Ver mais resultados
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
