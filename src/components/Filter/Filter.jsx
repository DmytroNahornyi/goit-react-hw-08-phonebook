import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContact } from 'redux/filterSlice/filterSlice';
import { FilterWrapper, Input, Label } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filterValue);

  return (
    <FilterWrapper>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(getVisibleContact(e.target.value))}
        placeholder="search"
      />
    </FilterWrapper>
  );
}

export default Filter;
