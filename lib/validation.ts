import { z } from "zod";

export const facilitySizeOptions = [
  "Under 25,000 sq ft",
  "25,000–50,000 sq ft",
  "50,000–100,000 sq ft",
  "100,000–250,000 sq ft",
  "250,000–500,000 sq ft",
  "500,000+ sq ft",
] as const;

export const projectTypeOptions = [
  "Distribution Center",
  "Logistics Warehouse",
  "Small-Bay Industrial",
  "Manufacturing Facility",
  "Cold Storage",
  "Build-to-Suit",
  "Warehouse Expansion",
  "Industrial Renovation",
  "Other",
] as const;

export const budgetOptions = [
  "Under $5M",
  "$5M–$10M",
  "$10M–$25M",
  "$25M–$50M",
  "$50M+",
  "Prefer not to say",
] as const;

export const constructionStartOptions = [
  "Immediately",
  "Within 3 months",
  "3–6 months",
  "6–12 months",
  "12+ months",
  "Still evaluating",
] as const;

const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

export const heroInquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Company is required"),
  email: z
    .string()
    .email("Enter a valid business email")
    .refine((v) => !v.endsWith("@gmail.com") && !v.endsWith("@yahoo.com"), {
      message: "Please use a business email address",
    }),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .regex(phoneRegex, "Enter a valid phone number"),
  location: z.string().min(2, "Project location is required"),
  facilitySize: z.enum(facilitySizeOptions, {
    required_error: "Select an estimated facility size",
  }),
  projectType: z.enum(projectTypeOptions, {
    required_error: "Select a project type",
  }),
});

export type HeroInquiryValues = z.infer<typeof heroInquirySchema>;

export const projectInquirySchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  company: z.string().min(2, "Company is required"),
  jobTitle: z.string().min(2, "Job title is required"),
  email: z
    .string()
    .email("Enter a valid business email")
    .refine((v) => !v.endsWith("@gmail.com") && !v.endsWith("@yahoo.com"), {
      message: "Please use a business email address",
    }),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .regex(phoneRegex, "Enter a valid phone number"),
  location: z.string().min(2, "Project location is required"),
  projectType: z.enum(projectTypeOptions, {
    required_error: "Select a project type",
  }),
  facilitySize: z.enum(facilitySizeOptions, {
    required_error: "Select an estimated facility size",
  }),
  budget: z.enum(budgetOptions, {
    required_error: "Select an estimated budget",
  }),
  constructionStart: z.enum(constructionStartOptions, {
    required_error: "Select a desired construction start",
  }),
  message: z.string().min(10, "Please share a brief project overview"),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Consent is required to submit this inquiry",
    }),
  }),
});

export type ProjectInquiryValues = z.infer<typeof projectInquirySchema>;
