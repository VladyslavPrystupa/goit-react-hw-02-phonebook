import { Label, Input, Container } from './Filter.styled';

export const Filter = ({ onHandleChange, filter }) => {
  return (
    <Container>
      <Label>
        Find contact
        <Input
          onChange={onHandleChange}
          type="text"
          name="filter"
          value={filter}
        />
      </Label>
    </Container>
  );
};
