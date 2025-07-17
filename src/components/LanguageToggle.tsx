import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
];

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-8 right-8 z-50">
      <select
        value={language}
        onChange={e => setLanguage(e.target.value as any)}
        className="bg-[#ff0000] bg-opacity-20 border border-[#ff0000] rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-[#ff0000] transition-all duration-300 cursor-magnetic focus:outline-none"
      >
        {LANGUAGES.map(lang => (
          <option key={lang.code} value={lang.code} className="text-black">
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageToggle;