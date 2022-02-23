const Item = (props) => {
  const { new_case, new_death, province, total_case, total_death } =
    props;
  return (
    <li className="list-item">
      <span>{province}</span>
      <span>{new_case}</span>
      <span>{total_case}</span>
      <span>{new_death}</span>
      <span>{total_death}</span>
    </li>
  );
};

export default Item;
