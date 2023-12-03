import { StyledBtn } from "./style";

interface ButtonProps {
  title: string;
  deleteFunction: any;
}
export function Button(props: ButtonProps) {
  return <StyledBtn onClick={props.deleteFunction}>{props.title}</StyledBtn>;
}
