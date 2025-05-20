'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getJobOffers } from '@/lib/strapi';
import { motion } from 'framer-motion';
import { JobOffer } from '@/types/types';
import JobOfferDialog from '@/components/JobOfferDialog';

export default function RecrutementPage() {
  const [offers, setOffers] = useState<JobOffer[]>([]);

  useEffect(() => {
    getJobOffers().then(setOffers).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0B1F3A]">
      {/* Section intro */}
      <section className="container px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="rounded-2xl border-[10px] border-orange-400 overflow-hidden"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/team-iocean.png"
            alt="Équipe iOcean"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos offres <span className="text-orange-400">d&apos;emploi</span>
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Vous aimez les challenges et voulez travailler dans une organisation
            centrée sur <strong>l&apos;amélioration continue</strong> et qui
            valorise{' '}
            <strong>la participation et les initiatives de tous</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            Nous travaillons en équipe pour répondre aux enjeux de nos clients.
          </p>
          <div className="mt-8">
            <Button
              className="bg-green-500 text-white hover:bg-green-600 rounded-full px-6"
              asChild
            >
              <Link href="/recruitment/to-apply">
                ENVOYER UNE CANDIDATURE SPONTANÉE
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Offres */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4 grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <JobOfferDialog offer={offer} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            className="bg-orange-400 text-white hover:bg-orange-500 rounded-full px-8"
            asChild
          >
            <Link href="/recrutement/postuler">
              ENVOYER UNE CANDIDATURE SPONTANÉE
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
