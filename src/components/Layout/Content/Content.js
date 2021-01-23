const Content = ({ children, ...props }) => {
  return (
    <main className="content">
      <div className="content-container" {...props}>
        {children}
      </div>
    </main>
  );
};

export default Content;
