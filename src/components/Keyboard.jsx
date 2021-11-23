export default function Keyboard({ handleGuessCharacter }) {
  return (
    <div className="keyboard-container">
      <div onClick={() => handleGuessCharacter("a")}>A</div>
      <div onClick={() => handleGuessCharacter("b")}>B</div>
      <div onClick={() => handleGuessCharacter("c")}>C</div>
      <div onClick={() => handleGuessCharacter("d")}>D</div>
      <div onClick={() => handleGuessCharacter("e")}>E</div>
      <div onClick={() => handleGuessCharacter("f")}>F</div>
      <div onClick={() => handleGuessCharacter("g")}>G</div>
      <div onClick={() => handleGuessCharacter("h")}>H</div>
      <div onClick={() => handleGuessCharacter("i")}>I</div>
      <div onClick={() => handleGuessCharacter("j")}>J</div>
      <div onClick={() => handleGuessCharacter("k")}>K</div>
      <div onClick={() => handleGuessCharacter("l")}>L</div>
      <div onClick={() => handleGuessCharacter("m")}>M</div>
      <div onClick={() => handleGuessCharacter("n")}>N</div>
      <div onClick={() => handleGuessCharacter("o")}>O</div>
      <div onClick={() => handleGuessCharacter("p")}>P</div>
      <div onClick={() => handleGuessCharacter("q")}>Q</div>
      <div onClick={() => handleGuessCharacter("r")}>R</div>
      <div onClick={() => handleGuessCharacter("s")}>S</div>
      <div onClick={() => handleGuessCharacter("t")}>T</div>
      <div onClick={() => handleGuessCharacter("u")}>U</div>
      <div onClick={() => handleGuessCharacter("v")}>V</div>
      <div onClick={() => handleGuessCharacter("w")}>W</div>
      <div onClick={() => handleGuessCharacter("x")}>X</div>
      <div onClick={() => handleGuessCharacter("y")}>Y</div>
      <div onClick={() => handleGuessCharacter("z")}>Z</div>
    </div>
  );
}
