import React, { Component } from "react";
import { FaUssunnah, FaMosque, FaShuttleVan, FaHandshake } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaUssunnah />,
        title: "Terlengkap",
        info:
          "Distributor Sajadah, Permadani, Hambal dan Karpet Masjid terlengkap dan termurah di Tanah Abang Jakarta Pusat."
      },
      {
        icon: <FaMosque />,
        title: "Koleksi",
        info:
          "Tersedia Varian Motif dan Warna menawan asli buatan Persia, Arab Saudi dan Turki maupun Lokal."
      },
      {
        icon: <FaShuttleVan />,
        title: "Pengiriman",
        info:
          "Semua Produk kami bisa dibeli satuan maupun grosir. Gratis ongkir untuk wilayah Jabodetabek."
      },
      {
        icon: <FaHandshake />,
        title: "Pelayanan",
        info:
          "Melayani pengukuran, pengiriman dan pemasangan Karpet Masjid / Mushalla seluruh JABODETABEK dan semua wilayah Indonesia."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
