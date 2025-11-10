function Header({ title, children }) {
  return (
    <div className="bg-[#F9F9FA] flex justify-between items-center pl-20 pr-6 md:px-4 py-2">
      <h2 className="font-poppins text-[20px] md:text-[31px] font-semibold">{title}</h2>
      {children}
    </div>
  );
}

export default Header;