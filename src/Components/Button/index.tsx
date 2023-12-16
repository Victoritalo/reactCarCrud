import { StyledBtn } from "./style";

interface ButtonProps {
  title: string;
  delete: any;
}
export function Button(props: ButtonProps) {
  return <StyledBtn onClick={props.delete}>{props.title}</StyledBtn>;
}
