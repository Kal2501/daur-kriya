function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f9fdf2] dark:bg-zinc-950">

      <div className="absolute -top-52 left-20 w-[550px] h-[550px] rounded-full bg-lime-300/40 blur-[100px]" />

      <div className="absolute top-80 right-0 w-[600px] h-[600px] rounded-full bg-lime-400/30 blur-[120px]" />

      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-lime-200/30 blur-[100px]" />

    </div>
  );
}

export default Background;