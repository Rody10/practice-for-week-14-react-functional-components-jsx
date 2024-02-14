import bulbasaurImage from "./images/bulbasaur.jpg";

function Showcase() {
  var favPokemon = "Pikachu";
  const pokeCharacteristics = {
    type: "Grass",
    move: "Vine whip",
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaurImage} alt="favPokemon" />
      <h2>
        Bulbasaur's type is{" "}
        {
          <span style={{ background: "green", color: "white" }}>
            pokeCharacteristics.type
          </span>
        }{" "}
        and one of their moves is{" "}
        {
          <span style={{ background: "#FFFFFF", color: "#00FF00" }}>
            pokeCharacteristics.move
          </span>
        }
      </h2>
    </div>
  );
}
export default Showcase;
