import Image from 'next/image';
import Link from 'next/link';

export default function NosPrestationsPage() {
  return (
    <main className="min-h-screen bg-white px-6 md:px-20 lg:px-32 py-16">
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Parce que chaque projet compte,
            <span className="text-yellow-500">
              {' '}
              nous vous accompagnons à toutes les étapes de votre projet
            </span>
            <span className="text-yellow-500 font-extrabold">
              {' '}
              quelque soit son envergure.
            </span>
          </h1>
          <p className="text-lg text-slate-800 mb-4">
            Experts dans les projets informatiques depuis plus de 15 ans, nous
            vous proposons de vous accompagner sur les besoins que vous pourrez
            rencontrer à toutes les étapes de vos projets et ce, quel que soit
            votre secteur d’activité.
          </p>
          <p className="text-lg text-slate-800">
            Ce qui nous semble primordial et qui fait notre spécificité, c’est
            que nous prenons toujours le temps de vous écouter, de comprendre
            votre métier et votre environnement. Pour ce faire, nous nous
            investissons totalement afin de répondre à vos attentes et de vous
            donner entière satisfaction.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/prestations-hero.jpg"
            alt="Équipe IOcean"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-16">
          Nos solutions de <span className="text-yellow-500">gestion</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl border-4 border-blue-500 p-8 text-center">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Maintenance de vos applications existantes
            </h3>
          </div>
          <div className="rounded-xl border-4 border-green-500 p-8 text-center">
            <h3 className="text-xl font-bold text-green-600 mb-2">
              Optimisation complète de vos outils
            </h3>
          </div>
          <div className="rounded-xl border-4 border-yellow-500 p-8 text-center">
            <h3 className="text-xl font-bold text-yellow-600 mb-2">
              L&apos;hébergement et l&apos;infogérance de vos systèmes
            </h3>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full">
              Parlez-nous de votre projet !
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
