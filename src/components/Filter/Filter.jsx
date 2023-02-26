export const Filter = ({ onHandleChange, filter }) => {
  return (
    <label>
      Find contact
      <input
        onChange={onHandleChange}
        type="text"
        name="filter"
        value={filter}
      />
    </label>
  );
};
