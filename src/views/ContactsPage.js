import { useState } from 'react';

import ContactsSection from '../component/ContactsSection/ContactsSection';

import ContactForm from '../component/ContactForm/ContactForm';
import Modal from '../component/Modal/Modal';
import { ModalEdit } from '../component/ModalEdit/ModalEdit';
export default function ContactsPage() {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const toggleModall = () => {
    setShowModal(prevState => !prevState);
  };
  const toggleModallEdit = () => {
    setShowModalEdit(prevState => !prevState);
  };

  return (
    <>
      {showModal && (
        <Modal toggleModall={toggleModall}>
          <ContactForm toggleModall={toggleModall} text="Add contact" />
        </Modal>
      )}
      {/* {showModalEdit && <ModalEdit toggleModall={toggleModallEdit} />} */}

      <ContactsSection
        toggleModall={toggleModall}
        toggleModallEdit={toggleModallEdit}
      />
    </>
  );
}
