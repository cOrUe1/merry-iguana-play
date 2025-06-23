"use client";

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
}

// Define the schema for form validation
const formSchema = z.object({
  name: z.string().min(1, "Il nome è richiesto."),
  lastName: z.string().min(1, "Il cognome è richiesto."),
  email: z.string().email("Inserisci un'email valida."),
  phone: z.string().min(10, "Il numero di telefono è richiesto e deve essere di almeno 10 cifre.").regex(/^\+?[0-9\s\-()]{10,20}$/, "Formato numero non valido."),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: "Devi accettare l'informativa sulla privacy.",
  }),
});

type BookingFormValues = z.infer<typeof formSchema>;

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, productTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (values: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      // IMPORTANT: Replace with your deployed Google App Script URL
      const SCRIPT_URL = "YOUR_GOOGLE_APP_SCRIPT_WEB_APP_URL_HERE"; 

      const formData = new FormData();
      formData.append("Nome", values.name);
      formData.append("Cognome", values.lastName);
      formData.append("Email", values.email);
      formData.append("Numero", values.phone);
      formData.append("Consenso Privacy", values.privacyConsent ? "Sì" : "No");
      formData.append("Prodotto", productTitle);
      formData.append("Timestamp", new Date().toLocaleString());

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Use 'no-cors' for Google App Script to avoid CORS issues
      });

      // Since we use 'no-cors', we can't directly read the response.
      // Assume success if no error is thrown.
      toast.success("Prenotazione inviata con successo! Sarai ricontattato a breve.");
      form.reset();
      onClose();
    } catch (error) {
      console.error("Errore durante l'invio della prenotazione:", error);
      toast.error("Si è verificato un errore durante l'invio. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Prenota ora!</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            Assicurati questo elemento! Lasciaci il tuo contatto e sarai richiamato dal nostro staff per fissare la visita in showroom.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              {...form.register("name")}
              className="col-span-3"
            />
            {form.formState.errors.name && (
              <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-right">
              Cognome
            </Label>
            <Input
              id="lastName"
              {...form.register("lastName")}
              className="col-span-3"
            />
            {form.formState.errors.lastName && (
              <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.lastName.message}</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              className="col-span-3"
            />
            {form.formState.errors.email && (
              <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Numero
            </Label>
            <Input
              id="phone"
              type="tel"
              {...form.register("phone")}
              className="col-span-3"
            />
            {form.formState.errors.phone && (
              <p className="col-span-4 text-right text-sm text-red-500">{form.formState.errors.phone.message}</p>
            )}
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <Checkbox
              id="privacyConsent"
              checked={form.watch("privacyConsent")}
              onCheckedChange={(checked) => form.setValue("privacyConsent", !!checked)}
            />
            <Label htmlFor="privacyConsent" className="text-sm font-normal">
              Accetto l'informativa sulla privacy.
            </Label>
          </div>
          {form.formState.errors.privacyConsent && (
            <p className="text-sm text-red-500">{form.formState.errors.privacyConsent.message}</p>
          )}
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Invio..." : "Invia Prenotazione"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;