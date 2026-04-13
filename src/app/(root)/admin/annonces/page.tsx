"use client";

import Annonce from "@/components/annonceCard/Annonce";
import Calendar from "@/components/eventCalendar/Calendar";

export default function Announcements() {
  const announcements = [
    {
      title: "Exam Notice",
      description:
        "Supporting line text lorem ipsum dolor sit amet, consectetur",
      actions: ["React", "Delete"],
    },
    {
      title: "Payment Announcement",
      description:
        "Supporting line text lorem ipsum dolor sit amet, consectetur",
      actions: ["React", "Delete"],
    },
    {
      title: "Session Notice",
      description:
        "A dialog is a type of modal window that appears in front of app content to provide critical information.",
      actions: ["Action 2", "Action 1"],
    },
    {
      title: "General Notice",
      description:
        "Supporting line text lorem ipsum dolor sit amet, consectetur",
      actions: ["React", "Delete"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className=" float-right m-10 bg-white shadow-md rounded p-6 w-72">
        <Calendar />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6 m-5">
        Announcements
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {announcements.map((annonce, index) => (
          <Annonce
            key={index}
            title={annonce.title}
            description={annonce.description}
            actions={annonce.actions}
          />
        ))}
      </div>
    </div>
  );
}
