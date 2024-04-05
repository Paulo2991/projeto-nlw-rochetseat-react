import "./App.css";

interface MeuBotaoProps {
  texto: string;
}

function MeuBotao(props: MeuBotaoProps) {
  return <button className="bg-orange-400 h-10 px-3 rounded font-mediun">{props.texto}</button>;
}

function App() {
  return (
    <>
      <div className="flex gap-2">
        <MeuBotao texto="Meu Botão" />
        <MeuBotao texto="Botão 2" />
        <MeuBotao texto="Botão 3" />
        <MeuBotao texto="oi" />
      </div>
    </>
  );
}

export default App;
