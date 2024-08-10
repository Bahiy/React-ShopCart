type Props = {
  headerText?: string;
};
const PageHeader = ({ headerText = "{ Cabeçalho }" }: Props) => {
  return (
    <header>
      <span>{headerText}</span>
    </header>
  );
};
export default PageHeader;
