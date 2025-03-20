function Banner() {
  return (
    <div>
      <div className="absolute inset-0 bg-black opacity-30 bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Dev Insights</h1>
          <p className="mt-4 text-lg md:text-xl">Aqui compartilho ideias, projetos e insights sobre tecnologia.</p>
        </div>
      </section>
    </div>
  );
}

export default Banner;
