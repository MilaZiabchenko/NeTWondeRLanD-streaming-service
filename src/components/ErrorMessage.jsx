const ErrorMessage = ({ error }) =>
  error &&
  error.name !== 'CanceledError' && (
    <h3 className='text-lg'>
      <span>Oops! {error.message} :(</span>
    </h3>
  );

export default ErrorMessage;
