const  SearchBar = ({ icon, placeholder, value, onChange, onKeyDown }) => {

  return (
    <div className="bg-white rounded-lg border border-black-40 px-4 py-2 md:py-3 lg:py-4 flex gap-6 mb-4 md:mb-5 lg:mb-6 lg:mx-28">
      <img src={icon} alt="cari" className="w-5 lg:w-6 object-contain" />
      <input
        className="flex-1 outline-none font-poppins text-body-md-regular text-primary-100 placeholder:text-black-60 "
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default SearchBar;
