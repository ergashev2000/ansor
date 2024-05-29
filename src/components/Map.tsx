import React from "react";

export default function Map() {
  return (
    <section>
      <div className="container mx-auto lg:px-5 py-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12171.382188701542!2d71.96384425!3d40.30138825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1716962749307!5m2!1sen!2s"
          width="1200"
          height="600"
          style={{ border: "0"}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full lg:rounded-xl"
        ></iframe>
      </div>
    </section>
  );
}
