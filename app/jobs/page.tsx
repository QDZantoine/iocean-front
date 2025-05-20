'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function JobsPage() {
  return (
    <div className="bg-white text-navy-900">
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto relative">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Nos <span className="text-orange-400">métiers</span>
        </h1>
        <p className="text-lg mb-6">
          Acteur clé de votre transformation digitale, nous vous accompagnons de
          A à Z. Parce qu’un client c’est important pour nous et que nous
          souhaitons construire une relation dans la durée, nous avons développé
          les compétences pour vous assister tout au long de la vie de vos
          projets.
        </p>
        <p className="text-lg mb-10">
          Notre volonté est de devenir un partenaire sur lequel vous pourrez
          vous appuyer sur toutes les phases de vos projets : réflexion, étude,
          et mise en œuvre, mais aussi maintenance et infogérance de vos
          applications. Nous sommes également là pour vous soutenir dans la
          formation et l’autonomisation de vos équipes.
        </p>
        <Button className="bg-green-500 text-white hover:bg-green-600 rounded-full px-6 py-3">
          Comptez sur nous : nous sommes à votre écoute !
        </Button>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 pb-24 max-w-7xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`rounded-3xl border-4 p-6 flex flex-col items-center justify-center text-center shadow-md transition hover:shadow-lg ${job.border}`}
          >
            <Image
              src={job.icon}
              alt={job.title}
              width={64}
              height={64}
              className="mb-4"
            />
            <h3
              className="text-xl font-bold mb-2"
              dangerouslySetInnerHTML={{ __html: job.title }}
            />
          </div>
        ))}
      </section>

      <section className="flex justify-center gap-6 pb-16">
        <Button className="bg-orange-400 hover:bg-orange-500 text-white px-6 rounded-full">
          DÉCOUVREZ TOUTES NOS OFFRES
        </Button>
        <Button className="bg-orange-400 hover:bg-orange-500 text-white px-6 rounded-full">
          PARLEZ NOUS DE VOTRE PROJET
        </Button>
      </section>
    </div>
  );
}

const jobs = [
  {
    title: 'Études et<br/>diagnostic',
    icon: '/images/icons/diagnostic.svg',
    border: 'border-blue-900',
  },
  {
    title: 'Pilotage',
    icon: '/images/icons/pilotage.svg',
    border: 'border-orange-400',
  },
  {
    title: 'Conseil et<br/>AMOA',
    icon: '/images/icons/conseil.svg',
    border: 'border-green-500',
  },
  {
    title: "Développement<br/>d'applications",
    icon: '/images/icons/developpement.svg',
    border: 'border-orange-400',
  },
  {
    title: 'Formations et<br/>Mentorat',
    icon: '/images/icons/formation.svg',
    border: 'border-blue-900',
  },
  {
    title: 'Hébergement',
    icon: '/images/icons/hebergement.svg',
    border: 'border-blue-500',
  },
  {
    title: 'Tierce<br/>maintenance<br/>applicative',
    icon: '/images/icons/maintenance.svg',
    border: 'border-green-500',
  },
];
