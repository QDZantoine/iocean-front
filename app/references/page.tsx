'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function ReferencesPage() {
  const references = [
    {
      logo: '/images/references/fastt.png',
      title: 'Un SI sécurisé pour l’intérim',
      description:
        '"Nous apprécions de pouvoir nous appuyer sur un prestataire qui offre un service complet, ce que nous avons trouvé chez IOcean, avec beaucoup d’écoute et de souplesse."',
    },
    {
      logo: '/images/references/clinique.png',
      title: 'Application collaborative médicale',
      description:
        'La clinique souhaite proposer à ses patients un outil collaboratif accessible et simple pour partager des informations entre Patient, Médecin et Equipe.',
    },
    {
      logo: '/images/references/safer.png',
      title: 'Outils métier pour l’aménagement foncier',
      description:
        '"Leurs équipes ont toujours respecté les budgets prévus et les délais. Nous avons les mêmes interlocuteurs depuis 2001."',
    },
    {
      logo: '/images/references/agro.png',
      title: 'Simulateur pour école agroalimentaire',
      description:
        '"Collaboration fluide. Le contact direct avec le développeur a permis d’obtenir un résultat conforme à nos attentes."',
    },
    {
      logo: '/images/references/aerien.png',
      title: 'Dématérialisation domaine aérien',
      description:
        '"Appréciation particulière pour le côté proactif, l’ouverture d’esprit et la qualité des échanges."',
    },
    {
      logo: '/images/references/dif.png',
      title: 'Intranet pour assurances',
      description:
        '"IOcean est un réel partenaire pour nous : Nous les recommandons chaleureusement."',
    },
    {
      logo: '/images/references/erp-ingenierie.png',
      title: 'ERP pour bureau d’études environnement',
      description:
        '"IOcean nous accompagne depuis le début avec une assistance sans faille."',
    },
    {
      logo: '/images/references/erp-ferroviaire.png',
      title: 'ERP pour ingénierie ferroviaire',
      description: '"L’outil a largement amélioré la qualité de nos données."',
    },
  ];

  return (
    <main className="w-full bg-white py-16 px-6 md:px-20 lg:px-32">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Ils nous ont fait confiance
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl">
          Nombreux sont les clients qui nous ont confié la réalisation de leurs
          projets. Leur fidélité témoigne de notre engagement et de notre
          volonté d’offrir une solution personnalisée et durable.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {references.map((ref, i) => (
          <div
            key={i}
            className={cn(
              'bg-slate-50 border rounded-xl shadow hover:shadow-md transition p-6 flex flex-col items-center text-center'
            )}
          >
            <div className="mb-4 w-20 h-20 relative">
              <Image
                src={ref.logo}
                alt={ref.title}
                fill
                className="object-contain rounded"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {ref.title}
            </h3>
            <p className="text-sm text-slate-600">{ref.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
