import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-[#1B2B48] mt-10 border-t">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + baseline */}
        <div>
          <Image
            src="/images/logo-iocean-couleur.svg"
            alt="Logo iOcean"
            width={160}
            height={40}
            className="h-12 w-auto mb-2"
          />
          <p className="text-sm text-gray-600">
            Créateur de solutions numériques simples et écoresponsables
          </p>
        </div>

        {/* Liens */}
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/about" className="hover:text-green-600">
            À propos
          </Link>
          <Link href="/services" className="hover:text-green-600">
            Nos prestations
          </Link>
          <Link href="/jobs" className="hover:text-green-600">
            Nos métiers
          </Link>
          <Link href="/recruitment" className="hover:text-green-600">
            Recrutement
          </Link>
        </div>

        {/* Liens suite */}
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/references" className="hover:text-green-600">
            Références
          </Link>
          <Link href="/articles" className="hover:text-green-600">
            Actualités
          </Link>
          <Link href="/contact" className="hover:text-green-600">
            Contact
          </Link>
        </div>
      </div>

      <div className="text-center py-4 text-xs text-gray-500 border-t">
        © {new Date().getFullYear()} iOcean. Tous droits réservés.
      </div>
    </footer>
  );
}
