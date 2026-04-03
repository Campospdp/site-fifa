export default function Footer() {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/pedro-campos-leitao', 
      icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' 
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/Campospdp', 
      icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      class: 'invert brightness-200' 
    }
  ];

  return (
    <footer className="w-full p-6 bg-[#1c1d26] flex justify-between items-center border-t border-[#2e303a] mt-auto">
      <p className="text-[11px] text-zinc-500 font-medium tracking-wider">
        PEDRO CAMPOS © 2026
      </p>
      
      <div className="flex gap-5">
        {socialLinks.map((link) => (
          <a 
            key={link.name}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:brightness-150"
          >
            <img 
              src={link.icon} 
              alt={link.name} 
              className={`w-5 h-5 object-contain ${link.class || ''}`} 
            />
          </a>
        ))}
      </div>
    </footer>
  );
}