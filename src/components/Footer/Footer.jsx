import s from "./Style.module.scss";

export const Footer = () => {
  return (
    <footer className={s.Footer}>
      <section>
        <h5>Adresse:</h5>
        <p>Intent nyt - Godt nyt ApS</p>
        <p>Tulipanvej 232 7320 Valby Øster</p>
      </section>
      <section>
        <h5>Links:</h5>
        <p>vikanweb.dk</p>
        <p>overpådenandenside.dk</p>
        <p>retsinformation.dk</p>
        <p>nogetmednews.dk</p>
      </section>
      <section>
        <h5>Politik:</h5>
        <p>Privatlivspolitik</p>
        <p>Cookiepolitik</p>
        <p>Købsinformation</p>
        <p>Delingspolitik</p>
      </section>
      <section>
        <h5>Kontakt:</h5>
        <p>ingn@nyhed.dk</p>
        <p>teletfon: 23232323</p>
        <p>fax: 123123-333</p>
      </section>
    </footer>
  );
};
