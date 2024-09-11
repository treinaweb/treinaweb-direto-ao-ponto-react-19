import { useRef } from 'react';

const ChildComponent = (props) => (
  <input {...props} type="text" placeholder="Digite algo" />
);

function ParentComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} /><br /><br />
      <button onClick={focusInput}>Focar no Input</button>
    </div>
  );
}

export default ParentComponent;