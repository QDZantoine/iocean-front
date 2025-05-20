'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-[#002b49] dark:text-white border border-[#002b49]/20 dark:border-white/20 bg-[#f5f5f5] dark:bg-[#003b5c] hover:bg-[#f5a800]/10"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Changer le thème</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-[#002b49] text-[#002b49] dark:text-white border border-gray-200 dark:border-gray-700"
      >
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Thème clair
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Thème sombre
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}