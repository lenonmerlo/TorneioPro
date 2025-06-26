// src/components/usuario/Input.jsx
function Input({ label, type = 'text', name, value, onChange }) {
  return (
    <div className='mb-4'>
      <label className='block text-blue-800 font-semibold mb-1' htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className='w-full p-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  );
}

export default Input;
