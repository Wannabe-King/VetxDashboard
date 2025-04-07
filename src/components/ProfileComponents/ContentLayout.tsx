const ProfileContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-7 lg:py-9 px-6 lg:px-12 space-y-4 w-full lg:max-w-[calc(100%-100px)]">
      {children}
    </div>
  );
};

export default ProfileContentLayout;
