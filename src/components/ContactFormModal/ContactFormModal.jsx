import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

import toast from 'react-hot-toast';

// Form doğrulama şeması
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'İsim en az 2 karakter olmalıdır')
    .max(50, 'İsim en fazla 50 karakter olmalıdır')
    .required('İsim zorunludur'),
  number: Yup.string()
    .matches(/^[0-9]+$/, 'Telefon numarası sadece rakam içermelidir')
    .min(10, 'Telefon numarası en az 10 karakter olmalıdır')
    .max(15, 'Telefon numarası en fazla 15 karakter olmalıdır')
    .required('Telefon numarası zorunludur'),
});

export default function ContactFormModal() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success('Kişi başarıyla eklendi!');
        handleClose(); // Modalı kapat
        resetForm(); // Formu temizle
      })
      .catch(() => {
        toast.error('Kişi eklenirken bir hata oluştu.');
      });
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Kişi Ekle
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yeni Kişi Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    İsim
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="İsim girin"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="number" className="form-label">
                    Telefon Numarası
                  </label>
                  <Field
                    type="tel"
                    name="number"
                    className="form-control"
                    placeholder="Telefon numarası girin"
                  />
                  <ErrorMessage
                    name="number"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <Button variant="success" type="submit" className="mt-3">
                  Kaydet
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}