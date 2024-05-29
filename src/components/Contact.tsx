"use client";

import { Mail, Map, Phone } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    msg: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, msg } = formData;
    const message = `Name: ${name}\nPhone: ${phone}\nMessage: ${msg}`;

    const telegramApiUrl = `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage`;
    const chatId = "<YOUR_CHAT_ID>";

    try {
      const response = await fetch(telegramApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (response.ok) {
        alert("Message sent successfully");
        setFormData({ name: "", phone: "", msg: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message");
    }
  };

  return (
    <section id="contact">
      <div className="container mx-auto w-full my-10 relative">
        <div className="lg:rounded-3xl overflow-hidden bg_contact relative">
          <div className="lg:p-10 p-2 py-8 text-white relative flex gap-7 max-lg:flex-col">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className=" text-2xl lg:text-3xl font-bold mb-2 uppercase">
                Biz bilan bog&apos;lanish
              </h2>
              <p className="mb-6">
                Bizga qo&apos;ng&apos;iroq qiling! Sizning savolingiz, fikringiz
                yoki proyekt bo&apos;lsa, bizning jamoamiz sizga yordam berish
                uchun tayyor. Bizning jamoa ko&apos;p yillik tajriba ega, va
                sizga yordam bera olamiz.
              </p>
              <div>
                <ul className="space-y-2 lg:space-y-5">
                  <li className="flex gap-3 items-center">
                    <div className=" min-w-[2rem] h-8 rounded-full border border-gray-300 flex items-center justify-center">
                      <Map className="text-gray-300" />
                    </div>
                    <div className="text-white">
                      <h4 className="font-semibold text-lg">Manzil:</h4>
                      <p>
                        O’zbekiston Respublikasi, Toshkent sh., Uchtepa tumani,
                        23-daha, Tinchlikobod MFY, 37-«А» uy.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                      <Phone className="text-gray-300" />
                    </div>
                    <div className="text-white">
                      <h4 className="font-semibold text-lg">Telefon raqam:</h4>
                      <Link href={"tel:+998951774979"} target="_blank">
                        +998 (95) 177 49 79
                      </Link>
                    </div>
                  </li>
                  <li className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                      <Mail className="text-gray-300" />
                    </div>
                    <div className="text-white">
                      <h4 className="font-semibold text-lg">E-mail:</h4>
                      <Link href={"mailto:ansorqs@gmail.com"} target="_blank">
                        ansorqs@gmail.com
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-10">
              <div className="border border-gray-300 rounded-2xl backdrop-blur-sm filter bg-black/40 p-5 2xl:p-8 space-y-5">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-3xl font-semibold">
                    Sizga qanday yordam bera olamiz?
                  </h3>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name">Ism va familiyangiz</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-lg px-4 py-2 bg-white/10 backdrop-blur filter border border-gray-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone">Telefon raqam</label>
                    <input
                      type="number"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded-lg px-4 py-2 bg-white/10 backdrop-blur filter border border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="msg">Xabar</label>
                    <textarea
                      id="msg"
                      value={formData.msg}
                      cols={30}
                      rows={3}
                      onChange={handleChange}
                      className="rounded-lg px-4 py-2 w-full bg-white/10 backdrop-blur filter border border-gray-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white font-bold py-3 px-10 rounded-lg cursor-pointer"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
