"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  facilitySizeOptions,
  heroInquirySchema,
  projectTypeOptions,
  type HeroInquiryValues,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type ProjectInquiryCardProps = {
  className?: string;
};

export function ProjectInquiryCard({ className }: ProjectInquiryCardProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HeroInquiryValues>({
    resolver: zodResolver(heroInquirySchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      location: "",
    },
  });

  const onSubmit = async (data: HeroInquiryValues) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast.success("Consultation request received", {
        description: `Thanks, ${data.name.split(" ")[0]}. Our team will reach out within one business day.`,
      });
      reset();
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      className={cn(
        "shadow-2xl ring-1 ring-black/5 backdrop-blur-sm",
        className
      )}
    >
      <CardHeader className="border-b border-industrial-gray/80 bg-surface/50">
        <CardTitle className="text-lg font-bold text-navy">
          Planning a Warehouse Project?
        </CardTitle>
        <CardDescription>
          Share your project requirements and request a consultation with our
          industrial team.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="hero-name">Name</Label>
              <Input
                id="hero-name"
                autoComplete="name"
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              {errors.name ? (
                <p className="text-xs text-destructive">{errors.name.message}</p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="hero-company">Company</Label>
              <Input
                id="hero-company"
                autoComplete="organization"
                aria-invalid={!!errors.company}
                {...register("company")}
              />
              {errors.company ? (
                <p className="text-xs text-destructive">
                  {errors.company.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="hero-email">Business Email</Label>
              <Input
                id="hero-email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                {...register("email")}
              />
              {errors.email ? (
                <p className="text-xs text-destructive">{errors.email.message}</p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="hero-phone">Phone</Label>
              <Input
                id="hero-phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={!!errors.phone}
                {...register("phone")}
              />
              {errors.phone ? (
                <p className="text-xs text-destructive">{errors.phone.message}</p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="hero-location">Project Location</Label>
              <Input
                id="hero-location"
                placeholder="City, State"
                aria-invalid={!!errors.location}
                {...register("location")}
              />
              {errors.location ? (
                <p className="text-xs text-destructive">
                  {errors.location.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="hero-facility-size">Estimated Facility Size</Label>
              <Controller
                name="facilitySize"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(value) => {
                      if (value) field.onChange(value);
                    }}
                  >
                    <SelectTrigger
                      id="hero-facility-size"
                      className="w-full"
                      aria-invalid={!!errors.facilitySize}
                    >
                      <SelectValue placeholder="Select size range" />
                    </SelectTrigger>
                    <SelectContent>
                      {facilitySizeOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.facilitySize ? (
                <p className="text-xs text-destructive">
                  {errors.facilitySize.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="hero-project-type">Project Type</Label>
              <Controller
                name="projectType"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(value) => {
                      if (value) field.onChange(value);
                    }}
                  >
                    <SelectTrigger
                      id="hero-project-type"
                      className="w-full"
                      aria-invalid={!!errors.projectType}
                    >
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypeOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.projectType ? (
                <p className="text-xs text-destructive">
                  {errors.projectType.message}
                </p>
              ) : null}
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="h-11 w-full bg-industrial-orange text-white hover:bg-industrial-orange/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                Submitting…
              </>
            ) : (
              "Request Consultation"
            )}
          </Button>

          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            Our industrial team typically responds within one business day.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
