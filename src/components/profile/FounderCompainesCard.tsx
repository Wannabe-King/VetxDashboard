const companies = [
  {
    logo: "/vertxLogo.png", // Replace with actual image path
    name: "Vertx",
    role: "CEO",
    roleBgColor: "bg-[#579560]",
    roleColor: "text-[#04470B]",
    description: "Founded in 2025. in",
    industry: "Fintech",
    profileUrl: "#",
  },
  {
    logo: "/checkbox.webp", // Replace with actual image path
    name: "Company",
    role: "PROPRIETOR",
    roleBgColor: "bg-[#B1BDEB]",
    roleColor: "text-[#10074F]",
    description: " ",
    industry: "Details/Information like acquired /exit/m&a",
    profileUrl: "#",
  },
];

const FounderCompainesCard = () => {
  return (
    <div className="bg-black text-white px-7 py-4 rounded-[10px] border border-[#1D1D1D]">
      <h2 className="text-[18px] font-extrabold mb-6">Founded Companies</h2>
      <div className="text-[64px] font-bold leading-none">02</div>

      <div className="flex-1 mt-4 space-y-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex justify-between items-start gap-4 text-white"
          >
            <div className="flex gap-2.5">
              <img
                src={company.logo}
                alt={company.name}
                className="w-8 h-8 rounded-[2px] object-cover"
              />
              <div className="max-w-[180px]">
                <div className="flex items-center gap-4">
                  <h3 className="text-[14px] font-bold">{company.name}</h3>
                  <span
                    className={`text-[8px] font-medium px-1.5 py-0.5 rounded-[2px] ${company.roleColor} ${company.roleBgColor}`}
                  >
                    {company.role}
                  </span>
                </div>
                <p className="text-[10px]">
                  {company.description}
                  {company.industry && (
                    <span className="font-semibold"> {company.industry}.</span>
                  )}
                </p>
              </div>
            </div>

            <a
              href={company.profileUrl}
               className="text-[8px] font-medium"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FounderCompainesCard;
