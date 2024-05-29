import React from "react";

export default function Map() {
  return (
    <section>
      <div className="container mx-auto lg:px-5 py-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3218.5002814031054!2d69.18182034641003!3d41.285945590246186!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzA4LjgiTiA2OcKwMTAnNTYuMyJF!5e1!3m2!1sen!2s!4v1716967376502!5m2!1sen!2s"
          width="1200"
          height="600"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full lg:rounded-xl max-lg:h-[400px]"
        ></iframe>
      </div>
    </section>
  );
}
