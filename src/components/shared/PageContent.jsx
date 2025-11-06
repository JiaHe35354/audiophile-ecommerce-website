function PageContent({ title, children }) {
  return (
    <div className="h-160 text-center pt-30 flex flex-col justify-center items-center gap-16">
      <h1 className="text-6xl font-bold text-red-700">{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
