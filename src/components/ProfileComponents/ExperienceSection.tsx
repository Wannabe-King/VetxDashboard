import { CompanyTile } from "./CompanyTile";

const experiences = [
  { name: "Company 1", link: "#" },
  { name: "Company 2", link: "#" },
  { name: "Company 3", link: "#" },
];

export default function ExperienceSection() {
  return (
    <div className="bg-black text-white px-7 py-4 rounded-[10px] border border-[#1D1D1D]">
      <h2 className="text-[18px] font-semibold mb-6">Experience</h2>
      <div className="text-[64px] font-bold leading-none">03</div>

      <div className="flex-1 mt-4 space-y-4">
        {experiences.map((exp, index) => (
          <CompanyTile key={index} name={exp.name} link={exp.link} />
        ))}
      </div>
    </div>
  );
}
