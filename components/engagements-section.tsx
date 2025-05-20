// EngagementsSection.tsx
import { ShieldCheck, Bolt, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const engagements = [
  {
    title: 'Sécurité & Pérennité',
    icon: <ShieldCheck className="text-[#002b49] w-8 h-8" />,
    text: 'Des solutions robustes, fiables et sécurisées, pour vous accompagner durablement.',
  },
  {
    title: 'Performance & Simplicité',
    icon: <Bolt className="text-[#f5a800] w-8 h-8" />,
    text: 'Des interfaces pensées pour être simples, rapides et accessibles.',
  },
  {
    title: 'Engagement Écoresponsable',
    icon: <Leaf className="text-[#00cc66] w-8 h-8" />,
    text: 'Une approche green IT pour concevoir des solutions numériques durables.',
  },
];

export default function EngagementsSection() {
  return (
    <section className="bg-[#002b49] text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold">Nos engagements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {engagements.map((item, index) => (
            <Card
              key={index}
              className="bg-white text-[#002b49] border-0 shadow-md"
            >
              <CardHeader>
                <div className="flex justify-center">{item.icon}</div>
                <CardTitle className="text-xl text-center mt-4">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-gray-700">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
