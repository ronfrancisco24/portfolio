function NavBar() {
  return (
    <nav className="fixed left-0 right-0 mx-auto w-1/2 top-4 z-10">
      {/* Navigation Options */}
      <div className="h-12 border border-white bg-black rounded-full text-white ring-2 ring-white/60 shadow-lg">
        <div className="mx-7 h-full flex justify-between items-center font-figtree text-brand-white font-medium">
          <a href="#about-section">About</a>
          <a href="#speakers-section">Speakers</a>
          <a href="#about-section">Experience</a>
          <a href="#hackathon-section">Projects</a>
          <a href="#sponsors-section">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
