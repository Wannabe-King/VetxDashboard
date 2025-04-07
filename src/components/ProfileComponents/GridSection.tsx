interface GridProp {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
}

const GridSection = ({ leftComponent, rightComponent }: GridProp) => {
  return (
    <div className="w-full grid max-md:grid-rows-2 md:grid-cols-2 gap-4">
      {leftComponent}
      {rightComponent}
    </div>
  );
};

export default GridSection;
