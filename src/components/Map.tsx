import React from "react";

export default function Map() {
  return (
    <section>
      <div className="container mx-auto py-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2998.0549007228665!2d69.17977008749862!3d41.285909599463984!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzA4LjgiTiA2OcKwMTAnNTYuMyJF!5e0!3m2!1sen!2s!4v1716967938450!5m2!1sen!2s"
          width="1200"
          height="600"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full lg:rounded-xl max-lg:h-[400px] border-0"
        />
      </div>
    </section>
  );
}
