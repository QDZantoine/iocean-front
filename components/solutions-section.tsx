// components/solutions-section.tsx

import { CheckCircle, Laptop, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const cards = [
  {
    title: 'Développement sur mesure',
    icon: <Laptop className="w-10 h-10 text-[#f5a800]" />,
    description:
      'Ensemble, développons un projet numérique simple, fiable et écoresponsable.',
  },
  {
    title: 'Gestion de contenu',
    icon: <CheckCircle className="w-10 h-10 text-[#297de0]" />,
    description:
      'Pilotez vos contenus de manière autonome via une interface intuitive et sécurisée.',
  },
  {
    title: 'Maintenance écologique',
    icon: <Leaf className="w-10 h-10 text-[#00cc66]" />,
    description:
      'Des solutions pérennes, évolutives et optimisées pour limiter votre impact environnemental.',
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002b49] mb-12">
          Des solutions
          <span className="text-[#00cc66]">écoresponsables</span>
          sur mesure et en progiciels de gestion
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              className="shadow-md border-t-8 rounded-xl border-[#f5a800]"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">{card.icon}</div>
                <CardTitle className="text-[#002b49] text-xl font-semibold">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
