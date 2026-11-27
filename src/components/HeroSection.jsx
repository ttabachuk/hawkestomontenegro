import bg from "../assets/montenegro.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative py-12 px-4 flex flex-col items-center justify-center bg-cover bg-center min-h-[70vh] lg:min-h-[80vh] text-primary"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {/* <span className="opacity-0 animate-fade-in">Hi</span> */} {/* todo - remove comment */}
            <span className="opacity-0 animate-fade-in-delay-1">
              {" "}
              todo
            </span>
          </h1>
          <p className="text-1xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-2">
          
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#about" className="button">
              view more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
