import React from "react";
import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <div className={styles.wrapper}>
          <FaUser className={styles.icon} />
          <p>{name}</p>
        </div>
        <div className={styles.wrapper}>
          <FaPhone className={styles.icon} />
          <p>{number}</p>
        </div>
      </div>
      <button className={styles.button} onClick={() => handleDeleteContact()}>
        Delete
      </button>
    </li>
  );
}
