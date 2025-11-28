const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-xl font-semibold text-center mb-2 xs:text-left">
      {children}
    </h2>
  );
};
export default SectionHeading;
