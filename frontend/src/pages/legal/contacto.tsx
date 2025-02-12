import styles from './Contacto.module.scss';

import { useState } from "react";

export default function Contacto() {

  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contacto</h1>
      <p className={styles.subtitle}>¿Tienes preguntas o necesitas ayuda? Estamos aquí para asistirte.</p>

      {/* Formulario de Contacto */}
      <form className={styles.contactForm}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" />

        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" placeholder="Tu correo electrónico" />

        <label htmlFor="asunto">Asunto</label>
        <input type="text" id="asunto" name="asunto" placeholder="Asunto" />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" placeholder="Tu mensaje"></textarea>

        <label
          htmlFor="archivo"
          className={styles.dropZone}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {file ? (
            <p>Archivo seleccionado: {file.name}</p>
          ) : (
            <p>Arrastra y suelta un archivo aquí o haz clic para seleccionar</p>
          )}
          <input type="file" id="archivo" onChange={handleFileChange} hidden />
        </label>

        <button type="submit">Enviar</button>

      </form>

      {/* Información de Contacto */}
      <div className={styles.contactInfo}>
        <p><strong>Correo Electrónico:</strong> contacto@tuempresa.com</p>
        <p><strong>Teléfono:</strong> +1 (555) 123-4567</p>
        <p><strong>Horario de Atención:</strong> Lunes a Viernes, de 9:00 a.m. a 6:00 p.m.</p>
      </div>

      {/* Redes Sociales */}
      <div className={styles.socialMedia}>
        <p>Síguenos en redes sociales:</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}