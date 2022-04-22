import { FC } from "react"

import styles from "./ContactUs.module.scss"

const ContactUs: FC = () => {
  return (
    <div className={`wrapper ${styles.contacts}`}>
      <div className={`container padding ${styles.contacts_container}`}>
        <h1 className={styles.contacts_header}> Our contacts</h1>
        <div className={styles.contacts_phones}>
          <span className={styles.contacts_phones_label}>Phones</span>
          <span className={styles.contacts_phone_number}>712-579-7866</span>
          <span className={styles.contacts_phone_number}>253-875-0198</span>
        </div>
        <div className={styles.contacts_emails}>
          <span className={styles.contacts_emails_label}>E-mail</span>
          <span className={styles.contacts_email}>nothing@company.com</span>
        </div>
        <form className={styles.contacts_form}>
          <span className={styles.contacts_form_label}>Write us</span>
          <textarea
            className={styles.contacts_form_textarea}
            cols={30}
            rows={10}
            placeholder="Write here your contacts and message about your project"
          ></textarea>
          <button className={styles.contacts_form_button}>Contact us</button>
        </form>
      </div>
    </div>
  )
}
export default ContactUs
