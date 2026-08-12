"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  budgetOptions,
  constructionStartOptions,
  facilitySizeOptions,
  projectInquirySchema,
  projectTypeOptions,
  type ProjectInquiryValues,
} from "@/lib/validation";
import { COMPANY } from "@/data/company";
import { cn } from "@/lib/utils";

type ProjectFormProps = {
  className?: string;
  id?: string;
};

export function ProjectForm({ className, id }: ProjectFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectInquiryValues>({
    resolver: zodResolver(projectInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      jobTitle: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      consent: undefined,
    },
  });

  const onSubmit = async (data: ProjectInquiryValues) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));
      toast.success("Inquiry sent", {
        description: `Thank you, ${data.firstName}. The Flex Parks team will contact you within one business day.`,
      });
      reset();
    } catch {
      toast.error("Unable to submit inquiry", {
        description: "Please try again or reach out by phone.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6", className)}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="contact-first-name">First name</Label>
          <Input
            id="contact-first-name"
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            {...register("firstName")}
          />
          {errors.firstName ? (
            <p className="text-xs text-destructive">
              {errors.firstName.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="contact-last-name">Last name</Label>
          <Input
            id="contact-last-name"
            autoComplete="family-name"
            aria-invalid={!!errors.lastName}
            {...register("lastName")}
          />
          {errors.lastName ? (
            <p className="text-xs text-destructive">
              {errors.lastName.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="contact-company">Company</Label>
          <Input
            id="contact-company"
            autoComplete="organization"
            aria-invalid={!!errors.company}
            {...register("company")}
          />
          {errors.company ? (
            <p className="text-xs text-destructive">{errors.company.message}</p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="contact-job-title">Job title</Label>
          <Input
            id="contact-job-title"
            autoComplete="organization-title"
            aria-invalid={!!errors.jobTitle}
            {...register("jobTitle")}
          />
          {errors.jobTitle ? (
            <p className="text-xs text-destructive">{errors.jobTitle.message}</p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
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
          <Label htmlFor="contact-phone">Phone</Label>
          <Input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          ) : null}
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="contact-location">Market / location</Label>
          <Input
            id="contact-location"
            placeholder="City, State or region"
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
          <Label htmlFor="contact-project-type">Inquiry type</Label>
          <Controller
            name="projectType"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={(value) => {
                      if (value) field.onChange(value);
                    }}>
                <SelectTrigger
                  id="contact-project-type"
                  className="w-full"
                  aria-invalid={!!errors.projectType}
                >
                  <SelectValue placeholder="Select inquiry type" />
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

        <div className="space-y-1.5">
          <Label htmlFor="contact-facility-size">Estimated size</Label>
          <Controller
            name="facilitySize"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={(value) => {
                      if (value) field.onChange(value);
                    }}>
                <SelectTrigger
                  id="contact-facility-size"
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

        <div className="space-y-1.5">
          <Label htmlFor="contact-budget">Estimated budget</Label>
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={(value) => {
                      if (value) field.onChange(value);
                    }}>
                <SelectTrigger
                  id="contact-budget"
                  className="w-full"
                  aria-invalid={!!errors.budget}
                >
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.budget ? (
            <p className="text-xs text-destructive">{errors.budget.message}</p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="contact-construction-start">Timeline</Label>
          <Controller
            name="constructionStart"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={(value) => {
                      if (value) field.onChange(value);
                    }}>
                <SelectTrigger
                  id="contact-construction-start"
                  className="w-full"
                  aria-invalid={!!errors.constructionStart}
                >
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  {constructionStartOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.constructionStart ? (
            <p className="text-xs text-destructive">
              {errors.constructionStart.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="contact-message">Opportunity overview</Label>
          <Textarea
            id="contact-message"
            rows={5}
            placeholder="Tell us about your market, asset type, timeline, and what you're looking to accomplish."
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          {errors.message ? (
            <p className="text-xs text-destructive">{errors.message.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <Controller
            name="consent"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="contact-consent"
                checked={field.value === true}
                onCheckedChange={(checked) =>
                  field.onChange(checked === true ? true : undefined)
                }
                aria-invalid={!!errors.consent}
              />
            )}
          />
          <Label
            htmlFor="contact-consent"
            className="text-sm leading-relaxed font-normal text-slate-industrial"
          >
            I agree to receive communications about my inquiry and understand
            that {COMPANY.name} will use my information in accordance with
            applicable privacy policies.
          </Label>
        </div>
        {errors.consent ? (
          <p className="text-xs text-destructive">{errors.consent.message}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="h-11 w-full bg-industrial-orange text-white hover:bg-industrial-orange/90 sm:w-auto sm:min-w-[220px]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" />
            Submitting inquiry…
          </>
        ) : (
          "Send Inquiry"
        )}
      </Button>
    </form>
  );
}
