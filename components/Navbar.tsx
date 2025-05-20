'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Home, Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './toggleMode';
import clsx from 'clsx';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-[#002b49] shadow-sm border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo dynamique clair/sombre */}
        <Link
          href="/"
          className="flex items-center hover:scale-105 transition-transform duration-300"
          aria-label="Accueil iOcean"
        >
          <div className="relative w-40 h-12">
            <Image
              src="/images/iocean_blanc-couleurs.png"
              alt="Logo iOcean blanc"
              fill
              className="hidden dark:block object-contain"
              priority
            />
            <Image
              src="/images/logo-iocean-couleur.svg"
              alt="Logo iOcean"
              fill
              className="block dark:hidden object-contain"
              priority
            />
          </div>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium text-[#002b49] dark:text-white">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#f5a800] hover:underline underline-offset-4"
          >
            <Home size={32} />
          </Link>
          <NavLink href="/about">À propos</NavLink>
          <NavLink href="/services">Nos prestations</NavLink>
          <NavLink href="/jobs">Nos métiers</NavLink>
          <NavLink href="/recruitment">Recrutement</NavLink>
          <NavLink href="/references">Références</NavLink>
          <NavLink href="/articles">Actualités</NavLink>
        </nav>

        {/* CTA contact + thème */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Link href="/contact" aria-label="Contactez-nous">
            <Button className="bg-[#00cc66] hover:bg-green-600 text-white font-semibold transition-transform duration-300 hover:scale-105">
              <Phone size={16} className="mr-2" />
              Vous avez un projet ? Contactez-nous !
            </Button>
          </Link>
        </div>

        {/* Toggle mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#002b49] dark:text-white"
          aria-label="Ouvrir le menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={clsx(
          'fixed inset-0 z-50 md:hidden transition-all duration-300 transform',
          mobileMenuOpen
            ? 'translate-y-0 opacity-100 bg-white text-[#002b49] dark:bg-[#002b49] dark:text-white'
            : '-translate-y-full opacity-0 pointer-events-none'
        )}
      >
        <div className="p-6 flex flex-col gap-6">
          <MobileLink href="/" icon={<Home size={18} />}>
            Accueil
          </MobileLink>
          <MobileLink href="/about">À propos</MobileLink>
          <MobileLink href="/services">Nos prestations</MobileLink>
          <MobileLink href="/jobs">Nos métiers</MobileLink>
          <MobileLink href="/recruitment">Recrutement</MobileLink>
          <MobileLink href="/references">Références</MobileLink>
          <MobileLink href="/articles">Actualités</MobileLink>

          <div className="pt-2">
            <ModeToggle />
          </div>

          <Link href="/contact">
            <Button className="w-full bg-[#f5a800] text-white hover:bg-orange-600">
              📞 Contactez-nous
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative hover:text-[#f5a800] transition-colors duration-200"
    >
      <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#f5a800] after:transition-all after:duration-300 hover:after:w-full">
        {children}
      </span>
    </Link>
  );
}

function MobileLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 py-2 text-lg font-medium text-[#002b49] dark:text-white hover:text-[#f5a800] transition-colors"
    >
      {icon}
      {children}
    </Link>
  );
}
