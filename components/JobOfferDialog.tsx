// components/JobOfferDialog.tsx
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { JobOffer } from '@/types/types';
import { STRAPI_URL } from '@/lib/strapi';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function JobOfferDialog({ offer }: { offer: JobOffer }) {
  const [open, setOpen] = useState(false);
  const { id, title, description, icon, color } = offer;
  const imageUrl = icon?.[0]?.url ? `${STRAPI_URL}${icon[0].url}` : null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="rounded-xl border-4 bg-white p-6 text-center  shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
          style={{ borderColor: color }}
        >
          {imageUrl && (
            <div className="w-10 h-10 mx-auto mb-4">
              <Image
                src={imageUrl}
                alt={title}
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
          )}
          <h3
            className="text-xl font-bold leading-snug uppercase tracking-wide"
            style={{ color }}
          >
            {title}
          </h3>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Accessibilité & SEO friendly title */}
        <title>{title} – Offre d’emploi | iOcean</title>

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4 flex items-center gap-4">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={title}
                width={32}
                height={32}
                className="object-contain"
              />
            )}
            {title}
          </DialogTitle>

          <DialogDescription className="whitespace-pre-line text-gray-200">
            {description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="pt-6">
          <Button
            asChild
            className="bg-green-600 text-white hover:bg-green-700"
          >
            <Link href={`/recruitment/to-apply?offerId=${id}`}>
              Postuler à cette offre
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
