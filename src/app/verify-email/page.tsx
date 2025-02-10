"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { verifyEmail } from "@/lib/actions/user.actions";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { LoaderCircle, CircleCheckBig, AlertTriangle } from "lucide-react";

const VerifyEmailContent: React.FC = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    if (!token) {
      setStatus("error");
    } else {
      const verifyUserEmail = async () => {
        try {
          await verifyEmail(token);
          setStatus("success");
        } catch (error) {
          console.error("Error verifying email:", error);
          setStatus("error");
        }
      };

      verifyUserEmail();
    }
  }, [token]);

  if (status === "loading") {
    return (
      <div>
        <LoaderCircle size={60} className="animate-spin text-primary" />
        <p className="mt-4">Verifying your email, please wait...</p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div>
        <CircleCheckBig size={60} className="text-green-500" />
        <p className="mt-4 text-xl font-semibold text-green-500">
          Your email has been successfully verified!
        </p>
      </div>
    );
  }

  return (
    <div>
      <AlertTriangle size={60} className="text-red-500" />
      <p className="mt-4 text-xl font-semibold text-red-500">
        There was an error verifying your email. Please try again.
      </p>
    </div>
  );
};

const VerifyEmailPage: React.FC = () => (
  <DefaultLayout>
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <LoaderCircle size={60} className="animate-spin text-primary" />
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <VerifyEmailContent />
      </div>
    </Suspense>
  </DefaultLayout>
);

export default VerifyEmailPage;
