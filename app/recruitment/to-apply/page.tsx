'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { motion } from 'framer-motion';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Votre message est trop court'),
  file: z
    .any()
    .refine((file) => file?.length === 1, 'Veuillez ajouter un fichier')
    .refine(
      (file) => file?.[0]?.type === 'application/pdf',
      'Seuls les fichiers PDF sont acceptés'
    ),
});

type FormValues = z.infer<typeof formSchema>;

export default function PostulerPage() {
  const [sent, setSent] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      file: undefined,
    },
  });

  const onSubmit = async (values: FormValues) => {
    console.log(values);
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#002b49] py-20 px-4">
      <motion.div
        className="max-w-xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold">
          Candidature <span className="text-orange-400">spontanée</span>
        </h1>
        <p className="text-lg text-gray-700">
          Vous souhaitez rejoindre l&apos;équipe iOcean ? Décrivez-nous votre
          profil et vos motivations.
        </p>
        {sent ? (
          <p className="text-green-600 font-semibold">
            ✅ Votre candidature a bien été envoyée !
          </p>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 text-left"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom complet</FormLabel>
                    <FormControl>
                      <Input placeholder="Jean Dupont" {...field} />
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
                        placeholder="jean@example.com"
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
                    <FormLabel>Message / motivation</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Décrivez votre profil..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CV (PDF)</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => field.onChange(e.target.files)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-orange-400 text-white hover:bg-orange-500"
              >
                Envoyer la candidature
              </Button>
            </form>
          </Form>
        )}
      </motion.div>
    </main>
  );
}
