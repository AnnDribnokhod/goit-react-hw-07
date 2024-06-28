import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";
import { MutatingDots } from "react-loader-spinner";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && (
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#04259c"
          secondaryColor="#f44336"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
        />
      )}
      {isError && (
        <div className={styles.error}>
          Oops... Something went wrong. Try reload page.
        </div>
      )}
      <ContactList />
    </div>
  );
}

export default App;
