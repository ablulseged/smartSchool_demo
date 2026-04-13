"use client";
import React, { useState } from "react";
import { useSettings, SettingsProvider } from "@/context/SettingsContext";

// SVG Icons (replacing react-icons)
const CogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const PaletteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);
const UserShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SettingsContent = () => {
  const { language, theme, setLanguage, setTheme } = useSettings();
  const [activeSection, setActiveSection] = useState("System");
  const [configurationAction, setConfigurationAction] = useState<string | null>(null);

  const isDark = theme === "Dark";

  const sections = [
    { id: "System", icon: <CogIcon />, description: "Manage system settings" },
    { id: "Branches", icon: <BuildingIcon />, description: "Manage school branches" },
    { id: "Roles", icon: <UserShieldIcon />, description: "Manage roles and permissions" },
    { id: "Customize", icon: <PaletteIcon />, description: "Customize appearance" },
    { id: "Privacy", icon: <ShieldIcon />, description: "Control privacy settings" },
  ];

  const handleConfigure = (sectionId: string) => setConfigurationAction(sectionId);

  const inputClass = `w-full p-2 border rounded-lg ${isDark ? "bg-gray-700 border-gray-600 text-gray-200" : "border-gray-300 bg-white text-gray-800"}`;
  const cardClass = `p-6 rounded-xl shadow-lg ${isDark ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"}`;

  return (
    <div className={`flex flex-col min-h-screen mt-16 p-4 md:p-8 w-full ${isDark ? "bg-gray-800 text-gray-200" : "bg-gray-50 text-gray-800"}`}>
      <div className="flex flex-1 flex-col md:flex-row gap-6">

        {/* Sidebar */}
        <aside className={`rounded-lg shadow-lg w-full md:w-64 p-4 ${isDark ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"}`}>
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => { setActiveSection(section.id); setConfigurationAction(null); }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${activeSection === section.id
                      ? "bg-blue-600 text-white"
                      : isDark
                        ? "hover:bg-gray-600 text-gray-200"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                >
                  {section.icon}
                  <span className="font-medium">{section.id}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          <h1 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
            {activeSection}
          </h1>

          {/* Section cards */}
          <div className="grid grid-cols-1 gap-6">
            {sections
              .filter((s) => s.id === activeSection)
              .map((section) => (
                <div key={section.id} className={cardClass}>
                  <div className="flex items-center gap-3 mb-2">
                    {section.icon}
                    <h2 className="text-xl font-semibold">{section.id}</h2>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{section.description}</p>
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => handleConfigure(section.id)}
                  >
                    Configure
                  </button>
                </div>
              ))}
          </div>

          {/* System config */}
          {configurationAction === "System" && (
            <div className={`${cardClass} mt-6`}>
              <h2 className="text-xl font-semibold mb-4">System Configuration</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Language</label>
                  <select value={language} onChange={(e) => setLanguage(e.target.value)} className={inputClass}>
                    <option>French</option>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Theme</label>
                  <select value={theme} onChange={(e) => setTheme(e.target.value)} className={inputClass}>
                    <option>Light</option>
                    <option>Dark</option>
                  </select>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Save
                </button>
              </form>
            </div>
          )}

          {/* Customize */}
          {configurationAction === "Customize" && (
            <div className={`${cardClass} mt-6`}>
              <h2 className="text-xl font-semibold mb-4">Appearance Customization</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Primary Color</label>
                  <input type="color" defaultValue="#3b82f6" className="w-16 h-10 border rounded cursor-pointer" />
                </div>
                <div>
                  <label className="block font-medium mb-1">Font Size</label>
                  <input type="range" min="12" max="20" defaultValue="16" className="w-full" />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Save
                </button>
              </form>
            </div>
          )}

          {/* Branches */}
          {configurationAction === "Branches" && (
            <div className={`${cardClass} mt-6`}>
              <h2 className="text-xl font-semibold mb-4">Branch Management</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Branch Name</label>
                  <input type="text" placeholder="Enter branch name" className={inputClass} />
                </div>
                <div>
                  <label className="block font-medium mb-1">City</label>
                  <input type="text" placeholder="Enter city" className={inputClass} />
                </div>
                <div>
                  <label className="block font-medium mb-1">Region</label>
                  <input type="text" placeholder="Enter region" className={inputClass} />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Save
                </button>
              </form>
              <h3 className="text-lg font-semibold mt-6 mb-2">Branch List</h3>
              <ul className="space-y-1">
                {["Branch 1", "Branch 2", "Branch 3"].map((b) => (
                  <li key={b} className="flex items-center justify-between py-1 border-b border-gray-200">
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Roles */}
          {configurationAction === "Roles" && (
            <div className={`${cardClass} mt-6`}>
              <h2 className="text-xl font-semibold mb-4">Role Management</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Name</label>
                  <input type="text" placeholder="Enter role name" className={inputClass} />
                </div>
                <div>
                  <label className="block font-medium mb-1">Description</label>
                  <input type="text" placeholder="Enter description" className={inputClass} />
                </div>
                <div>
                  <label className="block font-medium mb-1">Permissions</label>
                  <div className="flex flex-wrap gap-4 mt-1">
                    {["Create", "Read", "Edit", "Delete"].map((perm) => (
                      <label key={perm} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        {perm}
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Save
                </button>
              </form>
              <h3 className="text-lg font-semibold mt-6 mb-2">Role List</h3>
              <ul className="space-y-1">
                {["Role 1", "Role 2", "Role 3"].map((r) => (
                  <li key={r} className="flex items-center justify-between py-1 border-b border-gray-200">
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Privacy */}
          {configurationAction === "Privacy" && (
            <div className={`${cardClass} mt-6`}>
              <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
              <div className="space-y-4">
                {["Share usage data", "Allow cookie tracking", "Public profile"].map((opt) => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span>{opt}</span>
                  </label>
                ))}
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Save
                </button>
              </div>
            </div>
          )}

          {configurationAction && (
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              onClick={() => setConfigurationAction(null)}
            >
              Close
            </button>
          )}
        </main>
      </div>
    </div>
  );
};

// Wrap with its own SettingsProvider so context is available
const ParametrePage = () => (
  <SettingsProvider>
    <SettingsContent />
  </SettingsProvider>
);

export default ParametrePage;
