const EmptyList = ({ text, children }) => (
  <section className='empty text-center'>
    <h3 className='text-lg'>
      <span>{text}</span>
    </h3>
    {children}
  </section>
);

export default EmptyList;
