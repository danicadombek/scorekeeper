export default function InputLabeled({ label, ...inputProps }) {
  return (
    <label>
      {label}
      <input {...inputProps} />
    </label>
  )
}
