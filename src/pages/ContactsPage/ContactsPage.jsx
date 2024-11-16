import { useDispatch, useSelector } from "react-redux";
import { selectUserDataIsLoading } from "../../redux/auth/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUserDataIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      <SearchBox />
      <ContactList />
    </>
  );
}
