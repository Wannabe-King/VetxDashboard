import { companies } from "../../db/companies";

const CompaniesSection = () => {
  return (
    <div className="bg-black text-white px-7 py-4 rounded-[10px] border border-[#1D1D1D]">
      <h2 className="text-[18px] font-semibold mb-6">Founded Companies</h2>
      <div className="text-[64px] font-bold leading-none">02</div>

      <div className="flex-1 mt-4 space-y-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex justify-between items-start gap-4 text-white"
          >
            <div className="flex gap-2.5">
              <img
                src={company.logo??"/placeholder.webp"}
                alt={company.name}
                className="w-8 h-8 rounded-[2px] object-cover"
              />
              <div className="max-w-[180px]">
                <div className="flex items-center gap-4">
                  <h3 className="text-[14px] font-medium">{company.name}</h3>
                  <span
                    className={`text-[8px] font-bold px-1.5 py-0.5 rounded-[2px] ${company.roleColor} ${company.roleBgColor}`}
                  >
                    {company.role}
                  </span>
                </div>
                <p className="text-[12px]">
                  {company.description}
                  {company.industry && (
                    <span className="font-semibold"> {company.industry}.</span>
                  )}
                </p>
              </div>
            </div>

            <a href={company.profileUrl} className="text-[10px] font-medium">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesSection;
