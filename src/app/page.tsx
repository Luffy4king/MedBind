import Index from "@/components/DashBoard";
import DefaultLayout from "@/components/layout/DefaultLayout";

import { Metadata } from "next";
 export const metadata:Metadata={
  title:"MedMind: A leading  research platform for drug  research",
  description:"MedMind helps researchers to find and share the most accurate and up-to-date information about drugs, their side effects, dosages, and more.",

 }
export default function Home() {
  return (
    <>
  <DefaultLayout>
<Index/>
  </DefaultLayout>
    </>
  );
}
