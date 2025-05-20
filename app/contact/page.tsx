'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Phone, MapPin } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(1, 'Nom requis'),
  email: z.string().email('Email invalide'),
  message: z.string().min(1, 'Message requis'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormData) {
    console.log('Form data:', data);
    // send via API or email provider
  }

  return (
    <main className="container max-w-6xl px-4 py-12 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contactez-nous
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre nom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Votre email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="Votre message..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg"
              >
                Envoyer
              </Button>
            </form>
          </Form>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-md">
            <Phone className="text-orange-600 dark:text-orange-400" />
            <div>
              <p className="font-bold text-lg">04 34 09 04 60</p>
              <p className="text-sm text-muted-foreground">
                Du lundi au vendredi
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-md">
            <MapPin className="text-orange-600 dark:text-orange-400 mt-1" />
            <div>
              <p className="font-semibold">Le bruyère 2000</p>
              <p>650 Rue Henri Becquerel Bât 1</p>
              <p>34000 Montpellier</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
