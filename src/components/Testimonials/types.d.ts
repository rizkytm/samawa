import { TPackage } from "@/components/WeddingPackages/types";

export type TTestimonial = {
    id: number,
    name: string,
    occupation: string,
    photo: string,
    message: string,
    weddingPackage: TPackage
};