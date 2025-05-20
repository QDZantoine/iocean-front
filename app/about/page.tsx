'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-white text-[#002b49]">
      <section className="py-20 px-4 container mx-auto space-y-20 max-w-6xl">
        {/* Présentation */}
        <div className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            iOcean :{' '}
            <span className="text-[#f5a800]">
              Entreprise de Services Numériques
            </span>{' '}
            et <span className="text-[#f5a800]">Editeur de logiciels</span>
          </h1>
          <p className="text-lg text-gray-800">
            Depuis 2001, nous innovons dans le développement web pour garantir
            des solutions à forte valeur ajoutée, fiables et évolutives.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/laptop.jpg"
            alt="Travail collaboratif"
            width={600}
            height={400}
            className="rounded-xl border-4 border-blue-200 shadow-lg"
          />
        </div>

        {/* Chiffres Clés */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Stat title="2001" description="Année de création" />
          <Stat title="25" description="Collaborateurs à Montpellier" />
          <Stat title="+20 ans" description="de projets numériques" />
        </div>

        {/* Valeurs */}
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">Nos valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              title="Simplicité"
              color="#6dd48e"
              text="Des solutions simples, rapides, adaptables et fiables pour une performance optimale."
            />
            <ValueCard
              title="Fiabilité"
              color="#6dd48e"
              text="Des équipes expertes, forces de proposition, qui garantissent des solutions robustes."
            />
            <ValueCard
              title="Réactivité"
              color="#6dd48e"
              text="Une agilité au service des besoins clients dans un monde en constante évolution."
            />
          </div>
        </div>

        {/* Eco-conception */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002b49]">
            Une démarche <span className="text-[#f5a800]">eco-conçue</span>
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Nous appliquons la Conception Numérique Responsable : accessibilité,
            optimisation, réduction d&apos;impact énergétique, performance.
            Labellisés EnVol, nous maitrisons nos impacts écologiques sur 5 ans.
          </p>
        </div>

        {/* Recrutement */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Rejoignez-nous</h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Nous recherchons des profils passionnés : développeur fullstack,
            lead Angular, chargé d&apos;affaire ERP... Rejoignez une équipe dynamique
            et engagée à Montpellier.
          </p>
        </div>
      </section>
    </main>
  );
}

function Stat({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#f5f5f5] rounded-xl p-6 shadow-sm">
      <p className="text-4xl font-bold text-[#f5a800]">{title}</p>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

function ValueCard({
  title,
  color,
  text,
}: {
  title: string;
  color: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2" style={{ color }}>
        {title}
      </h3>
      <p className="text-gray-700">{text}</p>
    </div>
  );
}
