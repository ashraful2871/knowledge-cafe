import profile from "../assets/images/profile.png";
const Header = () => {
  return (
    <header>
      <div className="md:flex justify-between mt-12  mb-8 ">
        <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </div>
      <hr />
    </header>
  );
};

export default Header;
