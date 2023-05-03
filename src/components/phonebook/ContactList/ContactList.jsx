import { useDispatch, useSelector } from 'react-redux';
import { ListItem, Button, List } from './ContactList.styled';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from '../../../redux/selectors';
import { deleteContactThunk } from '../../../redux/contactsThunk';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <ListItem key={id}>
            <p>
              {name}: {phone}
            </p>
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContactThunk(id));
              }}
              disabled={isLoading}
            >
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
}
