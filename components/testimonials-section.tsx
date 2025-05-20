'use client'

import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const testimonials = [
  {
    quote:
      "L'outil sur-mesure réalisé grâce à iOcean est très bon. Il a répondu à toutes nos attentes et les collaborateurs de l'équipe sont très compétents et professionnels.",
    author: 'Trinexto',
  },
  {
    quote:
      "Une équipe très à l'écoute, flexible et efficace. iOcean nous a accompagnés dans toutes les étapes du projet.",
    author: 'EcoGreenTech',
  },
  {
    quote:
      "Le logiciel conçu avec iOcean nous fait gagner un temps précieux chaque jour. Un vrai partenariat durable !",
    author: 'AgriSystème',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002b49] mb-10">
          Nos clients parlent de leurs projets
        </h2>

        <Card className="shadow-xl border-2 border-[#297de0]">
          <CardContent className="p-8 relative">
            <Quote className="absolute top-4 left-4 text-[#297de0] w-6 h-6" />
            <p className="text-lg font-medium text-[#002b49] italic">
              &quot;{testimonials[index].quote}&quot;
            </p>
            <p className="mt-6 font-semibold text-[#f5a800]">
              {testimonials[index].author}
            </p>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-6 gap-4">
          <Button
            onClick={prev}
            variant="outline"
            className="border-[#297de0] text-[#297de0] hover:bg-blue-50"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button
            onClick={next}
            variant="outline"
            className="border-[#297de0] text-[#297de0] hover:bg-blue-50"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
