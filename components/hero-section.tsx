import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#002b49] text-white">
      <div className="container max-w-6xl mx-auto px-4 pt-24 pb-36 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          Vous avez besoin d&apos;un site <br /> sur lequel administrer votre
          contenu <br />
          <span className="text-[#6DD48E]">
            de façon autonome et écoresponsable
          </span>{' '}
          ?
        </h1>
        <div className="mt-6 flex justify-center">
          <Button className="bg-[#00cc66] hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-lg">
            En savoir plus
          </Button>
        </div>
      </div>
      <div className="absolute -right-16 top-10 w-64 h-64 bg-[#f5a800] rounded-full opacity-80 z-0" />
      <div className="absolute -left-16 -bottom-20 w-96 h-96 bg-[#6DD48E] rounded-full opacity-30 z-0" />
    </section>
  );
}
