const experiences = [
  { name: 'Company 1', link: '#' },
  { name: 'Company 2', link: '#' },
  { name: 'Company 3', link: '#' },
];

export default function ExperienceSection() {
  return (
    <div className="bg-black text-white px-7 py-4 rounded-[10px] border border-[#1D1D1D]">
      <h2 className="text-[18px] font-extrabold mb-6">Experience</h2>
        <div className="text-[64px] font-bold leading-none">03</div>

        <div className="flex-1 mt-4 space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-[2px] bg-[url('/checkbox.webp')] bg-cover" />
                <span className="text-[14px] font-bold">{exp.name}</span>
              </div>
              <a
                href={exp.link}
                className="text-[8px] font-medium"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
    </div>
  );
}
