function PostEdit() {
  const tacoTypes = ["Carne Asada", "Shrimp Tacos", "Barbacoa", "Tinga Tacos"];
  return (
    <>
      <h1>TacoTown</h1>
      <h2>Population: 15 Taco Bells</h2>
      <p>
        I’ve been following that taco truck around all day. Tacos, again? This
        will be 5 times this week and it’s only Tuesday. You see, the refried
        beans are really just the adhesive necessary to apply the soft tortilla
        to the hard taco shell. 50 cent tacos! I’ll take 30. I’d have to say,
        those tacos are on fleek. How bout a gosh darn quesadilla? Shrimp tacos
        are tasty tacos! Let’s do a beef and a chicken, and one with both.
        Tacos, tacos, tacos.
      </p>
      {tacoTypes.map((taco) => {
        return <h5>{taco}</h5>;
      })}
      <div>
        <h1>This is my code</h1>
        <form>
          <img
            src="https://media.discordapp.net/attachments/866850568559788035/885236017102209094/Rauls_background.png?width=1173&height=660"
            alt=""
          />
          <input>locaton</input>
        </form>
        <h1>new text</h1>
        <h2>Taco Gang</h2>
        <h2>I wish I was full of tacos instead of emotions</h2>
      </div>
    </>
  );
}

export default PostEdit;
