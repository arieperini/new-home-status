"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Search, Bell, Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-emerald-900 text-white">
      {/* Top navigation bar */}
      <div className="max-w-screen-xl mx-auto py-2 px-4 md:px-6 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold text-lg">INVEST</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/mercados">Mercados</Link>
            <Link href="/cotacoes">Cotações</Link>
            <Link href="/investimentos">Investimentos</Link>
            <Link href="/economia">Economia</Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar"
              className="bg-emerald-800 text-white rounded-sm px-3 py-1 text-xs w-24 sm:w-32 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <Search className="absolute right-2 top-1 h-4 w-4" />
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-4 w-4" />
          </Button>
          <Avatar className="h-7 w-7">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback className="bg-emerald-700 text-xs">U</AvatarFallback>
          </Avatar>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Main navigation */}
      <div className="bg-emerald-800 py-2">
        <NavigationMenu className="max-w-screen-xl mx-auto px-4 md:px-6">
          <NavigationMenuList className="flex flex-wrap gap-1 text-xs">
            <NavigationMenuItem>
              <Link href="/acoes" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-1 hover:bg-emerald-700 rounded-sm">
                  AÇÕES
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/fiis" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-1 hover:bg-emerald-700 rounded-sm">
                  FIIs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/bdrs" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-1 hover:bg-emerald-700 rounded-sm">
                  BDRs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/tesouro-direto" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-1 hover:bg-emerald-700 rounded-sm">
                  TESOURO DIRETO
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/fundos" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-1 hover:bg-emerald-700 rounded-sm">
                  FUNDOS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/criptomoedas" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-1 hover:bg-emerald-700 rounded-sm">
                  CRIPTOMOEDAS
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/comparador" legacyBehavior passHref>
                <NavigationMenuLink className="px-3 py-1 hover:bg-emerald-700 rounded-sm">
                  COMPARADOR
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-emerald-800 p-4">
          <div className="flex flex-col space-y-2">
            <Link href="/mercados" className="p-2 hover:bg-emerald-700">Mercados</Link>
            <Link href="/cotacoes" className="p-2 hover:bg-emerald-700">Cotações</Link>
            <Link href="/investimentos" className="p-2 hover:bg-emerald-700">Investimentos</Link>
            <Link href="/economia" className="p-2 hover:bg-emerald-700">Economia</Link>
          </div>
        </div>
      )}
    </header>
  );
}
