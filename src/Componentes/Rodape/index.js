import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <ul>
        <li>
          <img src="/imagens/ig.png" alt="Intagram Page" />
        </li>
        <li>
          <img src="/imagens/fb.png" alt="Facebook Page" />
        </li>
        <li>
          <img src="/imagens/tw.png" alt="Twitter Page" />
        </li>
      </ul>
      <img src="/imagens/logo.png" alt="Twitter Page" className="logo" />
      <h4>Desenvolvido por Guilherme</h4>
    </footer>
  );
};
export default Rodape;
