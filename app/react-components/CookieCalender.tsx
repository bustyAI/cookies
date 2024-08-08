"use client";
import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const CookieCalender = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDate(new Date());
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border flex justify-center"
      />
    </div>
  );
};

export default CookieCalender;
