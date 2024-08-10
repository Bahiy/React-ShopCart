type Props = { title?: string };
const PageTitle = ({ title = "{ Texto Titulo }" }: Props) => {
  return <div className="page-title">{title}</div>;
};
export default PageTitle;
