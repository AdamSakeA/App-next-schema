import { Input, Container, Contents, TextArea } from "./text-input.styles";

export default function TextInput(props) {
  const {
    label,
    id,
    name,
    value,
    onChange,
    required,
    pattern,
    errors,
    type = "text",
    placeholder,
  } = props;

  if (type === "textarea") {
    return (
      <Container>
        <label htmlFor={id}>{label} :</label>
        <TextArea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          pattern={pattern}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Contents>
        <label htmlFor={id}>{label} :</label>
        <Input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          pattern={pattern}
          placeholder={placeholder}
        />
      </Contents>
      <p className="input-error">{errors}</p>
    </Container>
  );
}
